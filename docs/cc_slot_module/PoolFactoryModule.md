# PoolFactoryModule

> **Source Path**: `assets/cc-common/cc-slot-module/PoolFactory/PoolFactoryModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PoolFactoryModule`** extends `Component`

## CC Properties
- `template`
- `initCount`

## Key Methods
- `usedObjects(): cc.Node[]`
- `onLoad(): void`
- `onLoadExtend(): void`
- `getObject(): cc.Node`
- `get(): instantiate(this.template)`
- `returnObject(): void`
- `returnAllObjects(): void`
- `getSize(): number`
- `clear(): void`

## Source Implementation
```typescript
const { _decorator, Component, instantiate, NodePool } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class PoolFactoryModule extends Component {
	@property({ type: cc.Prefab }) template: cc.Prefab = null;
	@property({ type: cc.Integer }) initCount: number = 5;

	_pool: cc.NodePool = null;
	protected _usedObjects: cc.Node[] = [];
	get usedObjects(): cc.Node[] {
		return this._usedObjects;
	}

	protected onLoad(): void {
		this._pool = new NodePool(this.name);
		for (let index = 0; index < this.initCount; index++) {
			if (!this.template) {
				continue;
			}
			const element = instantiate(this.template);
			this._pool.put(element);
		}

		this.onLoadExtend();
	}

	onLoadExtend(): void { }


	getObject(): cc.Node {
		const obj = this._pool.size() ? this._pool.get() : instantiate(this.template);
		this._usedObjects.push(obj);

		return obj;
	}

	returnObject(obj: cc.Node): void {
		const indexOf = this._usedObjects.indexOf(obj);
		if (indexOf != -1) {
			this._usedObjects.splice(indexOf, 1);
		}

		if (this._pool) {
			this._pool.put(obj);
		} else {
			obj.destroy();
		}
	}

	returnAllObjects(): void {
		[...this._usedObjects].forEach(obj => this.returnObject(obj));
		this._usedObjects = [];
	}

	getSize(): number {
		return this._pool.size();
	} 

	clear(): void {
		this.returnAllObjects();
		this._pool.clear();
	}
}


```
