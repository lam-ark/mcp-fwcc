---
id: "cc_slot_mechanics:MegaReelConfig:recipes:practical"
title: "Recipe: Integrating MegaReelConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["MegaReelConfig", "mega_reel_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MegaReelConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MegaReelConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MegaReelConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MegaReelConfig);
if (mechanic) {
    mechanic.reset();
}
```
