---
id: "cc_slot_mechanics:NudgeReelModule:recipes:practical"
title: "Recipe: Integrating NudgeReelModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `NudgeReelModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `NudgeReelModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { NudgeReelModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(NudgeReelModule);
if (mechanic) {
    mechanic.reset();
}
```
