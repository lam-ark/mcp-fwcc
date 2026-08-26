---
id: "cc_slot_mechanics:CollectionItemModule:methods:init"
title: "CollectionItemModule.init Method"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "methods", "init"]
---

# 📖 `CollectionItemModule.init()`

---

## 1. Method Signature & Overview

```typescript
init(): void
```

- **Primary Role**: Implements init within the CollectionItemModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
init(): void {
		this._config.ITEM_COLLECTION.forEach(item => {
			const node = instantiate(this.item);
			node.parent = this.holder;
			const collectionItem = node.getComponent(CollectionItem);
			collectionItem.init(item);
			this._collectionItems[item] = collectionItem;
		});

		// const collections = this._data.getCollection();
        
		// collections.forEach(item => {
		//     const node = instantiate(this.item);
		//     node.parent = this.holder;
		//     const collectionItem = node.getComponent(CollectionItem);
		//     collectionItem.init(item.symbolName);
		//     collectionItem.updateData(item.amount, item.totalAmount);
		//     this._collectionItems[item.symbolName] = collectionItem;
		// });
	}
```
