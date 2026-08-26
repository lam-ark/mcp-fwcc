---
id: "cc_slot_mechanics:MegaReelData:inheritance:subclassing_guide"
title: "MegaReelData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ MegaReelData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
