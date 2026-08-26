---
id: "cc_slot_mechanics:StickySymbolModule:recipes:practical"
title: "Recipe: Integrating StickySymbolModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `StickySymbolModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `StickySymbolModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { StickySymbolModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(StickySymbolModule);
if (mechanic) {
    mechanic.reset();
}
```
