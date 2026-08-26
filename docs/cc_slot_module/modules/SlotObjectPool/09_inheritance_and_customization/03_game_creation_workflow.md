---
id: "cc_slot_module:SlotObjectPool:inheritance:game_creation_workflow"
title: "SlotObjectPool Game Creation Workflow"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "inheritance", "workflow"]
---

# 🛠️ SlotObjectPool Game Creation Workflow

---

## 1. Workflow Steps

1. Create a node named `WinFramePool` under `Canvas/Director/GameMode/BoardG/Payline`.
2. Add the `SlotObjectPool` component.
3. Drag the `WinFramePrefab` asset to `prefabObject`.
4. Set `initCount` to match table dimensions ($col 	imes row$).
