---
id: "cc_slot_module:BaseUIPopup:inheritance:subclassing_guide"
title: "BaseUIPopup Subclassing Guide"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ BaseUIPopup Subclassing Guide

---

## 1. Subclassing Strategy

1. Inherit from `BaseUIPopup`.
2. Implement `onLoadExtend()`, invoking `super.onLoadExtend()`.
3. Call `this.togglePopup(true)` or `this.togglePopup(false)` to open and close the modal.
4. Bind the close button click to `closeAllPopups()`.
