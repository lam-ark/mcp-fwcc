---
id: "cc_slot_mechanics:InfinityReelModule:recipes:practical"
title: "Recipe: Integrating InfinityReelModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `InfinityReelModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `InfinityReelModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { InfinityReelModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(InfinityReelModule);
if (mechanic) {
    mechanic.reset();
}
```
