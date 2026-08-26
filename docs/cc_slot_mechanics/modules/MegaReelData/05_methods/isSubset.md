---
id: "cc_slot_mechanics:MegaReelData:methods:isSubset"
title: "MegaReelData.isSubset Method"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "methods", "isSubset"]
---

# 📖 `MegaReelData.isSubset()`

---

## 1. Method Signature & Overview

```typescript
isSubset(mainArray: any[], subArray: any[]): boolean
```

- **Primary Role**: Implements isSubset within the MegaReelData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
isSubset(mainArray: any[], subArray: any[]): boolean {
        return subArray.every(value => mainArray.indexOf(value.toString()) >= 0);
    }
```
