---
id: "cc_slot_mechanics:CollectionItemData:recipes:custom_implementation"
title: "Recipe: Custom CollectionItemData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CollectionItemData", "collection_item_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CollectionItemData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CollectionItemData } from 'assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItemData';

@ccclass
export default class CustomCollectionItemData extends CollectionItemData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
