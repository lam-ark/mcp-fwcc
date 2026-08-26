---
id: "cc_slot_mechanics:MegaReelData:recipes:custom_implementation"
title: "Recipe: Custom MegaReelData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MegaReelData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MegaReelData } from 'assets/cc-common/cc-slot-mechanics/MegaReel/scripts/MegaReelData';

@ccclass
export default class CustomMegaReelData extends MegaReelData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
