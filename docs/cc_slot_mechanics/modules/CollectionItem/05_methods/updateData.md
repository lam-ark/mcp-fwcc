---
id: "cc_slot_mechanics:CollectionItem:methods:updateData"
title: "CollectionItem.updateData Method"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "methods", "updateData"]
---

# 📖 `CollectionItem.updateData()`

---

## 1. Method Signature & Overview

```typescript
updateData(current: number, total: number): void
```

- **Primary Role**: Implements updateData within the CollectionItem mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
updateData(current: number, total: number): void {
		this._currentAmount = current;
		this._totalAmount = total;
		this.lbCollection.string = `${current}/${total}`;
	}
```
