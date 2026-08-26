---
id: "cc_slot_mechanics:InfinityTableData:recipes:custom_implementation"
title: "Recipe: Custom InfinityTableData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableData", "infinity_table_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InfinityTableData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InfinityTableData } from 'assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableData';

@ccclass
export default class CustomInfinityTableData extends InfinityTableData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
