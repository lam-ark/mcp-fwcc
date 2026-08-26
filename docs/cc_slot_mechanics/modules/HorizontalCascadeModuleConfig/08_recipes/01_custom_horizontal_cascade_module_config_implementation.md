---
id: "cc_slot_mechanics:HorizontalCascadeModuleConfig:recipes:custom_implementation"
title: "Recipe: Custom HorizontalCascadeModuleConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModuleConfig", "horizontal_cascade_module_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalCascadeModuleConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalCascadeModuleConfig } from 'assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeModuleConfig';

@ccclass
export default class CustomHorizontalCascadeModuleConfig extends HorizontalCascadeModuleConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
