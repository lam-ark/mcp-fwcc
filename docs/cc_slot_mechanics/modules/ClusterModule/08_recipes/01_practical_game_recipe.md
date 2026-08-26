---
id: "cc_slot_mechanics:ClusterModule:recipes:practical"
title: "Recipe: Integrating ClusterModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `ClusterModule` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `ClusterModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { ClusterModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(ClusterModule);
if (mechanic) {
    mechanic.reset();
}
```
