---
id: "cc_slot_mechanics:HorizontalCascadeModuleConfig:recipes:practical"
title: "Recipe: Integrating HorizontalCascadeModuleConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModuleConfig", "horizontal_cascade_module_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `HorizontalCascadeModuleConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `HorizontalCascadeModuleConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { HorizontalCascadeModuleConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(HorizontalCascadeModuleConfig);
if (mechanic) {
    mechanic.reset();
}
```
