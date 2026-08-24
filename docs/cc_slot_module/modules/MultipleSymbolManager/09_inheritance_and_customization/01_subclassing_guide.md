---
id: "cc_slot_module:MultipleSymbolManager:customization:subclassing_guide"
title: "MultipleSymbolManager Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ MultipleSymbolManager Subclassing & Customization Guide

---

## 1. Extension Principles & Guidelines

* 🟢 **Subclass for Custom Special Template Selection**: Override `getSymbolFromPool` if symbol codes are dynamically decorated by bet tier or active multiplier.
* 🛑 **Preserve Base Delegation**: Always pass allocations to `this.symbolPool`.
