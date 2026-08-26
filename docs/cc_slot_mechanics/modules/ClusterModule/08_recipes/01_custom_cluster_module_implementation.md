---
id: "cc_slot_mechanics:ClusterModule:recipes:custom_implementation"
title: "Recipe: Custom ClusterModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom ClusterModule Subclass Implementation

---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { ClusterModule } from 'assets/cc-common/cc-slot-mechanics/Cluster/scripts/ClusterModule';

@ccclass
export default class CustomClusterModule extends ClusterModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
