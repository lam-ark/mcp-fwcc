---
id: "cc_slot_mechanics:TableGigabloxModuleTest:recipes:custom_implementation"
title: "Recipe: Custom TableGigabloxModuleTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModuleTest", "table_gigablox_module_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TableGigabloxModuleTest Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TableGigabloxModuleTest } from 'assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxModuleTest';

@ccclass
export default class CustomTableGigabloxModuleTest extends TableGigabloxModuleTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
