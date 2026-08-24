---
id: "cc_slot_module:GameInit:method:setupDependencyInjection"
title: "GameInit.setupDependencyInjection() Method Specification"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "method", "setupDependencyInjection", "ioc", "provide", "dependency_injection"]
---

# `GameInit.setupDependencyInjection(): void`

---

## 1. Method Signature
```typescript
public setupDependencyInjection(): void
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: `GameInit.onLoad()` (Step 8).
* **Lifecycle Moment**: Frame 0, after data models and managers have been instantiated.

---

## 3. Detailed Algorithmic Execution Logic
1. Extracts `gameId` from `this._gameConfig.GAME_ID` and marks the root node with `this.node['__GAME_ID__'] = gameId`.
2. Resolves companion instances:
   * Creates `new SlotGameSettings()`.
   * Queries `this.getComponentInChildren(SlotSoundPlayerModule)`.
   * Queries `this.getComponentInChildren(UIManagerModule)`.
3. Calls `eno.provide(Token, Instance, gameId)` for all 12 singletons to populate the IoC container.

---

## 4. Caller & Callee Call Graph
* **Callers**: `GameInit.onLoad()`
* **Callees**: `this.getComponentInChildren()`, `eno.provide()`

---

## 5. Un-truncated Source Code Implementation
```typescript
setupDependencyInjection(): void {
    const gameId = this._gameConfig.GAME_ID;
    this.node['__GAME_ID__'] = gameId;

    const gameSettings = new SlotGameSettings();
    const slotSoundPlayer = this.getComponentInChildren(SlotSoundPlayerModule);
    const uiManager = this.getComponentInChildren(UIManagerModule);

    provide(Game, this._gameLogic, gameId);
    provide(MoneyFormatter, this._moneyFormatter, gameId);
    provide(MoneyTween, this._moneyTween, gameId);
    provide(Logger, this._logger, gameId);
    provide(GameDataStore, this._dataStore, gameId);
    provide(GameConfig, this._gameConfig, gameId);
    provide(UIManagerModule, uiManager, gameId);
    provide(GameEventManager, this._eventManager, gameId);
    provide(SlotSoundPlayerModule, slotSoundPlayer, gameId);
    provide(Scheduler, this._scheduler, gameId);
    provide(ObserverObject, observer, gameId);
    provide(SlotGameSettings, gameSettings, gameId);
}
```
