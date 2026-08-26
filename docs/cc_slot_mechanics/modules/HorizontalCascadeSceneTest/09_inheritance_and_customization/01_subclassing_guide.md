---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:inheritance:subclassing_guide"
title: "HorizontalCascadeSceneTest Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ HorizontalCascadeSceneTest Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
