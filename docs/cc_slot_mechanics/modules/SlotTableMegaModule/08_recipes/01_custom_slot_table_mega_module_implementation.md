---
id: "cc_slot_mechanics:SlotTableMegaModule:recipes:custom_implementation"
title: "Recipe: Custom SlotTableMegaModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom SlotTableMegaModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { SlotTableMegaModule } from 'assets/cc-common/cc-slot-mechanics/MegaReel/scripts/SlotTableMegaModule';

@ccclass
export default class CustomSlotTableMegaModule extends SlotTableMegaModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
