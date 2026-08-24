---
id: "cc_slot_module:PopupControllerModule:gotchas:initial_child_activation_gotcha"
title: "Gotcha: Child Popups Visible on Frame 0"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "gotchas", "activation"]
---

# ⚠️ Gotcha: Child Popups Visible on Frame 0

---

## 1. Problem Description

`PopupControllerModule.onLoad()` forces `child.active = true` for every child node to trigger their internal component registration. If child scripts do not hide themselves in `start()`, modals remain visible on screen.

---

## 2. Prevention

All popup components inheriting from `BaseUIPopup` must hide their visual views in `start()` or rely on `FadePopupBehavior` opacity masking.
