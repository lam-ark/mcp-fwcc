---
id: "cc_slot_mechanics:CascadeWildGenerationData:inheritance:subclassing_guide"
title: "CascadeWildGenerationData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ CascadeWildGenerationData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
