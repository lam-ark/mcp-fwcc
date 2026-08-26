---
id: "cc_slot_mechanics:InfinityTableTest:methods:stopRespin2"
title: "InfinityTableTest.stopRespin2 Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "methods", "stopRespin2"]
---

# 📖 `InfinityTableTest.stopRespin2()`

---

## 1. Method Signature & Overview

```typescript
stopRespin2(): void
```

- **Primary Role**: Implements stopRespin2 within the InfinityTableTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopRespin2(): void {
        this.scheduleOnce(() => {
            const infinityData = this.table.getComponent(InfinityTableData);
            infinityData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5,2,3,4,5,6,7].map(String);
            this.table.stopRespin(null);
        }, 0.5);
    }
```
