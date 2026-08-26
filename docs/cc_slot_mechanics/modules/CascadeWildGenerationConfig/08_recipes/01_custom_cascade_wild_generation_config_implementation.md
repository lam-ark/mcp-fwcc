---
id: "cc_slot_mechanics:CascadeWildGenerationConfig:recipes:custom_implementation"
title: "Recipe: Custom CascadeWildGenerationConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationConfig", "cascade_wild_generation_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CascadeWildGenerationConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CascadeWildGenerationConfig } from 'assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationConfig';

@ccclass
export default class CustomCascadeWildGenerationConfig extends CascadeWildGenerationConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
