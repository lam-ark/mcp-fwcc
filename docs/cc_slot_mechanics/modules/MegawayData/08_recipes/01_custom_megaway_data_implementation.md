---
id: "cc_slot_mechanics:MegawayData:recipes:custom_implementation"
title: "Recipe: Custom MegawayData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MegawayData", "megaway_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MegawayData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MegawayData } from 'assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayData';

@ccclass
export default class CustomMegawayData extends MegawayData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
