---
id: "cc_slot_module:UIManagerModule:director_writer:subsystem_impacts"
title: "UIManagerModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 UIManagerModule Cross-Subsystem Impacts

---

## 1. Cross-Subsystem Matrix

| Subsystem | Impact |
| :--- | :--- |
| **`SlotButtonModule`** | Interrogates `checkDisplayPopup()` before processing spacebar shortcuts. |
| **`PopupControllerModule`**| Consulted by `UIManagerModule` for active popup status. |
| **`CutsceneController`** | Consulted by `UIManagerModule` for active cutscene modal status. |
| **`GameDataStore`** | Updates `isTrialMode` property during mode shifts. |
