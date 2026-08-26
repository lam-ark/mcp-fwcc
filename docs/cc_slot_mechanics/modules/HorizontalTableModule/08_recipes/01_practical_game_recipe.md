---
id: "cc_slot_mechanics:HorizontalTableModule:recipes:practical"
title: "Recipe: Integrating HorizontalTableModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["HorizontalTableModule", "horizontal_table_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `HorizontalTableModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `HorizontalTableModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { HorizontalTableModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(HorizontalTableModule);
if (mechanic) {
    mechanic.reset();
}
```
