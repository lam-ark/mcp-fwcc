---
id: "cc_slot_mechanics:CellReelModule:recipes:practical"
title: "Recipe: Integrating CellReelModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["CellReelModule", "cell_reel_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `CellReelModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `CellReelModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { CellReelModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(CellReelModule);
if (mechanic) {
    mechanic.reset();
}
```
