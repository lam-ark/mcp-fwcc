---
id: "cc_slot_mechanics:HorizontalTableTest:recipes:custom_implementation"
title: "Recipe: Custom HorizontalTableTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableTest", "horizontal_table_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalTableTest Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalTableTest } from 'assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableTest';

@ccclass
export default class CustomHorizontalTableTest extends HorizontalTableTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
