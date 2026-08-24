---
id: "cc_slot_module:SlotTableData:method:getMatrix"
title: "SlotTableData.getMatrix() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "method", "getMatrix", "matrix_transform", "convertSlotMatrix"]
---

# `SlotTableData.getMatrix(): string[][]`

---

## 1. Method Signature
```typescript
public getMatrix(): string[][]
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotTableModule.stopSpinning()` and payline highlighting evaluators to get the 2D column-major matrix of symbol codes.

---

## 3. Detailed Algorithmic Execution Logic
1. Obtains the 1D flat array from `this.getRawMatrix()`.
2. Passes the flat array and `this.config.TABLE_FORMAT` to `eno.SlotUtils.convertSlotMatrix()`.
3. Returns the structured 2D array: `string[col][row]`.

---

## 4. Un-truncated Source Code Implementation
```typescript
getMatrix(): string[][] {
	let rawMatrix = this.getRawMatrix();
	return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
}
```
