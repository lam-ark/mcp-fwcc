---
id: "cc_slot_mechanics:BuyFeatureButton:inheritance:subclassing_guide"
title: "BuyFeatureButton Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ BuyFeatureButton Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
