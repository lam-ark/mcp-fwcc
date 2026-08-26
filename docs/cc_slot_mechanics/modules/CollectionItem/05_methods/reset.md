---
id: "cc_slot_mechanics:CollectionItem:methods:reset"
title: "CollectionItem.reset Method"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "methods", "reset"]
---

# 📖 `CollectionItem.reset()`

---

## 1. Method Signature & Overview

```typescript
reset(): void
```

- **Primary Role**: Implements reset within the CollectionItem mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
reset(): void {
		this._currentAmount = 0;
		this._totalAmount = 0;
		this.lbCollection.string = `${this._currentAmount}/${this._totalAmount}`;
	}
```
