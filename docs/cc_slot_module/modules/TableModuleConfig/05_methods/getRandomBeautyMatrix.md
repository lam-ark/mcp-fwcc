---
id: "cc_slot_module:TableModuleConfig:method:getRandomBeautyMatrix"
title: "TableModuleConfig.getRandomBeautyMatrix() Method Specification"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "method", "getRandomBeautyMatrix", "attract_mode"]
---

# `TableModuleConfig.getRandomBeautyMatrix(): string[][]`

---

## 1. Method Signature
```typescript
public getRandomBeautyMatrix(): string[][]
```

---

## 2. Detailed Algorithmic Execution Logic
Picks a random index from `this.BEAUTY_MATRIX` array and returns that curated symbol matrix.

---

## 3. Un-truncated Source Code Implementation
```typescript
public getRandomBeautyMatrix(): string[][] {
    const randomIndex = Math.floor(Math.random() * this.BEAUTY_MATRIX.length);
    return this.BEAUTY_MATRIX[randomIndex];
}
```
