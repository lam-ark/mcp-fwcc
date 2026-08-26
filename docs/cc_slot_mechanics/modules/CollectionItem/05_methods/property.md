---
id: "cc_slot_mechanics:CollectionItem:methods:property"
title: "CollectionItem.property Method Implementation"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "methods", "property"]
---

# 📖 `CollectionItem.property()`

---

## 1. Method Signature

```typescript
property(cc.Sprite) sprItem: cc.Sprite = null; @property(cc.Label) lbItemName: cc.Label = null; @property(cc.Label) lbCollection: cc.Label = null; @property prefix: string = ''; @property([SpriteFrame]) itemFrames: cc.SpriteFrame[] = []; _itemName: string = ""; _currentAmount: number = 0; _totalAmount: number = 0; _assets: Record<string, cc.SpriteFrame> = {}; onLoadExtend(): void
```

- **Scope**: `CollectionItem`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
property(cc.Sprite) sprItem: cc.Sprite = null;
	@property(cc.Label) lbItemName: cc.Label = null;
	@property(cc.Label) lbCollection: cc.Label = null;
	@property prefix: string = '';

	@property([SpriteFrame]) itemFrames: cc.SpriteFrame[] = [];

	_itemName: string = "";
	_currentAmount: number = 0;
	_totalAmount: number = 0;
	_assets: Record<string, cc.SpriteFrame> = {};

	onLoadExtend(): void {
		this._assets = eno.CommonUtils.convertAssetArrayToObject(this.itemFrames);
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
