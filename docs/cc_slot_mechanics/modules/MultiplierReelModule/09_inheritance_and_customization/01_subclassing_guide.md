---
id: "cc_slot_mechanics:MultiplierReelModule:inheritance:subclassing_guide"
title: "MultiplierReelModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ MultiplierReelModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
