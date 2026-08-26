---
id: "cc_slot_mechanics:CellReelModule:recipes:custom_implementation"
title: "Recipe: Custom CellReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CellReelModule", "cell_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CellReelModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CellReelModule } from 'assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellReelModule';

@ccclass
export default class CustomCellReelModule extends CellReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
