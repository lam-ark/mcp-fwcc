---
id: "cc_slot_mechanics:StickySymbolData:recipes:practical"
title: "Recipe: Integrating StickySymbolData in Slot Games"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `StickySymbolData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `StickySymbolData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { StickySymbolData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(StickySymbolData);
if (mechanic) {
    mechanic.reset();
}
```
