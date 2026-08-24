---
id: "cc_slot_module:GameModeDirectorModule:method:setUpSpinTimes"
title: "GameModeDirectorModule.setUpSpinTimes() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "setUpSpinTimes"]
---

# `GameModeDirectorModule.setUpSpinTimes(data: any): void`

---

## 1. Method Signature
```typescript
setUpSpinTimes(data: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
Extracts `gameMode` and `node` from `data`. If `gameMode === this.gameMode`, assigns `this.spinTimes = node`.

---

## 3. Un-truncated Source Code Implementation
```typescript
setUpSpinTimes(data): void {
    const { gameMode, node } = data;
    if (gameMode === this.gameMode) {
        this.spinTimes = node;
    }
}
```
