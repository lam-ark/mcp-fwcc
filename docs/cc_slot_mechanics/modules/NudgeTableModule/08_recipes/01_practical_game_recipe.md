---
id: "cc_slot_mechanics:NudgeTableModule:recipes:practical"
title: "Recipe: Integrating NudgeTableModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["NudgeTableModule", "nudge_table_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `NudgeTableModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `NudgeTableModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { NudgeTableModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(NudgeTableModule);
if (mechanic) {
    mechanic.reset();
}
```
