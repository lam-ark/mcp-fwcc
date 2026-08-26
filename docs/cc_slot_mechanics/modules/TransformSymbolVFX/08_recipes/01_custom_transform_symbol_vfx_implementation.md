---
id: "cc_slot_mechanics:TransformSymbolVFX:recipes:custom_implementation"
title: "Recipe: Custom TransformSymbolVFX Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TransformSymbolVFX Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TransformSymbolVFX } from 'assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolVFX';

@ccclass
export default class CustomTransformSymbolVFX extends TransformSymbolVFX {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
