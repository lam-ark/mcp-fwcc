---
id: "cc_slot_mechanics:MegawayModule:recipes:practical"
title: "Recipe: Integrating MegawayModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MegawayModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MegawayModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MegawayModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MegawayModule);
if (mechanic) {
    mechanic.reset();
}
```
