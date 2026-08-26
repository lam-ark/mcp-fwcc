---
id: "cc_slot_mechanics:TransformSymbolData:recipes:custom_implementation"
title: "Recipe: Custom TransformSymbolData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TransformSymbolData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TransformSymbolData } from 'assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolData';

@ccclass
export default class CustomTransformSymbolData extends TransformSymbolData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
