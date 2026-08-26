---
id: "cc_slot_mechanics:TableGigabloxConfig:recipes:custom_implementation"
title: "Recipe: Custom TableGigabloxConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TableGigabloxConfig", "table_gigablox_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TableGigabloxConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TableGigabloxConfig } from 'assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxConfig';

@ccclass
export default class CustomTableGigabloxConfig extends TableGigabloxConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
