---
id: "cc_slot_mechanics:CollectionItemModule:inheritance:subclassing_guide"
title: "CollectionItemModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ CollectionItemModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
