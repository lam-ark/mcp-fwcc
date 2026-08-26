---
id: "cc_slot_mechanics:InfinityTableTest:recipes:custom_implementation"
title: "Recipe: Custom InfinityTableTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InfinityTableTest Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InfinityTableTest } from 'assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableTest';

@ccclass
export default class CustomInfinityTableTest extends InfinityTableTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
