---
id: "cc_slot_mechanics:ClusterModuleData:recipes:custom_implementation"
title: "Recipe: Custom ClusterModuleData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["ClusterModuleData", "cluster_module_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom ClusterModuleData Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { ClusterModuleData } from 'assets/cc-common/cc-slot-mechanics/Cluster/scripts/ClusterModuleData';

@ccclass
export default class CustomClusterModuleData extends ClusterModuleData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
