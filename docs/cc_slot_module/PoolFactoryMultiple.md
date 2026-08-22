# PoolFactoryMultiple

> **Source Path**: `assets/cc-common/cc-slot-module/PoolFactory/PoolFactoryMultiple.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`PoolingObject`**
- **`export`**
- **`PoolFactoryMultiple`** extends `Component`

## CC Properties
- `template`
- `poolName`
- `initCount`
- `maxCount`
- `poolingObjects`

## Key Methods
- `onLoad(): void`
- `getPool(): cc.NodePool | null`
- `getObject(): cc.Node | null`
- `getCustomObject(): cc.Node`
- `putBackObject(): void`
- `getPoolSize(): number`
- `size(): 0`
- `getUsedObjects(): Set<cc.Node>`
- `get(): new Set()`
- `clearPool(): void`

## Source Implementation
```typescript
const { _decorator, Component, NodePool, instantiate, isValid } = cc;
const { ccclass, property } = _decorator;

@ccclass("PoolingObject")
export class PoolingObject {
	@property(cc.Prefab) template: cc.Prefab = null;
	@property() poolName: string = "";
	@property() initCount: number = 5;
	@property() maxCount: number = 20;
}

@ccclass
export class PoolFactoryMultiple extends Component {
	@property({type:PoolingObject}) poolingObjects: PoolingObject[] = [];

	_pools: Map<string, cc.NodePool> = new Map();
	_usedObjects: Map<string, Set<cc.Node>> = new Map();

	onLoad(): void {
		this.poolingObjects.forEach(poolingObject => {
			if (poolingObject.template) {
				const poolName = poolingObject.poolName || poolingObject.template.name;
				const pool = new NodePool(poolName);
				const usedObjects = new Set<cc.Node>();
				for (let i = 0; i < poolingObject.initCount; i++) {
					const obj = instantiate(poolingObject.template);
					obj['__pool_name_'] = poolName;
					pool.put(obj);
				}

				this._pools.set(poolingObject.poolName, pool);
				this._usedObjects.set(poolingObject.poolName, usedObjects);
			}
		});
	}

	getPool(poolName: string): cc.NodePool | null {
		if (this._pools.has(poolName)) {
			return this._pools.get(poolName);
		}

		return null;
	}

	getObject(poolName: string): cc.Node | null {
		const pool = this.getPool(poolName);
		if (pool) {
			if (pool.size() > 0) {
				const obj = pool.get();
				this._usedObjects.get(poolName).add(obj);
				return obj;
			} else {
				const poolingObject = this.poolingObjects.find(p => p.poolName === poolName);
				if (poolingObject && poolingObject.template) {
					const obj = instantiate(poolingObject.template);
					obj['__pool_name_'] = poolName;
					this._usedObjects.get(poolName).add(obj);
					return obj;
				}
			}
		}

		return null;
	}

	getCustomObject(node: cc.Node): cc.Node {
		const poolName = node['__pool_name_'] || node.name;
		const pool = this.getPool(poolName);
		if (pool) {
			const obj = pool.get();
			return obj;
		} else {
			const obj = instantiate(node);
			obj['__pool_name_'] = poolName;
			return obj;
		}
	}

	putBackObject(obj: cc.Node): void {
		if (!obj || !isValid(obj)) {
			return;
		}

		const poolName = obj['__pool_name_'] || obj.name;
		const pool = this.getPool(poolName);
		if (pool) {
			const poolingObject = this.poolingObjects.find(p => p.poolName === poolName);
			if (poolingObject && poolingObject.maxCount < pool.size()) {
				obj.destroy();
			} else {
				pool.put(obj);
			}

			this._usedObjects.get(poolName).delete(obj);
		} else {
			obj.destroy();
		}
	}

	getPoolSize(poolName: string): number {
		return this._pools.has(poolName) ? this._pools.get(poolName).size() : 0;
	}

	getUsedObjects(poolName: string): Set<cc.Node> {
		return this._usedObjects.has(poolName) ? this._usedObjects.get(poolName) : new Set();
	}

	clearPool(poolName: string): void {
		const usedObjects = Array.from(this.getUsedObjects(poolName));
		usedObjects.forEach(obj => this.putBackObject(obj));
	}
}


```
