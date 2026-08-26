---
id: "cc_slot_mechanics:InstantCashModule:inheritance:subclassing_guide"
title: "InstantCashModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ InstantCashModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
