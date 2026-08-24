---
id: "cc_slot_module:UIManagerModule:gotchas:index"
title: "UIManagerModule Gotchas Index"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ UIManagerModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_stale_mode_ui_overlap_leak`](./01_stale_mode_ui_overlap_leak.md)** | UI Overlap from Direct Node Activations | HIGH | Direct activation of child nodes without calling `updateGameModeUI()` creates overlapping normal and free spin buttons. |
| **[`02_blocking_popup_keyboard_leak`](./02_blocking_popup_keyboard_leak.md)** | Spacebar Trigger During Cutscenes | CRITICAL | Missing `checkDisplayPopup()` validation allows players to trigger background spins during fullscreen victory modals. |
