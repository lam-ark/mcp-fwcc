---
id: "cc_slot_mechanics:TumblingReelModule:recipes:practical"
title: "Recipe: Integrating TumblingReelModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TumblingReelModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TumblingReelModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TumblingReelModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TumblingReelModule);
if (mechanic) {
    mechanic.reset();
}
```
