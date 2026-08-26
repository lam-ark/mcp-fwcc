---
id: "cc_slot_mechanics:MegawayModuleConfig:recipes:practical"
title: "Recipe: Integrating MegawayModuleConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["MegawayModuleConfig", "megaway_module_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MegawayModuleConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MegawayModuleConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MegawayModuleConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MegawayModuleConfig);
if (mechanic) {
    mechanic.reset();
}
```
