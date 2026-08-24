---
id: "cc_slot_module:PaylineSymbolModule:inheritance:override_points_matrix"
title: "PaylineSymbolModule Override Points Matrix"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 PaylineSymbolModule Override Points Matrix

---

## 1. Override Points Matrix

| Method | Safe to Override? | Required `super` | Customization Purpose |
| :--- | :--- | :--- | :--- |
| `playSymbolAnimation` | `YES` | Optional | Custom spine skinning or sound cue pairing. |
| `dimAllPayLines` | `YES` | `RECOMMENDED` | Custom opacity tweening or grayscale shaders. |
| `clearAll` | `NO` | `MANDATORY` | Core pooling safety. |
