---
id: "cc_slot_module:PopupControllerModule:gotchas:index"
title: "PopupControllerModule Gotchas Index"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ PopupControllerModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_initial_child_activation_gotcha`](./01_initial_child_activation_gotcha.md)** | Child Popups Visible on Frame 0 | MEDIUM | Because `onLoad` forces `child.active = true`, child popup prefabs must hide themselves in `start()`. |
| **[`02_unreported_active_popup_check`](./02_unreported_active_popup_check.md)** | Stale Non-Popup Children in Hierarchy | HIGH | Placing background blocks or non-popup nodes under `Popup` causes `isDisplayPopup()` to always return true, freezing spin inputs. |
