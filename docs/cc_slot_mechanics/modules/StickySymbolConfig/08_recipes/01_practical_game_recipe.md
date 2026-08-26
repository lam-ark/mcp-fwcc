---
id: "cc_slot_mechanics:StickySymbolConfig:recipes:practical"
title: "Recipe: Integrating StickySymbolConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["StickySymbolConfig", "sticky_symbol_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `StickySymbolConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `StickySymbolConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { StickySymbolConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(StickySymbolConfig);
if (mechanic) {
    mechanic.reset();
}
```
