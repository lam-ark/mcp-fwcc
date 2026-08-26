---
id: "cc_slot_mechanics:HorizontalTableData:recipes:custom_implementation"
title: "Recipe: Custom HorizontalTableData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalTableData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalTableData } from 'assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableData';

@ccclass
export default class CustomHorizontalTableData extends HorizontalTableData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
