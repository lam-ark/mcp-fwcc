---
id: "cc_slot_mechanics:TableGigabloxModule:recipes:custom_implementation"
title: "Recipe: Custom TableGigabloxModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TableGigabloxModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TableGigabloxModule } from 'assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxModule';

@ccclass
export default class CustomTableGigabloxModule extends TableGigabloxModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
