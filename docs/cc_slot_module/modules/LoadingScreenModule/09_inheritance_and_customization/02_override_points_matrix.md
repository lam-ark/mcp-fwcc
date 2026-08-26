---
id: "cc_slot_module:LoadingScreenModule:inheritance:override_points_matrix"
title: "LoadingScreenModule Override Points Matrix"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧩 LoadingScreenModule Override Points Matrix

---

## 1. Matrix

| Method | Base Behavior | Safe to Override? | Required Super Call |
| :--- | :--- | :--- | :--- |
| **`redirectSceneName()`** | Resolves SD / Iframe / History scenes | `YES` | `Recommended` |
| **`updateLabelProgress()`** | Updates `progressLabel.string` | `YES` | `Optional` |
| **`onDestroy()`** | Unregisters Howler and cancels tweens | `YES` | `MANDATORY` |
