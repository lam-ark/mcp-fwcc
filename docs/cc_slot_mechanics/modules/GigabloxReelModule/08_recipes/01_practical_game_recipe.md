---
id: "cc_slot_mechanics:GigabloxReelModule:recipes:practical"
title: "Recipe: Integrating GigabloxReelModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `GigabloxReelModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `GigabloxReelModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { GigabloxReelModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(GigabloxReelModule);
if (mechanic) {
    mechanic.reset();
}
```
