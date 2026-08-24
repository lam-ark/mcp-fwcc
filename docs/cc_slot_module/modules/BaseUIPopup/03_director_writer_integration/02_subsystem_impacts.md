---
id: "cc_slot_module:BaseUIPopup:director_writer:subsystem_impacts"
title: "BaseUIPopup Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BaseUIPopup Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`PopupControllerModule`** | Queries `node.active` on all `BaseUIPopup` instances. |
| **`PopupBehavior`** | Executes transition animations. |
| **`SlotSoundPlayerModule`** | Plays `playSFXClick()` on user actions. |
