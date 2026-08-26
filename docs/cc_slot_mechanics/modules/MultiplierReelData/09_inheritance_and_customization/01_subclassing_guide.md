---
id: "cc_slot_mechanics:MultiplierReelData:inheritance:subclassing_guide"
title: "MultiplierReelData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["MultiplierReelData", "multiplier_reel_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ MultiplierReelData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
