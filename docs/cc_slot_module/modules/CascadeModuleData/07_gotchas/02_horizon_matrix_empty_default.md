---
id: "cc_slot_module:CascadeModuleData:gotchas:horizon_matrix_empty_default"
title: "Gotcha: Empty horizonMatrix and listTraceWayHorizontal Default"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "gotchas", "horizon_matrix", "horizontal_cascade"]
---

# ⚠️ Gotcha: Empty `horizonMatrix` & `listTraceWayHorizontal` Default

---

## 1. Problem Description

In `CascadeModuleData.formatData()`:
```typescript
let horizonMatrix = [];
let listTraceWayHorizontal = [];
...
return { verticalMatrix, listTraceWayVertical: listTraceWay, horizonMatrix, listTraceWayHorizontal };
```
The SDK only implements vertical column iteration for `verticalMatrix` and `listTraceWayVertical`. For games with **horizontal cascades** (e.g. symbols shifting left/right across rows), `horizonMatrix` and `listTraceWayHorizontal` are returned as empty arrays `[]`.

---

## 2. Solution & Recommendation

In horizontal tumble games, subclass `CascadeModuleData` and implement the row-major matrix transposition in `formatData()`.
