---
id: "cc_slot_mechanics:CollectionItem:recipes:practical"
title: "Recipe: Integrating CollectionItem in Slot Games"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `CollectionItem` Integration

---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `CollectionItem` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { CollectionItem } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(CollectionItem);
if (mechanic) {
    mechanic.reset();
}
```
