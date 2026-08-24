---
id: "cc_slot_module:CascadeModuleData:methods:getMatrix"
title: "CascadeModuleData.getMatrix Method"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "methods", "getMatrix", "SlotUtils"]
---

# 📖 `CascadeModuleData.getMatrix()`

---

## 1. Method Overview & Signature

Retrieves active round matrix based on `gameMode` and converts it to a 2D column array via `eno.SlotUtils.convertSlotMatrix()`.

```typescript
public getMatrix(): string[][]
```

---

## 2. Complete Source Code Implementation

```typescript
getMatrix(): string[][] {
    let matrix = [];
    switch (this.gameMode) {
        case GAME_MODE_ENUM.NORMAL_GAME:
            matrix = this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
            break;
        case GAME_MODE_ENUM.FREE_GAME:
            matrix = this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
            break;
    }
    return eno.SlotUtils.convertSlotMatrix(matrix, this.config.CASCADE_TABLE_CONFIG.format);
}
```
