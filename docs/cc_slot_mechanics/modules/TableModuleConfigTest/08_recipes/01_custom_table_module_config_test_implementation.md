---
id: "cc_slot_mechanics:TableModuleConfigTest:recipes:custom_implementation"
title: "Recipe: Custom TableModuleConfigTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TableModuleConfigTest", "table_module_config_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TableModuleConfigTest Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TableModuleConfigTest } from 'assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/TableModuleConfigTest';

@ccclass
export default class CustomTableModuleConfigTest extends TableModuleConfigTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
