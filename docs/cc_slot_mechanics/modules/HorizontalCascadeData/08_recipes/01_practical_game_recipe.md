---
id: "cc_slot_mechanics:HorizontalCascadeData:recipes:practical"
title: "Recipe: Integrating HorizontalCascadeData in Slot Games"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeData", "horizontal_cascade_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `HorizontalCascadeData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `HorizontalCascadeData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { HorizontalCascadeData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(HorizontalCascadeData);
if (mechanic) {
    mechanic.reset();
}
```
