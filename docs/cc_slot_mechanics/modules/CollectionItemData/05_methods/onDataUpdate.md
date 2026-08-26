---
id: "cc_slot_mechanics:CollectionItemData:methods:onDataUpdate"
title: "CollectionItemData.onDataUpdate Method"
category: "cc_slot_mechanics"
tags: ["CollectionItemData", "collection_item_data", "cc_slot_mechanics", "methods", "onDataUpdate"]
---

# 📖 `CollectionItemData.onDataUpdate()`

---

## 1. Method Signature & Overview

```typescript
onDataUpdate(key: string, value: any): void
```

- **Primary Role**: Implements onDataUpdate within the CollectionItemData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onDataUpdate(key: string, value: any): void {
		this[key] = value;

		if (key === 'collectSymbols') {
			this._collectionItemData = value.map((item: string) => {
				const orderData = item.split(':');
				const symbolName = orderData[0];
				const amount = Number(orderData[1]);
				const totalAmount = Number(orderData[2]);

				return { symbolName, amount, totalAmount };
			});
		}
	}
```
