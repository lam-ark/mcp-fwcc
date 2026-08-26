---
id: "cc_slot_mechanics:NudgeTableData:recipes:practical"
title: "Recipe: Integrating NudgeTableData in Slot Games"
category: "cc_slot_mechanics"
tags: ["NudgeTableData", "nudge_table_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `NudgeTableData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `NudgeTableData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { NudgeTableData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(NudgeTableData);
if (mechanic) {
    mechanic.reset();
}
```
