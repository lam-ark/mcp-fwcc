---
id: "cc_slot_mechanics:CollectionItemModule:recipes:custom_implementation"
title: "Recipe: Custom CollectionItemModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CollectionItemModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CollectionItemModule } from 'assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItemModule';

@ccclass
export default class CustomCollectionItemModule extends CollectionItemModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
