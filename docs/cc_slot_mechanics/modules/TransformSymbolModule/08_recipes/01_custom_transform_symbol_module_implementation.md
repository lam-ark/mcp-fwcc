---
id: "cc_slot_mechanics:TransformSymbolModule:recipes:custom_implementation"
title: "Recipe: Custom TransformSymbolModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TransformSymbolModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TransformSymbolModule } from 'assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolModule';

@ccclass
export default class CustomTransformSymbolModule extends TransformSymbolModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
