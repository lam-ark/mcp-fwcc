---
id: "cc_slot_mechanics:RemovedSymbolModule:recipes:custom_implementation"
title: "Recipe: Custom RemovedSymbolModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom RemovedSymbolModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { RemovedSymbolModule } from 'assets/cc-common/cc-slot-mechanics/RemovedSymbol/RemovedSymbolModule';

@ccclass
export default class CustomRemovedSymbolModule extends RemovedSymbolModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
