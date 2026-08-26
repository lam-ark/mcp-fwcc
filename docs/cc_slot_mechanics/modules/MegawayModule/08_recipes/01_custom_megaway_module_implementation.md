---
id: "cc_slot_mechanics:MegawayModule:recipes:custom_implementation"
title: "Recipe: Custom MegawayModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MegawayModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MegawayModule } from 'assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayModule';

@ccclass
export default class CustomMegawayModule extends MegawayModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
