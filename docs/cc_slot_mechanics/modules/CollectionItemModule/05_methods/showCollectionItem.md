---
id: "cc_slot_mechanics:CollectionItemModule:methods:showCollectionItem"
title: "CollectionItemModule.showCollectionItem Method"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "methods", "showCollectionItem"]
---

# 📖 `CollectionItemModule.showCollectionItem()`

---

## 1. Method Signature & Overview

```typescript
showCollectionItem(): void
```

- **Primary Role**: Implements showCollectionItem within the CollectionItemModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
showCollectionItem(): void {
		const collection = this._data.getCollection();
		collection.forEach(item => {
			const collectionItem = this._collectionItems[item.symbolName];
			if (collectionItem) {
				collectionItem.updateData(item.amount, item.totalAmount);
			}
		});
	}
```
