---
id: "cc_slot_mechanics:MegaReelData:recipes:practical"
title: "Recipe: Integrating MegaReelData in Slot Games"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MegaReelData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MegaReelData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MegaReelData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MegaReelData);
if (mechanic) {
    mechanic.reset();
}
```
