---
id: "cc_slot_mechanics:TransformSymbolItem:recipes:custom_implementation"
title: "Recipe: Custom TransformSymbolItem Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TransformSymbolItem", "transform_symbol_item", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TransformSymbolItem Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TransformSymbolItem } from 'assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolItem';

@ccclass
export default class CustomTransformSymbolItem extends TransformSymbolItem {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
