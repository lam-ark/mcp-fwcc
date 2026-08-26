---
id: "cc_slot_mechanics:NudgeTableModule:methods:prepareNudge"
title: "NudgeTableModule.prepareNudge Method"
category: "cc_slot_mechanics"
tags: ["NudgeTableModule", "nudge_table_module", "cc_slot_mechanics", "methods", "prepareNudge"]
---

# 📖 `NudgeTableModule.prepareNudge()`

---

## 1. Method Signature & Overview

```typescript
prepareNudge(): void
```

- **Primary Role**: Implements prepareNudge within the NudgeTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
prepareNudge(): void {
        const nudgeData = this._slotTableData.getNudgeData();
        // { index, step, direction }
        nudgeData.forEach((data) => {
            (this.reels[data.index] as NudgeReelModule).prepareNudge();
        })
    }
```
