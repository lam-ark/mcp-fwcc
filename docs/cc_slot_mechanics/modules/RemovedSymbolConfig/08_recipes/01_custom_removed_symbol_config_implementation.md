---
id: "cc_slot_mechanics:RemovedSymbolConfig:recipes:custom_implementation"
title: "Recipe: Custom RemovedSymbolConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolConfig", "removed_symbol_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom RemovedSymbolConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { RemovedSymbolConfig } from 'assets/cc-common/cc-slot-mechanics/RemovedSymbol/RemovedSymbolConfig';

@ccclass
export default class CustomRemovedSymbolConfig extends RemovedSymbolConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
