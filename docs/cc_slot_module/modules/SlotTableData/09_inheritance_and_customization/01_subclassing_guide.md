---
id: "cc_slot_module:SlotTableData:customization:subclassing_guide"
title: "SlotTableData Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "customization", "subclassing", "inheritance"]
---

# 🏗️ SlotTableData Subclassing & Customization Guide

---

## 1. Extension Principles & Guidelines

* 🟢 **Declare Custom `registeredKeys`**: When subclassing, append game-specific server keys (e.g. `stickyWilds`, `expandingColumns`) so `GameDataStore` automatically routes them.
* 🟢 **Override `getMatrix()`**: For non-standard grid transformations (triangular boards, cluster grids).
* 🛑 **Preserve `onloadExtend()`**: Ensure `this.config = this.getComponent(TableModuleConfig)` is called if overridden.
