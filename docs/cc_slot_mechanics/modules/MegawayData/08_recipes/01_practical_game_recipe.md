---
id: "cc_slot_mechanics:MegawayData:recipes:practical"
title: "Recipe: Integrating MegawayData in Slot Games"
category: "cc_slot_mechanics"
tags: ["MegawayData", "megaway_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MegawayData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MegawayData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MegawayData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MegawayData);
if (mechanic) {
    mechanic.reset();
}
```
