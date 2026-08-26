---
id: "cc_slot_mechanics:CollectionItemModule:methods:getCollection"
title: "CollectionItemModule.getCollection Method Implementation"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "methods", "getCollection"]
---

# 📖 `CollectionItemModule.getCollection()`

---

## 1. Method Signature

```typescript
getCollection(); // collections.forEach(item => { // const node = instantiate(this.item); // node.parent = this.holder; // const collectionItem = node.getComponent(CollectionItem); // collectionItem.init(item.symbolName); // collectionItem.updateData(item.amount, item.totalAmount); // this._collectionItems[item.symbolName] = collectionItem; // }); } showCollectionItem(): void
```

- **Scope**: `CollectionItemModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
getCollection();
        
		// collections.forEach(item => {
		//     const node = instantiate(this.item);
		//     node.parent = this.holder;
		//     const collectionItem = node.getComponent(CollectionItem);
		//     collectionItem.init(item.symbolName);
		//     collectionItem.updateData(item.amount, item.totalAmount);
		//     this._collectionItems[item.symbolName] = collectionItem;
		// });
	}

	showCollectionItem(): void {
		const collection = this._data.getCollection();
		collection.forEach(item => {
			const collectionItem = this._collectionItems[item.symbolName];
			if (collectionItem) {
				collectionItem.updateData(item.amount, item.totalAmount);
			}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
