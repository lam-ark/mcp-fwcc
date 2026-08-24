---
id: "cc_slot_module:SlotTablePaylineData:inheritance:subclassing_guide"
title: "SlotTablePaylineData Subclassing Guide"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotTablePaylineData Subclassing Guide

---

## 1. Subclassing Declaration

```typescript
const { ccclass } = cc._decorator;
import { SlotTablePaylineData } from "SlotTablePaylineData";

@ccclass
export default class SlotTablePaylineData9666 extends SlotTablePaylineData {
    // Custom payline data logic
}
```

---

## 2. Invariant Rules

1. **Retain `registeredKeys`**: Always preserve the base 15 registered keys when extending with game-specific keys.
2. **Coordinate Matrix Parity**: Ensure `getMatrix()` layout format matches `PaylineConfig.TABLE_CONFIG.format`.
