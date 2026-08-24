---
id: "cc_slot_module:CutsceneController:inheritance:game_creation_workflow"
title: "CutsceneController Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 CutsceneController Game Creation Setup Workflow

---

## 1. Step-by-Step Setup

1. Verify `CutsceneControl` node exists under `Canvas/Director`.
2. Attach `CutsceneController`.
3. Add child modal nodes (`WinEffect`, `IntroFreeGame`, `JackpotWin`, `TotalWin`).
4. In `WriterModule`, insert `PLAY_CUTSCENE` commands at key celebration moments.
