---
id: "cc_slot_mechanics:HorizontalReelModule:recipes:practical"
title: "Recipe: Integrating HorizontalReelModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `HorizontalReelModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `HorizontalReelModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { HorizontalReelModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(HorizontalReelModule);
if (mechanic) {
    mechanic.reset();
}
```
