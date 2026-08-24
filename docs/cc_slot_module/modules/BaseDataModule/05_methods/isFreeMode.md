---
id: "cc_slot_module:BaseDataModule:method:isFreeMode"
title: "BaseDataModule.isFreeMode() Method Specification"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "method", "isFreeMode"]
---

# `BaseDataModule.isFreeMode(): boolean`

---

## 1. Method Signature
```typescript
isFreeMode(): boolean
```

---

## 2. Detailed Algorithmic Execution Logic
Tests `this.gameMode` against `FREE_GAME`, `FREE_GAME_1`, `FREE_GAME_2`, `FREE_GAME_3`, `FREE_GAME_4`. Returns `true` if matched, `false` otherwise.

---

## 3. Un-truncated Source Code Implementation
```typescript
isFreeMode(): boolean {
    switch (this.gameMode) {
        case GAME_MODE_ENUM.FREE_GAME:
        case GAME_MODE_ENUM.FREE_GAME_1:
        case GAME_MODE_ENUM.FREE_GAME_2:
        case GAME_MODE_ENUM.FREE_GAME_3:
        case GAME_MODE_ENUM.FREE_GAME_4:
            return true;
    }
    return false;
}
```
