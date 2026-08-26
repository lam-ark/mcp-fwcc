---
id: "cc_slot_mechanics:TableGigabloxData:recipes:custom_implementation"
title: "Recipe: Custom TableGigabloxData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TableGigabloxData", "table_gigablox_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TableGigabloxData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TableGigabloxData } from 'assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxData';

@ccclass
export default class CustomTableGigabloxData extends TableGigabloxData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
