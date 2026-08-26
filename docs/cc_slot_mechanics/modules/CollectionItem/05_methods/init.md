---
id: "cc_slot_mechanics:CollectionItem:methods:init"
title: "CollectionItem.init Method"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "methods", "init"]
---

# 📖 `CollectionItem.init()`

---

## 1. Method Signature & Overview

```typescript
init(itemName: string): void
```

- **Primary Role**: Implements init within the CollectionItem mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
init(itemName: string): void {
		this._itemName = itemName;
		const spriteFrame = this._assets[`${this.prefix}${itemName}`];
		if (spriteFrame) {
			this.sprItem.spriteFrame = spriteFrame;
		}

		this.lbItemName.string = itemName;
	}
```
