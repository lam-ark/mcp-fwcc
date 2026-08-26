---
id: "cc_slot_mechanics:HorizontalCascadeModule:recipes:practical"
title: "Recipe: Integrating HorizontalCascadeModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `HorizontalCascadeModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `HorizontalCascadeModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { HorizontalCascadeModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(HorizontalCascadeModule);
if (mechanic) {
    mechanic.reset();
}
```
