# CollectionItemModuleConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItemModuleConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`CollectionItemModuleConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass } = _decorator;

@ccclass
export class CollectionItemModuleConfig extends Component {
	readonly ITEM_COLLECTION: string[] = [
		"2",
		"3",
		"5",
		"6",
		"7",
	]
}


```
