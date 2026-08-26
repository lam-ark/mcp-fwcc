---
id: "cc_slot_mechanics:CollectionItem:methods:onLoadExtend"
title: "CollectionItem.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `CollectionItem.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the CollectionItem mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this._assets = eno.CommonUtils.convertAssetArrayToObject(this.itemFrames);
	}
```
