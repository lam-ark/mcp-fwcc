---
id: "cc_slot_mechanics:MegaReelData:methods:getFullBonusIndex"
title: "MegaReelData.getFullBonusIndex Method"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "methods", "getFullBonusIndex"]
---

# 📖 `MegaReelData.getFullBonusIndex()`

---

## 1. Method Signature & Overview

```typescript
getFullBonusIndex(): string[]
```

- **Primary Role**: Implements getFullBonusIndex within the MegaReelData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getFullBonusIndex(): string[] {
        if (this["fBi"]) {
            return this["fBi"];
        } else {
            return [];
        }
    }
```
