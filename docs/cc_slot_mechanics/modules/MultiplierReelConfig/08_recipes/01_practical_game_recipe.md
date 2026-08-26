---
id: "cc_slot_mechanics:MultiplierReelConfig:recipes:practical"
title: "Recipe: Integrating MultiplierReelConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["MultiplierReelConfig", "multiplier_reel_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MultiplierReelConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MultiplierReelConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MultiplierReelConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MultiplierReelConfig);
if (mechanic) {
    mechanic.reset();
}
```
