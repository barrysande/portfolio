<!-- ---
title: "Why I Always Reach for PostgreSQL"
subtitle: "In a world of specialized databases, the boring choice keeps being the right one."
category: "Craft"
date: "2026-02-28"
readTime: "4 min"
published: true
---

Every few months a new database gets traction on the timeline. Graph databases, document stores, edge-native SQLite derivatives, multi-region distributed SQL. Some of them are genuinely impressive. I've read the docs, run the benchmarks, watched the conference talks.

I still use PostgreSQL for almost everything.

## What you're actually buying

When you choose a database, you're not just choosing a storage format. You're choosing a query model, a consistency guarantee, a backup story, an operations surface, and a community. PostgreSQL wins most of those columns for the kinds of problems I actually build against.

ACID transactions are not optional for financial data, user account operations, or anything where partial writes would corrupt state. The document databases that gave up strict consistency gave it up for scale characteristics most applications will never need.

## The features people forget

PostgreSQL ships with things developers reach for third-party tools to get:

- Full-text search that's good enough for most search requirements
- JSON/JSONB columns for when your data really is document-shaped
- Row-level security for multi-tenant systems
- `pg_notify` and `LISTEN/NOTIFY` for lightweight pub/sub
- Window functions for analytics queries that would otherwise require application code

None of these are as specialized as dedicated tools. All of them are *there*, transactional, and consistent with your relational data.

## The operational reality

PostgreSQL has been in production for 30 years. The tooling ecosystem is vast, the hosting options are numerous, and the knowledge is transferable. When something breaks at 2am, there are years of Stack Overflow answers, blog posts, and Discord threads pointing at the fix.

Specialized databases introduce specialized operational knowledge. That cost is sometimes worth it. For most applications, it isn't.

## When to reach for something else

I'll use Redis for caching and pub/sub at higher throughput than `pg_notify` can handle. I'll use a dedicated search service if the full-text requirements are complex enough. I'll consider a time-series database for metrics pipelines.

But for the core application data — users, sessions, content, transactions — PostgreSQL earns its place on every project. -->
