---
id: "cc_slot_mechanics:GigabloxReelModule:recipes:custom_implementation"
title: "Recipe: Custom GigabloxReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom GigabloxReelModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { GigabloxReelModule } from 'assets/cc-common/cc-slot-mechanics/Gigablox/scripts/GigabloxReelModule';

@ccclass
export default class CustomGigabloxReelModule extends GigabloxReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
