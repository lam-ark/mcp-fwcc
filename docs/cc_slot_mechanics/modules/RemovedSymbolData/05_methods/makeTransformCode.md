---
id: "cc_slot_mechanics:RemovedSymbolData:methods:makeTransformCode"
title: "RemovedSymbolData.makeTransformCode Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolData", "removed_symbol_data", "cc_slot_mechanics", "methods", "makeTransformCode"]
---

# 📖 `RemovedSymbolData.makeTransformCode()`

---

## 1. Method Signature & Overview

```typescript
makeTransformCode(oldValue: string): string
```

- **Primary Role**: Implements makeTransformCode within the RemovedSymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
makeTransformCode(oldValue: string): string {
		const hasTransform = oldValue.startsWith('B') || oldValue.startsWith('C') || oldValue.startsWith('D');
		if (hasTransform) {
			const newValue = oldValue.replace('B', '2').replace('C', '2').replace('D', '2');
			return newValue;
		}
		return oldValue;
	}
```
