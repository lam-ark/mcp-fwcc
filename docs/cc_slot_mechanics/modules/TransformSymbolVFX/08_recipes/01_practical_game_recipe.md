---
id: "cc_slot_mechanics:TransformSymbolVFX:recipes:practical"
title: "Recipe: Integrating TransformSymbolVFX in Slot Games"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TransformSymbolVFX` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TransformSymbolVFX` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TransformSymbolVFX } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TransformSymbolVFX);
if (mechanic) {
    mechanic.reset();
}
```
