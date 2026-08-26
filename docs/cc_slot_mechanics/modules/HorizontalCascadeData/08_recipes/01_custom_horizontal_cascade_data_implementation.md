---
id: "cc_slot_mechanics:HorizontalCascadeData:recipes:custom_implementation"
title: "Recipe: Custom HorizontalCascadeData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeData", "horizontal_cascade_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalCascadeData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalCascadeData } from 'assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeData';

@ccclass
export default class CustomHorizontalCascadeData extends HorizontalCascadeData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
