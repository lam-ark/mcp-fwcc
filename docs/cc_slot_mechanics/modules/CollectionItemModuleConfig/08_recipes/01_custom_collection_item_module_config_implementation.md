---
id: "cc_slot_mechanics:CollectionItemModuleConfig:recipes:custom_implementation"
title: "Recipe: Custom CollectionItemModuleConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CollectionItemModuleConfig", "collection_item_module_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CollectionItemModuleConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CollectionItemModuleConfig } from 'assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItemModuleConfig';

@ccclass
export default class CustomCollectionItemModuleConfig extends CollectionItemModuleConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
