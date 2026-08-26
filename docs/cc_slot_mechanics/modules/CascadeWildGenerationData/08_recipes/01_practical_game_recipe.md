---
id: "cc_slot_mechanics:CascadeWildGenerationData:recipes:practical"
title: "Recipe: Integrating CascadeWildGenerationData in Slot Games"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `CascadeWildGenerationData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `CascadeWildGenerationData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { CascadeWildGenerationData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(CascadeWildGenerationData);
if (mechanic) {
    mechanic.reset();
}
```
