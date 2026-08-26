---
id: "cc_slot_mechanics:CellTableConfig:recipes:practical"
title: "Recipe: Integrating CellTableConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["CellTableConfig", "cell_table_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `CellTableConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `CellTableConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { CellTableConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(CellTableConfig);
if (mechanic) {
    mechanic.reset();
}
```
