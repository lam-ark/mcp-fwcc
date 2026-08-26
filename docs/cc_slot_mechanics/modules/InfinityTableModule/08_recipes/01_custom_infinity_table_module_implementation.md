---
id: "cc_slot_mechanics:InfinityTableModule:recipes:custom_implementation"
title: "Recipe: Custom InfinityTableModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InfinityTableModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InfinityTableModule } from 'assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableModule';

@ccclass
export default class CustomInfinityTableModule extends InfinityTableModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
