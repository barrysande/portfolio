// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import { KVNamespace, DurableObjectNamespace } from '@cloudflare/workers-types';
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env?: {
				YOUR_KV_NAMESPACE: KVNamespace;
				YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;
			};
		}
	}
}

export {};
