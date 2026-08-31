---
title: 'Notifications using Server-Sent Events'
subtitle: 'Lessons I learnt from implementing a notification feature'
type: 'article'
topic: 'Software Engineering'
tags: ['notifications', 'server sent events', 'architecture', 'typescript']
date: '2026-08-31'
published: true
---

<script>
  import Note from '$lib/components/blog/Note.svelte';
</script>

## Preliminaries

For this piece, I mostly focus on the steps, decisions, and core concepts involved in building a reliable notification system with Server-Sent Events (SSE). I mention the Backend for Frontend (BFF) pattern. If you are unfamiliar with it, please check out this earlier [piece](https://barrysande.com/blog/sveltekit-and-adonisjs) I wrote about it.

My examples use [AdonisJS](https://docs.adonisjs.com/) for the API and [SvelteKit](https://svelte.dev/docs) for the web application because those are the tools I work with. You should check them out, by the way ;-)

## The Journey

AdonisJS offers the [Transmit package](https://docs.adonisjs.com/guides/digging-deeper/server-sent-events), which simplifies SSE implementation on the server and client. Transmit handles the SSE routes, channels, and broadcasting and provides ways to authenticate and authorise users for private subscriptions. In my case, I use the application's usual authentication middleware at the Transmit route level and Transmit channel authorization to ensure users only subscribe to their channels as shown below:

```typescript
//Authentication in start/routes.ts
transmit.registerRoutes((route) => {
	route.middleware(middleware.auth({ guards: ['web'] }));
});
```

```typescript
//Authorization in start/transmit.ts
import transmit from '@adonisjs/transmit/services/main';

transmit.authorize<{ accountId: string }>(
	'accounts/:accountId/notifications',
	(ctx, { accountId }) => ctx.auth.user?.id === accountId
);
```

<Note>
 `transmit.registerRoutes` registers the three routes needed to establish the SSE connection, subscribe the client to a channel, and unsubscribe the client from a channel.
 Unauthenticated users cannot connect to the channels.
</Note>

In my application, I created notifications as part of the same database transaction as the flows that produced them. For example, I sometimes needed to record a change that other parts of the application depended on and inform the users affected by that change.

I wrapped all the processes that should succeed or fail together in a database transaction, including saving the notification. I then registered the Transmit signal to run once the transaction committed. This order of steps ensures that rolled-back transactions cannot transmit a live notification to the client.

Another failure point is that the database transaction can commit but the live notification transmission can fail.

Here is a code snippet showing how I do it in the service:

```typescript
import { DateTime } from 'luxon'
import transmit from '@adonisjs/transmit/services/main'
import db from '@adonisjs/lucid/services/db'
import Notification from '#models/notification/message'
import { NOTIFICATION_CHANGED_EVENT } from '#types/notification_event'
import type {
  NotificationInput
} from '#types/notification'
import type { TransactionClientContract } from '@adonisjs/lucid/types/database'

export default class NotificationService {

  async create(
    input: NotificationInput,
    trx: TransactionClientContract
  ) {
    const notification = await Notification.create(
      {
        ...input,
        actionPath: input.actionPath ?? null,
        reportGenerationId: input.reportGenerationId ?? null,
        stockMovementId: input.stockMovementId ?? null,
        stockRequestId: input.stockRequestId ?? null,
        stockTransactionId: input.stockTransactionId ?? null,
        createdAt: DateTime.now(),
      },
      { client: trx }
    )

    trx.on('commit', () =>
      transmit.broadcast(
        `accounts/${notification.recipientAccountId}/notifications`,
        NOTIFICATION_CHANGED_EVENT
      )
    )

    return notification
  }

```

On the client, Transmit provides a browser library for connecting to the API’s SSE routes and subscribing to notification channels.

My initial mental model was to have a notifications route that loaded data through SvelteKit's load functions and updated it through form actions. These ordinary requests would work over HTTP(S) depending on the environment. For the live notifications feature, I wanted a notification counter that incremented as notifications arrived. I initially sent the complete notification through SSE, appended it to a client-side notification list, displayed that list as state, and updated the counter.
However, I encountered the following problems during implementation:

### 1. The live connection belongs in the browser

SvelteKit provides server-side route files such as `+server.ts`, `+page.server.ts`, and `+layout.server.ts`. In my setup, these files are useful for enforcing authentication and authorisation before making ordinary API read and write requests.

SSE is a server-to-client connection, so a direct server-to-client setup is ideal. However, with SvelteKit, you could proxy the SSE via a `+server.ts` API endpoint and then have the page call the proxy endpoint from the component. I initially attempted this approach to maintain my server-to-server HTTP(S) pattern but ended up fighting native browser behaviour with little benefit. Besides, the three registered Transmit routes are the only ones exposed in the browser's DevTools, while the channel remains private.

I therefore created the Transmit client inside a Svelte component. The component subscribes to the user’s notification channel, listens for signals, and closes the subscription when it is destroyed.

This creates two authentication points:

- SvelteKit protects normal page loads, form actions, and its server routes.
- AdonisJS protects the Transmit routes and authorises the user’s private notification channel.

The second point matters because SvelteKit’s server-side checks do not protect a connection made from the browser directly to AdonisJS.

The Transmit client includes the session cookie, if available, in the subscription request, which AdonisJS uses to authenticate that subscription request.

`

### 2. API and client state synchronisation

I realised that my initial implementation naively assumed that receiving a new live event was the only cause of change in the notification list.

Other events can also make that list stale:

- A notification is marked as read.
- A new notification is created while another refresh is running.
- The live connection disconnects and reconnects.
- The browser goes offline and later comes back online.
- The user leaves the tab and returns later.
- Several refresh requests happen close together.

These events quickly make a client-managed notification list complicated. The client would need to append new notifications, remove read ones, prevent duplicates, maintain the unread count, resolve event ordering, and recover anything missed while disconnected.

I needed a way to reduce that client complexity without introducing another synchronisation system.

### 3. Solution: SSE as an invalidation signal/event

The AdonisJS docs examples under SSE [Channels](https://docs.adonisjs.com/guides/digging-deeper/server-sent-events#channels) gave me an idea, I could use Transmit as a signal instead of a carrier for the data, the design became simpler. The database notification is persistent but SSE delivery is not. A signal may be missed because the browser is disconnected, the user has changed tabs, or the live connection has failed.

The signal is still linked to the database record because the API sends it once the transaction commits. I therefore stopped sending complete notification details through Transmit. Instead, the API sends a small signal whenever notification state changes:

`{ type: 'notifications.changed' }`

When the signal arrives, the client requests the latest unread notifications from the API and replaces its displayed state with the response.

This moved notification-list management back to the API. The client no longer needs to merge messages, prevent duplicates, resolve event ordering, or repair missed events.

The trade-off is one additional HTTP request after each live signal. For my notification volume, that was a much better trade-off than maintaining two sources of client state. This improves reliability in two ways: if the database transaction preceding the live notification rolls back, the user receives no notification; if the transaction commits but the transmission fails, the database record still exists.

The result still feels live to the user, but the notification data is reconciled from the database record.

### 4. Manageable client-side complexity

Eliminating client state coordination based on SSE messages made it easier to handle the other notification state-invalidating events I pointed out earlier.

When the client receives that signal, it requests the latest unread notifications from the API. The same refresh can happen when:

- The browser window regains focus.
- The user returns to the tab.
- The browser comes back online.
- Transmit reconnects.
- A notification is marked as read.
- The user manually retries a failed request.

However, another problem appears when several events happen close together. For example, an SSE signal may arrive while a refresh request is already running. Starting another request immediately would create racing requests, while ignoring the signal could leave the client with stale data.

I handled this by allowing only one notification refresh to run at a time.

When another refresh is requested during the current one, the client records that request and returns the promise for the running task. Once the current request finishes, the refresh loop checks whether another request arrived. If it did, the loop fetches the notifications one more time.

The flow looks like this:

1. An event requests a refresh.
2. If no refresh is running, the client starts one.
3. If one is already running, the client records that another refresh is needed.
4. The current request finishes.
5. If another refresh was requested, the client fetches once more.
6. The refresh task and loading state are cleared.

This prevents competing requests without losing changes that happen during an active request.

Marking a notification as read uses the same flow. After the API records the read state, the client refreshes the unread list. This removes the notification that was marked as read while also retrieving any new notifications created during that time.

### 5. Failure handling and cleanup

Treating SSE as a signal also made failure handling clearer because notification-loading failures and live-connection failures can be debugged separately without worrying whether one fix will break another.

If loading notifications fails, the client cannot confirm the latest state. In this case, it displays the loading error and provides a Retry button.

If the live connection fails, previously loaded notifications are still valid. The user has only lost immediate updates. The client can recover by refreshing when the browser reconnects, the window regains focus, the tab becomes visible, or the page is reloaded.

If a mark-as-read request fails, the notification remains in the unread list, and the user receives an error message.

The component must also clean up after itself. When it is destroyed, it:

- Stops listening for Transmit messages.
- Deletes the notification subscription.
- Closes the Transmit connection.
- Cancels unfinished notification requests.
- Prevents completed requests from updating a component that no longer exists.

This separation also helps when debugging. If live delivery fails but a page refresh retrieves the notification, the problem is in the live connection. If a successful API refresh does not contain the expected notification, the investigation can move to notification creation, recipient selection, or API query handling.

The user may temporarily miss a live update, but they do not lose the notification itself because the saved API state will be displayed eventually.
