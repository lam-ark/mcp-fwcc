---
id: "cc_slot_mechanics:HorizontalCascadeModule:recipes:custom_implementation"
title: "Recipe: Custom HorizontalCascadeModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalCascadeModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalCascadeModule } from 'assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeModule';

@ccclass
export default class CustomHorizontalCascadeModule extends HorizontalCascadeModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
