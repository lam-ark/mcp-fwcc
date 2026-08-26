---
id: "cc_slot_mechanics:HorizontalTableConfig:recipes:custom_implementation"
title: "Recipe: Custom HorizontalTableConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableConfig", "horizontal_table_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalTableConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalTableConfig } from 'assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableConfig';

@ccclass
export default class CustomHorizontalTableConfig extends HorizontalTableConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
