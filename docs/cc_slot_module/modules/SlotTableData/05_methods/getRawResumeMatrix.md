---
id: "cc_slot_module:SlotTableData:method:getRawResumeMatrix"
title: "SlotTableData.getRawResumeMatrix() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "method", "getRawResumeMatrix", "reconnection"]
---

# `SlotTableData.getRawResumeMatrix(): string[]`

---

## 1. Method Signature
```typescript
public getRawResumeMatrix(): string[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks mode via `this.isFreeMode()`.
2. Returns mode-specific resume matrix: `this["freeGameMatrix"] || this["matrix"]` or `this["normalGameMatrix"] || this["matrix"]`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getRawResumeMatrix(): string[] {
	if (this.isFreeMode()) {
		return this["freeGameMatrix"] || this["matrix"];
	}

	return this["normalGameMatrix"] || this["matrix"];
}
```
