---
id: "cc_slot_module:PaylineLineModule:inheritance:subclassing_guide"
title: "PaylineLineModule Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ PaylineLineModule Subclassing & Customization Guide

---

## 1. Subclassing Foundations

When creating custom vector line renderers:
- Extend `PaylineLineModule`.
- Override `showPayLine()`, `blinkAllPayLines()`, or `clearAll()`.
- Always call `super.onDestroy()` if overriding lifecycle hooks.
