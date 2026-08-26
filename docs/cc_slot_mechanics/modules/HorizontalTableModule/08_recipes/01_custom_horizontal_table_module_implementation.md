---
id: "cc_slot_mechanics:HorizontalTableModule:recipes:custom_implementation"
title: "Recipe: Custom HorizontalTableModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableModule", "horizontal_table_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalTableModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalTableModule } from 'assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableModule';

@ccclass
export default class CustomHorizontalTableModule extends HorizontalTableModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
