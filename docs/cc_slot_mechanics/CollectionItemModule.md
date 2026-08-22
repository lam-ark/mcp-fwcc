# CollectionItemModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItemModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`CollectionItemModule`** extends `SlotBaseModule`

## CC Properties
- `item`
- `holder`

## Key Methods
- `onLoadExtend(): void`
- `init(): void`
- `showCollectionItem(): void`
- `resetCollectionItem(): void`

## Source Implementation
```typescript
const { _decorator, instantiate } = cc;
import { CollectionItemData } from './CollectionItemData';
import { CollectionItem } from './CollectionItem';
import { CollectionItemModuleConfig } from './CollectionItemModuleConfig';
import { SlotBaseModule } from '../../../cc-slot-module/SlotModuleExport';
import { HelpDocuments } from '../../../cc-slot-module/Components/Common/HelpDocuments';
const { ccclass, property, help } = _decorator;

@ccclass
@help(HelpDocuments.COLLECTION_ITEMS_MODULE)
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

	showCollectionItem(): void {
		const collection = this._data.getCollection();
		collection.forEach(item => {
			const collectionItem = this._collectionItems[item.symbolName];
			if (collectionItem) {
				collectionItem.updateData(item.amount, item.totalAmount);
			}
		});
	}

	resetCollectionItem(): void {
		Object.keys(this._collectionItems).forEach(key => {
			this._collectionItems[key].reset();
		});
	}
}


```
