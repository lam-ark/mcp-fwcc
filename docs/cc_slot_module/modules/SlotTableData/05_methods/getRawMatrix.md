---
id: "cc_slot_module:SlotTableData:method:getRawMatrix"
title: "SlotTableData.getRawMatrix() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "method", "getRawMatrix", "mode_filter"]
---

# `SlotTableData.getRawMatrix(): string[]`

---

## 1. Method Signature
```typescript
public getRawMatrix(): string[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks if current mode is Free Game (`this.isFreeMode()`).
   - If Free Game: returns `this["freeGameMatrix"] || this["matrix0"] || this["matrix"]`.
   - If Normal Game: returns `this["normalGameMatrix"] || this["matrix0"] || this["matrix"]`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getRawMatrix(): string[] {
	if (this.isFreeMode()) {
		return this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
	}

	return this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
}
```
