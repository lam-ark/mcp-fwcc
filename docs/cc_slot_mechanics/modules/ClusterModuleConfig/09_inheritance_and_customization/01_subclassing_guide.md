---
id: "cc_slot_mechanics:ClusterModuleConfig:inheritance:subclassing_guide"
title: "ClusterModuleConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["ClusterModuleConfig", "cluster_module_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ ClusterModuleConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
