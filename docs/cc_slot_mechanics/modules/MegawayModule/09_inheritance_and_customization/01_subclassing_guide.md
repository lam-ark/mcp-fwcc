---
id: "cc_slot_mechanics:MegawayModule:inheritance:subclassing_guide"
title: "MegawayModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ MegawayModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
