---
id: "cc_slot_mechanics:CascadeWildGenerationData:recipes:custom_implementation"
title: "Recipe: Custom CascadeWildGenerationData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CascadeWildGenerationData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CascadeWildGenerationData } from 'assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationData';

@ccclass
export default class CustomCascadeWildGenerationData extends CascadeWildGenerationData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
