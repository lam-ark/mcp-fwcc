---
id: "cc_slot_mechanics:RemovedSymbolData:recipes:custom_implementation"
title: "Recipe: Custom RemovedSymbolData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolData", "removed_symbol_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom RemovedSymbolData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { RemovedSymbolData } from 'assets/cc-common/cc-slot-mechanics/RemovedSymbol/RemovedSymbolData';

@ccclass
export default class CustomRemovedSymbolData extends RemovedSymbolData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
