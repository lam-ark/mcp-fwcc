---
id: "cc_slot_module:SlotBaseModule:inheritance:subclassing_guide"
title: "SlotBaseModule Subclassing & Extension Guide"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotBaseModule Subclassing & Extension Guide

---

## 1. Subclassing Guidelines

1. Extend `SlotBaseModule`.
2. Do **not** override `onLoad()`. Always override `onLoadExtend()`.
3. Put event listener registrations in `registerEvents()`.
4. Put visual resets in `resetAllEffectAndTasks()`.
5. Always clean up in `onDestroy()` by releasing observers and calling `this.eventManager.targetOff(this)`.
