---
id: "cc_slot_mechanics:CollectionItemModuleConfig:recipes:practical"
title: "Recipe: Integrating CollectionItemModuleConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["CollectionItemModuleConfig", "collection_item_module_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `CollectionItemModuleConfig` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `CollectionItemModuleConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { CollectionItemModuleConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(CollectionItemModuleConfig);
if (mechanic) {
    mechanic.reset();
}
```
