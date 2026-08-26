---
id: "cc_slot_mechanics:TransformSymbolItem:recipes:practical"
title: "Recipe: Integrating TransformSymbolItem in Slot Games"
category: "cc_slot_mechanics"
tags: ["TransformSymbolItem", "transform_symbol_item", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TransformSymbolItem` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TransformSymbolItem` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TransformSymbolItem } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TransformSymbolItem);
if (mechanic) {
    mechanic.reset();
}
```
