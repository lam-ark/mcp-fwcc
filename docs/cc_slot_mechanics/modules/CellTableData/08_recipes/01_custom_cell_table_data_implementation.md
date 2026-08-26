---
id: "cc_slot_mechanics:CellTableData:recipes:custom_implementation"
title: "Recipe: Custom CellTableData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CellTableData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CellTableData } from 'assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellTableData';

@ccclass
export default class CustomCellTableData extends CellTableData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
