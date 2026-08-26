---
id: "cc_slot_mechanics:MegaReelModule:recipes:practical"
title: "Recipe: Integrating MegaReelModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MegaReelModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MegaReelModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MegaReelModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MegaReelModule);
if (mechanic) {
    mechanic.reset();
}
```
