---
id: "cc_slot_module:PopupControllerModule:director_writer:subsystem_impacts"
title: "PopupControllerModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 PopupControllerModule Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`GameModeDirectorModule`** | Blocks reel start when `isDisplayPopup() === true`. |
| **`SlotButtonModule`** | Interactivity disabled or spacebar key presses suppressed when modal active. |
