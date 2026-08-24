---
id: "cc_slot_module:PaylineLineModule:inheritance:override_points_matrix"
title: "PaylineLineModule Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 PaylineLineModule Override Points & Extension Matrix

---

## 1. Extension Points Matrix

| Method | Super Required | Safe to Replace | Extension Purpose |
| :--- | :--- | :--- | :--- |
| `showPayLine` | Optional | YES | Implement custom line drawing or shaders. |
| `blinkAllPayLines` | Optional | YES | Customize Stage 1 concurrent line animations. |
| `clearAll` | Recommended | YES | Reset custom graphics buffers and return nodes to pool. |
| `getLine` | No | YES | Inject custom pooling mechanisms. |
