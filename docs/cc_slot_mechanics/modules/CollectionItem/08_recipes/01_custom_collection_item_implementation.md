---
id: "cc_slot_mechanics:CollectionItem:recipes:custom_implementation"
title: "Recipe: Custom CollectionItem Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CollectionItem Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CollectionItem } from 'assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItem';

@ccclass
export default class CustomCollectionItem extends CollectionItem {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
