---
id: "cc_slot_module:BaseCutscene:inheritance:override_points_matrix"
title: "BaseCutscene Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 BaseCutscene Override Points & Extension Matrix

---

## 1. Extension Points Matrix

| Method | Super Required | Purpose |
| :--- | :--- | :--- |
| `init` | No (`super.init()` optional) | Customize node event bindings. |
| `play` | Yes (`super.play(...)`) | Intercept play payload before showing. |
| `enter` | No (Pure hook) | Core modal animation and coin count-up logic. |
| `skip` | No (Virtual) | Custom touch-to-skip fast forward logic. |
| `exit` | Yes (`super.exit(...)`) | Custom cleanup before firing close events. |
