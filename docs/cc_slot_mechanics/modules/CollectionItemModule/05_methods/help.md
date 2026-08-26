---
id: "cc_slot_mechanics:CollectionItemModule:methods:help"
title: "CollectionItemModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `CollectionItemModule.help()`

---

## 1. Method Signature

```typescript
help(HelpDocuments.COLLECTION_ITEMS_MODULE) export class CollectionItemModule extends SlotBaseModule { @property(cc.Prefab) item: cc.Prefab = null; @property(cc.Node) holder: cc.Node = null; _config: CollectionItemModuleConfig; _data: CollectionItemData; _collectionItems: Record<string, CollectionItem> = {}; onLoadExtend(): void
```

- **Scope**: `CollectionItemModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.COLLECTION_ITEMS_MODULE)
export class CollectionItemModule extends SlotBaseModule {
	@property(cc.Prefab) item: cc.Prefab = null;
	@property(cc.Node) holder: cc.Node = null;

	_config: CollectionItemModuleConfig;
	_data: CollectionItemData;
	_collectionItems: Record<string, CollectionItem> = {};

	onLoadExtend(): void {
		this._data = this.getComponent(CollectionItemData);
		this._config = this.getComponent(CollectionItemModuleConfig);
        
		this.moduleEvent.on('SHOW_COLLECTION_ITEM', this.showCollectionItem, this);
		this.moduleEvent.on('RESET_COLLECTION_ITEM', this.resetCollectionItem, this);

		this.init();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
