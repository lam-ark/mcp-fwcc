---
id: "cc_slot_mechanics:CellTableConfig:recipes:custom_implementation"
title: "Recipe: Custom CellTableConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CellTableConfig", "cell_table_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CellTableConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CellTableConfig } from 'assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellTableConfig';

@ccclass
export default class CustomCellTableConfig extends CellTableConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
