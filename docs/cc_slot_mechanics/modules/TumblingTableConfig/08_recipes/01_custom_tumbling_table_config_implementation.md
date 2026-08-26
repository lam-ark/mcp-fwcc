---
id: "cc_slot_mechanics:TumblingTableConfig:recipes:custom_implementation"
title: "Recipe: Custom TumblingTableConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TumblingTableConfig", "tumbling_table_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TumblingTableConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TumblingTableConfig } from 'assets/cc-common/cc-slot-mechanics/TumblingReel/scripts/TumblingTableConfig';

@ccclass
export default class CustomTumblingTableConfig extends TumblingTableConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
