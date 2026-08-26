---
id: "cc_slot_mechanics:ClusterModule:inheritance:subclassing_guide"
title: "ClusterModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ ClusterModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
