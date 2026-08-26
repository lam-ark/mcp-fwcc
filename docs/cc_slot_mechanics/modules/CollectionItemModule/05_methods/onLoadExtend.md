---
id: "cc_slot_mechanics:CollectionItemModule:methods:onLoadExtend"
title: "CollectionItemModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `CollectionItemModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the CollectionItemModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this._data = this.getComponent(CollectionItemData);
		this._config = this.getComponent(CollectionItemModuleConfig);
        
		this.moduleEvent.on('SHOW_COLLECTION_ITEM', this.showCollectionItem, this);
		this.moduleEvent.on('RESET_COLLECTION_ITEM', this.resetCollectionItem, this);

		this.init();
	}
```
