# CollectionItemData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItemData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`CollectionItemData`** extends `BaseDataModule`

## Key Methods
- `onDataUpdate(): void`
- `getCollection(): CollectionItemDataInterface[]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass, property } = _decorator;

export interface CollectionItemDataInterface {
	symbolName: string;
	amount: number;
	totalAmount: number;
}

@ccclass
export class CollectionItemData extends BaseDataModule {
	/**
     * @key collectSymbols: collection items
	 * @type string[]
	 * @example ["symbol1:1:10", "symbol2:2:20", "symbol3:3:30"]
     */
	public registeredKeys: string[] = ['collectSymbols'];
	// collectSymbols - SymbolCode:Current:Total

	_collectionItemData: CollectionItemDataInterface[] = [];
	onDataUpdate(key: string, value: any): void {
		this[key] = value;

		if (key === 'collectSymbols') {
			this._collectionItemData = value.map((item: string) => {
				const orderData = item.split(':');
				const symbolName = orderData[0];
				const amount = Number(orderData[1]);
				const totalAmount = Number(orderData[2]);

				return { symbolName, amount, totalAmount };
			});
		}
	}

	getCollection(): CollectionItemDataInterface[] {
		return this._collectionItemData;
	}
}


```
