---
id: "cc_slot_mechanics:NudgeTableModule:recipes:custom_implementation"
title: "Recipe: Custom NudgeTableModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeTableModule", "nudge_table_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom NudgeTableModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { NudgeTableModule } from 'assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeTableModule';

@ccclass
export default class CustomNudgeTableModule extends NudgeTableModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
