---
id: "cc_slot_module:NormalGameDirectorModule:method:onJoinGameSuccess"
title: "NormalGameDirectorModule.onJoinGameSuccess() Method Specification"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "method", "onJoinGameSuccess", "JOIN_GAME_SUCCESS"]
---

# `NormalGameDirectorModule.onJoinGameSuccess(data: any): void`

---

## 1. Method Signature
```typescript
public onJoinGameSuccess(data: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Emits console warning tag `%c onJoinGameSuccess ` in red text.
2. Broadcasts `GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS` with payload over `this.eventManager`.
3. Informs UI controls (`SlotButtonNormal`, `BetModule`) that initial server connection and wallet authentication have succeeded.

---

## 3. Un-truncated Source Code Implementation
```typescript
onJoinGameSuccess(data: any): void {
    warn("%c onJoinGameSuccess ", "color: red", data);
    this.eventManager.emit(GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS, data);
}
```
