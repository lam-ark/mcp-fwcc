---
id: "cc_slot_mechanics:MegawayModuleConfig:inheritance:subclassing_guide"
title: "MegawayModuleConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["MegawayModuleConfig", "megaway_module_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ MegawayModuleConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
