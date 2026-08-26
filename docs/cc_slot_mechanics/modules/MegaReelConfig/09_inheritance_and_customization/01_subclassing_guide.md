---
id: "cc_slot_mechanics:MegaReelConfig:inheritance:subclassing_guide"
title: "MegaReelConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["MegaReelConfig", "mega_reel_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ MegaReelConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
