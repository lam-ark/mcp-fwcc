---
id: "cc_slot_mechanics:ClusterModuleConfig:recipes:practical"
title: "Recipe: Integrating ClusterModuleConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["ClusterModuleConfig", "cluster_module_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `ClusterModuleConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `ClusterModuleConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { ClusterModuleConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(ClusterModuleConfig);
if (mechanic) {
    mechanic.reset();
}
```
