---
id: "cc_slot_module:BaseGameDirector:method:setGameSpeed"
title: "BaseGameDirector.setGameSpeed() Method Specification"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "method", "setGameSpeed", "speed", "turbo", "FTR"]
---

# `BaseGameDirector.setGameSpeed(mode: number): void`

---

## 1. Method Signature
```typescript
public setGameSpeed(mode: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Forwards the speed change to `this.executor.setGameSpeed(mode)`.
2. Updates `this.executor.gameSpeed`, syncs with `dataStore.setGameSpeed(gameSpeed)`, and updates `gameSettings.gameSpeed`.
3. Subsequent step dispatches will query the director for `_[SPEED]` method variants (e.g. `STOP_REEL_1` or `STOP_REEL_2`).

---

## 3. Un-truncated Source Code Implementation
```typescript
setGameSpeed(mode): void {
    this.executor.setGameSpeed(mode);
}
```
