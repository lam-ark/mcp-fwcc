---
id: "cc_slot_mechanics:TransformSymbolConfig:recipes:custom_implementation"
title: "Recipe: Custom TransformSymbolConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TransformSymbolConfig", "transform_symbol_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TransformSymbolConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TransformSymbolConfig } from 'assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolConfig';

@ccclass
export default class CustomTransformSymbolConfig extends TransformSymbolConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
