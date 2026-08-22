# PaylineFactory

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineCommon/PaylineFactory.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`PoolItem`**
- **`export`**
- **`PaylineFactory`** extends `Component`

## CC Properties
- `name`
- `prefab`
- `initCount`
- `poolItems`

## Key Methods
- `getObject(): cc.Node`
- `returnObject(): void`
- `clearPool(): void`
- `clearAllPools(): void`
- `onLoad(): void`
- `preloadObjects(): void`
- `_spawnObject(): cc.Node`

## Source Implementation
```typescript
const { Component, NodePool, _decorator, error, instantiate, warn } = cc;

const { ccclass, property } = _decorator;

@ccclass('PoolItem')
class PoolItem {
	@property() name: string = '';
	@property(cc.Prefab) prefab: cc.Prefab = null;
	@property() initCount: number = 0;
}

@ccclass
export class PaylineFactory extends Component {
	//#region Properties

	@property(PoolItem) poolItems: PoolItem[] = [];

	protected poolMap: Map<string, cc.NodePool> = new Map();
	protected prefabMap: Map<string, cc.Prefab> = new Map();

	//#endregion

	//#region Public Methods

	public getObject(name: string): cc.Node {
		if (!this.prefabMap.has(name)) {
			error(`Prefab ${name} not registered.`);
			return null;
		}

		const pool = this.poolMap.get(name);
		let node = pool.get();

		if (pool.size() > 0) {
			node = pool.get();
		} else {
			node = this._spawnObject(name);
		}

		return node;
	}

	public returnObject(node: cc.Node): void {
		const name = node['__prefabName__'];
		if (!this.poolMap.has(name)) {
			warn(`Pool ${name} not found.`);
			node.destroy();
			return;
		}

		node.parent = null;
		node.active = false;

		const pool = this.poolMap.get(name);
		pool.put(node);
	}

	public clearPool(name: string): void {
		if (!this.poolMap.has(name)) {
			return;
		}

		const pool = this.poolMap.get(name);
		pool.clear();
	}

	public clearAllPools(): void {
		this.poolMap.forEach((pool, name) => {
			this.clearPool(name);
		});
	}

	//#endregion

	//#region Internal Methods

	protected onLoad(): void {
		this.poolItems.forEach(item => {
			this.prefabMap.set(item.name, item.prefab);
			this.poolMap.set(item.name, new NodePool(item.name));
			this.preloadObjects(item.name, item.initCount);
		});
	}

	protected preloadObjects(name: string, count: number): void {
		const pool = this.poolMap.get(name);

		for (let i = 0; i < count; i++) {
			const node = this._spawnObject(name);
			pool.put(node);
		}
	}

	protected _spawnObject(name: string): cc.Node {
		const prefab = this.prefabMap.get(name);
		const node = instantiate(prefab);
		node['__prefabName__'] = name;
		return node;
	}
	//#endregion
}
```
