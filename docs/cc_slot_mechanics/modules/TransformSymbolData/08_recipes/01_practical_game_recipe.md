---
id: "cc_slot_mechanics:TransformSymbolData:recipes:practical"
title: "Recipe: Integrating TransformSymbolData in Slot Games"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TransformSymbolData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TransformSymbolData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TransformSymbolData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TransformSymbolData);
if (mechanic) {
    mechanic.reset();
}
```
