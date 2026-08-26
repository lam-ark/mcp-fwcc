---
id: "cc_slot_mechanics:InfinityTableTest:methods:stopRespin1"
title: "InfinityTableTest.stopRespin1 Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "methods", "stopRespin1"]
---

# 📖 `InfinityTableTest.stopRespin1()`

---

## 1. Method Signature & Overview

```typescript
stopRespin1(): void
```

- **Primary Role**: Implements stopRespin1 within the InfinityTableTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopRespin1(): void {
        this.scheduleOnce(() => {
            const infinityData = this.table.getComponent(InfinityTableData);
            infinityData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5,2,3,4].map(String);
            this.table.stopRespin(null);

            this.startRespin2();
        }, 0.5);
    }
```
