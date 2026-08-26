---
id: "cc_slot_mechanics:InfinityTableModule:methods:spinExtendedReel"
title: "InfinityTableModule.spinExtendedReel Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "spinExtendedReel"]
---

# 📖 `InfinityTableModule.spinExtendedReel()`

---

## 1. Method Signature & Overview

```typescript
spinExtendedReel(): void
```

- **Primary Role**: Implements spinExtendedReel within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected spinExtendedReel(): void {
		const index: number = this.extendedReels.length - 1;
        (this.extendedReels[index] as InfinityReelModule).runExtendedReelSpin();	
    }
```
