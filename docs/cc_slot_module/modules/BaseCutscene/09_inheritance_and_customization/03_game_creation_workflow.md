---
id: "cc_slot_module:BaseCutscene:inheritance:game_creation_workflow"
title: "BaseCutscene Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 BaseCutscene Game Creation Setup Workflow

---

## 1. Step-by-Step Setup

1. Create a cutscene prefab or node under `Canvas/Director/CutsceneControl`.
2. Attach a script subclassing `BaseCutscene`.
3. Set `cutsceneType` enum property in Cocos Editor Inspector.
4. Implement `enter()` and wire buttons to call `exit()`.
