---
id: "cc_slot_mechanics:MultiplierModule:inheritance:subclassing_guide"
title: "MultiplierModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ MultiplierModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
