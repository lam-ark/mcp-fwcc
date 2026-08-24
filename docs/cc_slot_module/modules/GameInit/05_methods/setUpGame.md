---
id: "cc_slot_module:GameInit:method:setUpGame"
title: "GameInit.setUpGame() Method Specification"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "method", "setUpGame", "network", "post_auth"]
---

# `GameInit.setUpGame(): void`

---

## 1. Method Signature
```typescript
public setUpGame(): void
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: Socket Network Callback via `connectNetwork.loginScene()`.
* **Lifecycle Moment**: Immediately after player session token is validated by the game server.

---

## 3. Detailed Algorithmic Execution Logic
1. Logs `"login success"`.
2. Connects socket packet routers into the core game engine: `this._gameLogic.initNetwork(network)`.
3. If `this.isConsoleTest` is enabled, triggers `this._gameLogic.switchToConsoleTest()`.

---

## 4. Caller & Callee Call Graph
* **Callers**: `connectNetwork.loginScene()` success callback.
* **Callees**: `this._gameLogic.initNetwork()`, `this._gameLogic.switchToConsoleTest()`

---

## 5. Un-truncated Source Code Implementation
```typescript
setUpGame(): void {
    log("login success");
    this._gameLogic.initNetwork(network);
    if (this.isConsoleTest) {
        this._gameLogic.switchToConsoleTest();
    }
}
```
