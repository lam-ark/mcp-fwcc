---
id: "cc_slot_mechanics:CollectionItemModuleConfig:inheritance:subclassing_guide"
title: "CollectionItemModuleConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["CollectionItemModuleConfig", "collection_item_module_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ CollectionItemModuleConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
