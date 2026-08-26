---
id: "cc_slot_mechanics:MegaReelSceneTest:inheritance:subclassing_guide"
title: "MegaReelSceneTest Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["MegaReelSceneTest", "mega_reel_scene_test", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ MegaReelSceneTest Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
