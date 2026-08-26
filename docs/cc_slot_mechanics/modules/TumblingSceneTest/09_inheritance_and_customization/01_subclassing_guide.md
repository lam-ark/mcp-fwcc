---
id: "cc_slot_mechanics:TumblingSceneTest:inheritance:subclassing_guide"
title: "TumblingSceneTest Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TumblingSceneTest", "tumbling_scene_test", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TumblingSceneTest Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
