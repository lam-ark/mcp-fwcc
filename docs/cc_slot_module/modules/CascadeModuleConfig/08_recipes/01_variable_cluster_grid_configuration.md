---
id: "cc_slot_module:CascadeModuleConfig:recipes:variable_cluster_grid_configuration"
title: "Recipe: Configuring Irregular and Cluster Grid Geometries"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "recipes", "cluster_grid", "irregular_geometry"]
---

# 💡 Recipe: Configuring Irregular and Cluster Grid Geometries

---

## 1. Objective

Customize `CascadeModuleConfig` for a 6-reel Megaways-style diamond grid `[2, 3, 4, 4, 3, 2]`.

```typescript
@ccclass
export class DiamondCascadeConfig extends CascadeModuleConfig {
    public readonly CASCADE_TABLE_CONFIG = {
        format: [2, 3, 4, 4, 3, 2],
        cellSize: new cc.Vec2(160, 140),
        positions: [],
    };

    public readonly FALLING_TIME: number = 0.18;
    public readonly CASCADING_TIME_COMPLETED: number = 2.0;
}
```
