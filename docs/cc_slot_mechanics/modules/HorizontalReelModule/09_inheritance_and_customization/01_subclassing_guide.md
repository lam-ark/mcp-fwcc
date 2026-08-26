---
id: "cc_slot_mechanics:HorizontalReelModule:inheritance:subclassing_guide"
title: "HorizontalReelModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ HorizontalReelModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
