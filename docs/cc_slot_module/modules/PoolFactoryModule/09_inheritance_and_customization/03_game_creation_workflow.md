---
id: "cc_slot_module:PoolFactoryModule:inheritance:game_creation_workflow"
title: "PoolFactoryModule Game Creation Workflow"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🛠️ PoolFactoryModule Game Creation Workflow

---

## 1. Integration Steps

1. Create a container node `VFX_Pool` under `Canvas/Director/GameMode/BoardG`.
2. Attach `PoolFactoryModule` or a game-specific subclass.
3. Assign the particle / Spine / sprite Prefab to the `template` field in the Inspector.
4. Set `initCount` to expected concurrent particle count (e.g., `15`).
5. Wire Director/Writer actions to invoke `getObject()` and `returnObject()`.
