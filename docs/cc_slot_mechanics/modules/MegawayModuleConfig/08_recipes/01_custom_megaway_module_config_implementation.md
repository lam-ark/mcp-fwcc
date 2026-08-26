---
id: "cc_slot_mechanics:MegawayModuleConfig:recipes:custom_implementation"
title: "Recipe: Custom MegawayModuleConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MegawayModuleConfig", "megaway_module_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MegawayModuleConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MegawayModuleConfig } from 'assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayModuleConfig';

@ccclass
export default class CustomMegawayModuleConfig extends MegawayModuleConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
