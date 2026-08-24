---
id: "cc_slot_module:BaseCutscene:overview:scene_and_prefabs"
title: "BaseCutscene Scene Hierarchy & Anchor Position"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ BaseCutscene Scene Hierarchy & Anchor Position

---

## 1. Inspected Scene Node Placement

All cutscenes derived from `BaseCutscene` are organized under `Canvas/Director/CutsceneControl`:

```text
Canvas/Director/CutsceneControl [Component: CutsceneController]
├── WinEffect [Component: WinEffectModule (extends BaseCutscene)]
├── IntroFreeGame [Component: IntroFreeGameModule (extends BaseCutscene)]
├── JackpotWin [Component: JackpotWinModule (extends BaseCutscene)]
└── TotalWin [Component: TotalWinModule (extends BaseCutscene)]
```
