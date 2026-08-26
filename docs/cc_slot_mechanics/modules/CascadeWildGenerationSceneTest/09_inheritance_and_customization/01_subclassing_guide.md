---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:inheritance:subclassing_guide"
title: "CascadeWildGenerationSceneTest Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ CascadeWildGenerationSceneTest Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
