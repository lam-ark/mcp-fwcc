# GameDataStore: Overview & Architecture

> **Source Path**: `assets/cc-common/cc-slot-module/Core/GameDataStore.ts`  
> **Inheritance**: Plain TypeScript Class registered in IoC Container  
> **Online Reference**: [GameDataStore on Enotion Platform](https://slot-platform.enostd.gay/api-references/slot-module/game-data-store.html)

---

## 1. Purpose & Architectural Role
`GameDataStore` is the **Single Source of Truth** for player session and game state:
* Stores active matrix responses, paylines, bet configurations, wallet balances, and win amounts.
* Manages session resumption data (`isResume`, `dataResume`) upon player reconnection or page refresh.
* Injected into all modules via `@inject(GameDataStore)`.
