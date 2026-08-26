---
id: "cc_slot_mechanics:ClusterModuleData:inheritance:subclassing_guide"
title: "ClusterModuleData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["ClusterModuleData", "cluster_module_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ ClusterModuleData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
