---
id: "cc_slot_mechanics:NudgeTableData:recipes:custom_implementation"
title: "Recipe: Custom NudgeTableData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeTableData", "nudge_table_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom NudgeTableData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { NudgeTableData } from 'assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeTableData';

@ccclass
export default class CustomNudgeTableData extends NudgeTableData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
