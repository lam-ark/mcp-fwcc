---
id: "cc_slot_mechanics:MegaReelData:methods:getHalfBonusIndex"
title: "MegaReelData.getHalfBonusIndex Method"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "methods", "getHalfBonusIndex"]
---

# 📖 `MegaReelData.getHalfBonusIndex()`

---

## 1. Method Signature & Overview

```typescript
getHalfBonusIndex(): string[]
```

- **Primary Role**: Implements getHalfBonusIndex within the MegaReelData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getHalfBonusIndex(): string[] {
        if (this["hBi"]) {
            return this["hBi"];
        } else {
            return [];
        }
    }
```
