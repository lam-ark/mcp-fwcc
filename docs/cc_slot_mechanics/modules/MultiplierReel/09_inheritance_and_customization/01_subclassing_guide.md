---
id: "cc_slot_mechanics:MultiplierReel:inheritance:subclassing_guide"
title: "MultiplierReel Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ MultiplierReel Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
