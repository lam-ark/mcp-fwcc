---
id: "cc_slot_mechanics:CollectionItemData:recipes:practical"
title: "Recipe: Integrating CollectionItemData in Slot Games"
category: "cc_slot_mechanics"
tags: ["CollectionItemData", "collection_item_data", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `CollectionItemData` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `CollectionItemData` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { CollectionItemData } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(CollectionItemData);
if (mechanic) {
    mechanic.reset();
}
```
