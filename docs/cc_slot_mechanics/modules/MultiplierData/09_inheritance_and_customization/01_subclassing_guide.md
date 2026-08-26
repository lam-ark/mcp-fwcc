---
id: "cc_slot_mechanics:MultiplierData:inheritance:subclassing_guide"
title: "MultiplierData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["MultiplierData", "multiplier_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ MultiplierData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
