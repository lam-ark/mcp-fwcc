---
id: "cc_slot_module:GameInit:method:onDestroy"
title: "GameInit.onDestroy() Method Specification"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "method", "onDestroy", "teardown", "memory_leak", "clearGameDependencies"]
---

# `GameInit.onDestroy(): void`

---

## 1. Method Signature
```typescript
public onDestroy(): void
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: Cocos Creator Engine 2.4 scene destruction pipeline.
* **Lifecycle Moment**: When the slot scene unloads or the `Canvas/Director` node is destroyed.

---

## 3. Detailed Algorithmic Execution Logic
1. Destroys logic engine instance: `this._gameLogic.destroy()`.
2. Destroys global event bus: `this._eventManager.destroy()`.
3. Clears dependency container registry for the active game: `eno.clearGameDependencies(this._gameConfig.GAME_ID)`.

---

## 4. Caller & Callee Call Graph
* **Callers**: Cocos Engine Component Lifecycle.
* **Callees**: `this._gameLogic.destroy()`, `this._eventManager.destroy()`, `eno.clearGameDependencies()`.

---

## 5. Un-truncated Source Code Implementation
```typescript
onDestroy(): void {
    if (this._gameLogic) {
        this._gameLogic.destroy();
    }
    if (this._eventManager) {
        this._eventManager.destroy();
        this._eventManager = null;
    }

    clearGameDependencies(this._gameConfig.GAME_ID);
}
```
