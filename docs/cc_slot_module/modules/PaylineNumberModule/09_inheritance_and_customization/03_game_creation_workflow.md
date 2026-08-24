---
id: "cc_slot_module:PaylineNumberModule:inheritance:game_creation_workflow"
title: "PaylineNumberModule Game Creation & Gutter Setup Workflow"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 PaylineNumberModule Game Creation & Gutter Setup Workflow

---

## 1. Step-by-Step Setup

1. **Create Gutter Nodes**: Place `LeftGutter` and `RightGutter` nodes alongside table borders.
2. **Add Badges**: Add child sprite nodes named `num_1`, `num_2` ... `num_N`, attaching `PaylineNumberItem` to each.
3. **Attach Module**: Attach `PaylineNumberModule` to `SlotTablePaylineModule` or `BoardG`.
4. **Wire Containers**: Drag `[LeftGutter, RightGutter]` into the `container` property array in Inspector.
