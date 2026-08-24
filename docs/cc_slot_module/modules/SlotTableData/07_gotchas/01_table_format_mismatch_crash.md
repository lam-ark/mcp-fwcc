---
id: "cc_slot_module:SlotTableData:gotcha:table_format_mismatch_crash"
title: "Gotcha: Table Format Array Dimension Mismatch"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "gotchas", "table_format", "array_bounds", "crash"]
---

# 🛑 Gotcha: Table Format Array Dimension Mismatch

---

## 1. Symptom & Technical Defect
When `SlotTableModule` calls `getMatrix()`, the return value contains `undefined` rows or causes a crash with `TypeError: Cannot read property 'map' of undefined` during symbol creation.

---

## 2. Root Cause
In `getMatrix()`:
```typescript
return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
```
If `TABLE_FORMAT` is `[3, 3, 3, 3, 3]` (15 total symbols), but the server returns a 12-element payload (e.g. from an unconfigured 4-column test mock), `convertSlotMatrix` fails to populate column 4, resulting in `undefined` cells.

---

## 3. Prevention & Solution
Verify that `TableModuleConfig.TABLE_FORMAT` in client matches the backend game config matrix definition:
```typescript
// Always ensure backend row * col matches TABLE_FORMAT
// E.g. for 5x3 table:
TABLE_FORMAT: [3, 3, 3, 3, 3] // Sum = 15 symbols
```
