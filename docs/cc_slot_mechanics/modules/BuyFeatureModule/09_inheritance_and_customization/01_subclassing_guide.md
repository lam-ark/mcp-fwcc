---
id: "cc_slot_mechanics:BuyFeatureModule:inheritance:subclassing_guide"
title: "BuyFeatureModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ BuyFeatureModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
