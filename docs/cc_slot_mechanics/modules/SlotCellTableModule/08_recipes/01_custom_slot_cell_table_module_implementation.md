---
id: "cc_slot_mechanics:SlotCellTableModule:recipes:custom_implementation"
title: "Recipe: Custom SlotCellTableModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom SlotCellTableModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { SlotCellTableModule } from 'assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/SlotCellTableModule';

@ccclass
export default class CustomSlotCellTableModule extends SlotCellTableModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
