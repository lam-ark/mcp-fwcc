---
id: "cc_slot_mechanics:CascadeWildGenerationConfig:inheritance:subclassing_guide"
title: "CascadeWildGenerationConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationConfig", "cascade_wild_generation_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ CascadeWildGenerationConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
