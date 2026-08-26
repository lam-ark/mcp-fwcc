---
id: "cc_slot_mechanics:CollectionItemModule:methods:resetCollectionItem"
title: "CollectionItemModule.resetCollectionItem Method"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "methods", "resetCollectionItem"]
---

# 📖 `CollectionItemModule.resetCollectionItem()`

---

## 1. Method Signature & Overview

```typescript
resetCollectionItem(): void
```

- **Primary Role**: Implements resetCollectionItem within the CollectionItemModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
resetCollectionItem(): void {
		Object.keys(this._collectionItems).forEach(key => {
			this._collectionItems[key].reset();
		});
	}
```
