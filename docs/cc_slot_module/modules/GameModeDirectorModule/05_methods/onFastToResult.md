---
id: "cc_slot_module:GameModeDirectorModule:method:onFastToResult"
title: "GameModeDirectorModule.onFastToResult() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onFastToResult", "FTR", "TABLE_FAST_STOP"]
---

# `GameModeDirectorModule.onFastToResult(mode: number): void`

---

## 1. Method Signature
```typescript
public onFastToResult(mode: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Switches internal speed level: `this.setGameSpeed(GAME_SPEED_ENUM.INSTANTLY)`.
2. Emits scoped event on the private bus: `this.moduleEvent.emit("TABLE_FAST_STOP")`.
3. Informs child table modules to snap reel symbols instantly without easing curves.

---

## 3. Un-truncated Source Code Implementation
```typescript
onFastToResult(_mode: number): void {
    this.setGameSpeed(GAME_SPEED_ENUM.INSTANTLY);
    this.moduleEvent.emit("TABLE_FAST_STOP");
}
```
