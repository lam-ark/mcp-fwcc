---
id: "cc_slot_module:BaseCutscene:inheritance:subclassing_guide"
title: "BaseCutscene Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ BaseCutscene Subclassing & Customization Guide

---

## 1. Subclassing Guidelines

- Extend `BaseCutscene`.
- Implement `enter()` to start animations and timers.
- Always call `this.exit()` when animations conclude.
