---
id: "cc_slot_mechanics:TableModuleConfigTest:recipes:practical"
title: "Recipe: Integrating TableModuleConfigTest in Slot Games"
category: "cc_slot_mechanics"
tags: ["TableModuleConfigTest", "table_module_config_test", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `TableModuleConfigTest` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TableModuleConfigTest` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { TableModuleConfigTest } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(TableModuleConfigTest);
if (mechanic) {
    mechanic.reset();
}
```
