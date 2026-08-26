---
id: "cc_slot_mechanics:CollectionItem:inheritance:subclassing_guide"
title: "CollectionItem Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ CollectionItem Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
