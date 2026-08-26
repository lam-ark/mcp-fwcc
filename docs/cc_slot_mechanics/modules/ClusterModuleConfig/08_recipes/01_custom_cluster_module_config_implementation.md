---
id: "cc_slot_mechanics:ClusterModuleConfig:recipes:custom_implementation"
title: "Recipe: Custom ClusterModuleConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["ClusterModuleConfig", "cluster_module_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom ClusterModuleConfig Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { ClusterModuleConfig } from 'assets/cc-common/cc-slot-mechanics/Cluster/scripts/ClusterModuleConfig';

@ccclass
export default class CustomClusterModuleConfig extends ClusterModuleConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
