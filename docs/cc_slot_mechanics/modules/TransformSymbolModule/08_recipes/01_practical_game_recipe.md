---
id: "cc_slot_mechanics:TransformSymbolModule:recipes:practical"
title: "Recipe: Integrating TransformSymbolModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TransformSymbolModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TransformSymbolModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TransformSymbolModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TransformSymbolModule);
if (mechanic) {
    mechanic.reset();
}
```
