---
id: "cc_slot_mechanics:CascadeWildGenerationModule:recipes:custom_implementation"
title: "Recipe: Custom CascadeWildGenerationModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CascadeWildGenerationModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CascadeWildGenerationModule } from 'assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationModule';

@ccclass
export default class CustomCascadeWildGenerationModule extends CascadeWildGenerationModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
