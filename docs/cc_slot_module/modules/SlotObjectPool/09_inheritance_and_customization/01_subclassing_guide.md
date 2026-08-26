---
id: "cc_slot_module:SlotObjectPool:inheritance:subclassing_guide"
title: "SlotObjectPool Subclassing Guide"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotObjectPool Subclassing Guide

---

## 1. Subclassing Notes

- Override `get()` to add custom setup handlers (e.g., Spine skeleton skin setup).
- Override `put()` to stop active particle systems or audio loops attached to the item.
