---
id: "cc_slot_mechanics:CascadeWildGenerationConfig:recipes:practical"
title: "Recipe: Integrating CascadeWildGenerationConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationConfig", "cascade_wild_generation_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `CascadeWildGenerationConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `CascadeWildGenerationConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { CascadeWildGenerationConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(CascadeWildGenerationConfig);
if (mechanic) {
    mechanic.reset();
}
```
