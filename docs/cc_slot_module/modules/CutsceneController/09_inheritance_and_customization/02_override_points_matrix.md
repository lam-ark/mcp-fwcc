---
id: "cc_slot_module:CutsceneController:inheritance:override_points_matrix"
title: "CutsceneController Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 CutsceneController Override Points & Extension Matrix

---

## 1. Extension Points Matrix

| Method | Super Required | Purpose |
| :--- | :--- | :--- |
| `makeCutSceneList` | Optional | Custom dynamic prefab loading into map. |
| `playCutScene` | Optional | Custom queueing or analytics logging. |
| `closeCutScene` | Optional | Custom exit interceptors. |
| `skipCutScenes` | Optional | Custom global fast-forward actions. |
| `isDisplayCutscene` | Optional | Custom condition for full display blocking. |
