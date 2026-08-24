---
id: "cc_slot_module:SlotSymbolModule:customization:subclassing_guide"
title: "SlotSymbolModule Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ SlotSymbolModule Subclassing & Customization Guide

---

## 1. Extension Principles & Guardrails

* 🛑 **NEVER delete `this.node['__SymbolModule__'] = this`** in `onLoad()`: This enables high-speed component lookup without `getComponent()`.
* 🛑 **ALWAYS invoke `super.resetBeforeBackToPool()`** when overriding teardown logic to prevent GPU memory leaks.
* 🟢 **OVERRIDE `initExtend()`** to attach custom sub-components (particle systems, floating multiplier labels).
