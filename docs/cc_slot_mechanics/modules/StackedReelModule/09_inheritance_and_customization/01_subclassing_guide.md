---
id: "cc_slot_mechanics:StackedReelModule:inheritance:subclassing_guide"
title: "StackedReelModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["StackedReelModule", "stacked_reel_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ StackedReelModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
