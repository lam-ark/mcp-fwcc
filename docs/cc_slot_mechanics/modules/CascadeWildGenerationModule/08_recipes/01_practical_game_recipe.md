---
id: "cc_slot_mechanics:CascadeWildGenerationModule:recipes:practical"
title: "Recipe: Integrating CascadeWildGenerationModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `CascadeWildGenerationModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `CascadeWildGenerationModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { CascadeWildGenerationModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(CascadeWildGenerationModule);
if (mechanic) {
    mechanic.reset();
}
```
