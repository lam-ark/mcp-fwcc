---
id: "cc_slot_mechanics:StickySymbolModule:recipes:custom_implementation"
title: "Recipe: Custom StickySymbolModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom StickySymbolModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { StickySymbolModule } from 'assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolModule';

@ccclass
export default class CustomStickySymbolModule extends StickySymbolModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
