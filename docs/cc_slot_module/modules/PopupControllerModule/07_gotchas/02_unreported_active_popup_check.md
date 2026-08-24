---
id: "cc_slot_module:PopupControllerModule:gotchas:unreported_active_popup_check"
title: "Gotcha: Stale Non-Popup Children in Hierarchy"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "gotchas", "hierarchy"]
---

# ⚠️ Gotcha: Stale Non-Popup Children in Hierarchy

---

## 1. Problem Description

`isDisplayPopup()` iterates over `this.node.children.some(child => child.active)`. If developers place a permanent static backdrop or debug node as a direct child of `Canvas/Director/Popup`, `isDisplayPopup()` permanently returns `true`, locking the spin button.

---

## 2. Prevention

Only place interactive modal popup roots directly under `Canvas/Director/Popup`.
