---
id: "cc_slot_mechanics:StickySymbolConfig:recipes:custom_implementation"
title: "Recipe: Custom StickySymbolConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["StickySymbolConfig", "sticky_symbol_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom StickySymbolConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { StickySymbolConfig } from 'assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolConfig';

@ccclass
export default class CustomStickySymbolConfig extends StickySymbolConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
