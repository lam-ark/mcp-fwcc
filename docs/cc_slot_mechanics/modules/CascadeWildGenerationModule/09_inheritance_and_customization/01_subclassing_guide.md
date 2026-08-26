---
id: "cc_slot_mechanics:CascadeWildGenerationModule:inheritance:subclassing_guide"
title: "CascadeWildGenerationModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ CascadeWildGenerationModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
