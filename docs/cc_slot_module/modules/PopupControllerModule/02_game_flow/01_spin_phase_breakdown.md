---
id: "cc_slot_module:PopupControllerModule:game_flow:spin_phase_breakdown"
title: "PopupControllerModule Spin Phase Lifecycle"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 PopupControllerModule Spin Phase Lifecycle

---

## 1. Game Flow Breakdown

| Phase / State | PopupControllerModule Status |
| :--- | :--- |
| **Idle Normal Game** | Popups can open (`isDisplayPopup()` becomes true). |
| **Spin Start** | `isDisplayPopup()` queried; spin rejected if true. |
| **Feature / Free Game** | Modal popups may be blocked or restricted depending on feature rules. |
