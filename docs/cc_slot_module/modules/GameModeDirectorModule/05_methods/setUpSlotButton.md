---
id: "cc_slot_module:GameModeDirectorModule:method:setUpSlotButton"
title: "GameModeDirectorModule.setUpSlotButton() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "setUpSlotButton"]
---

# `GameModeDirectorModule.setUpSlotButton(data: any): void`

---

## 1. Method Signature
```typescript
setUpSlotButton(data: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
Extracts `gameMode` and `node` from `data`. If `gameMode === this.gameMode`, assigns `this.slotButton = node`.

---

## 3. Un-truncated Source Code Implementation
```typescript
setUpSlotButton(data): void {
    const { gameMode, node } = data;
    if (gameMode === this.gameMode) {
        this.slotButton = node;
    }
}
```
