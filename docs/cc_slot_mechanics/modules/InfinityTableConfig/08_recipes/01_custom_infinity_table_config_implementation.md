---
id: "cc_slot_mechanics:InfinityTableConfig:recipes:custom_implementation"
title: "Recipe: Custom InfinityTableConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableConfig", "infinity_table_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InfinityTableConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InfinityTableConfig } from 'assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableConfig';

@ccclass
export default class CustomInfinityTableConfig extends InfinityTableConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
