---
id: "cc_slot_module:PaylineNumberModule:gotchas:number_id_naming_mismatch"
title: "Gotcha: Auto Node Naming Mismatch in PaylineNumberItem"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "gotchas", "naming_mismatch"]
---

# ⚠️ Gotcha: Auto Node Naming Mismatch in `PaylineNumberItem`

---

## 1. Problem Description

`PaylineNumberItem.onLoad()` auto-parses `numberID` if empty:
```typescript
if (this.numberID === '') {
    const arr = this.node.name.split('_');
    this.numberID = arr[arr.length - 1];
}
```
If a scene designer names the node `Line10` (no underscore), `this.numberID` becomes `"Line10"` instead of `"10"`, causing `mapNumberToItem.get("10")` to return `undefined`.

---

## 2. Recommended Best Practice

Always use standard underscore naming for gutter items (e.g. `num_1`, `num_2`, `line_badge_25`) or explicitly populate `numberID` in the Inspector.
