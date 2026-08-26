---
id: "cc_slot_mechanics:NudgeSceneTest:inheritance:subclassing_guide"
title: "NudgeSceneTest Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ NudgeSceneTest Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
