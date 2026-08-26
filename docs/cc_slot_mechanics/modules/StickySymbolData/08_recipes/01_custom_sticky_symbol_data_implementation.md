---
id: "cc_slot_mechanics:StickySymbolData:recipes:custom_implementation"
title: "Recipe: Custom StickySymbolData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom StickySymbolData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { StickySymbolData } from 'assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolData';

@ccclass
export default class CustomStickySymbolData extends StickySymbolData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
