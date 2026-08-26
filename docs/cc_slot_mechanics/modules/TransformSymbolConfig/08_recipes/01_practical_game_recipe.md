---
id: "cc_slot_mechanics:TransformSymbolConfig:recipes:practical"
title: "Recipe: Integrating TransformSymbolConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["TransformSymbolConfig", "transform_symbol_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TransformSymbolConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TransformSymbolConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TransformSymbolConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TransformSymbolConfig);
if (mechanic) {
    mechanic.reset();
}
```
