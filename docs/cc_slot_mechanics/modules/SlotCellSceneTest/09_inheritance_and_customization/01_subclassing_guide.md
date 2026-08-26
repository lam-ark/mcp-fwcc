---
id: "cc_slot_mechanics:SlotCellSceneTest:inheritance:subclassing_guide"
title: "SlotCellSceneTest Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["SlotCellSceneTest", "slot_cell_scene_test", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ SlotCellSceneTest Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
