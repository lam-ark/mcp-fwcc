---
id: "cc_slot_mechanics:MegawayData:inheritance:subclassing_guide"
title: "MegawayData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["MegawayData", "megaway_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ MegawayData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
