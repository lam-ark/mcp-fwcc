---
id: "cc_slot_mechanics:InfinityReelModule:inheritance:subclassing_guide"
title: "InfinityReelModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ InfinityReelModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
