---
id: "cc_slot_module:GameInit:methods:index"
title: "GameInit Methods & API Specification Index"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "methods", "api", "index"]
---

# 🚀 GameInit Methods & API Specification Index

## 1. Master Method Index

| Method Signature | Visibility | Lifecycle Phase | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoad(): void`](./onLoad.md)** | `public` | Frame 0 | Synchronous 9-step bootstrap pipeline and IoC container population. |
| **[`start(): void`](./start.md)** | `public` | Frame 1 | Triggers network login handshake. |
| **[`initializeConfigAndDataStore(): void`](./initializeConfigAndDataStore.md)** | `public` | Frame 0 Step 2 | Resolves `GameConfig` and injects it into `GameDataStore`. |
| **[`initializeGameLogic(): void`](./initializeGameLogic.md)** | `public` | Frame 0 Step 3 | Instantiates `eno.Game` and sets default language. |
| **[`setupDependencyInjection(): void`](./setupDependencyInjection.md)** | `public` | Frame 0 Step 8 | Binds all 12 core singletons via `eno.provide()`. |
| **[`connect(): void`](./connect.md)** | `public` | Frame 1 | Dispatches `connectNetwork.loginScene()` with auth callbacks. |
| **[`setUpGame(): void`](./setUpGame.md)** | `public` | Post-Auth | Binds socket router `_gameLogic.initNetwork(network)`. |
| **[`onDestroy(): void`](./onDestroy.md)** | `public` | Teardown | Destroys logic instances and calls `clearGameDependencies(gameId)`. |
