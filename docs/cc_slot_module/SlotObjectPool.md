# SlotObjectPool

> **Source Path**: `assets/cc-common/cc-slot-module/PoolFactory/SlotObjectPool.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotObjectPool`** extends `Component`

## CC Properties
- `protected`

## Key Methods
- `onLoad(): void`
- `get(): cc.Node`
- `get(): instantiate(this.prefabObject)`
- `put(): void`
- `clear(): void`

## Source Implementation
```typescript
const { _decorator, Component, error, instantiate, isValid, NodePool } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class SlotObjectPool extends Component {
	@property(cc.Prefab) protected prefabObject: cc.Prefab = null;
	@property protected initCount: number = 15;

	protected pool: cc.NodePool = new NodePool();
	protected usingObjects: cc.Node[] = [];

	onLoad(): void {
		for (let i = 0; i < this.initCount; i++) {
			const object = this.get();
			this.put(object);
		}
	}

	get(): cc.Node {
		if (!isValid(this.prefabObject)) {
			error("Prefab object is not valid in Object Pool " + this.node.name);
			return null;
		}
		const object = this.pool.size() ? this.pool.get() : instantiate(this.prefabObject);
		object.active = true;
		object.setParent(this.node);
		this.usingObjects.push(object);
		return object;
	}

	put(object: cc.Node): void {
		if (!isValid(object) || !isValid(this)) {
			return;
		}
		object.active = false;
		const indexOf = this.usingObjects.indexOf(object);
		if (indexOf != -1) {
			this.usingObjects.splice(indexOf, 1);
		}
		this.pool.put(object);
	}

	clear(): void {
		if (!isValid(this)) {
			return;
		}

		[...this.usingObjects].forEach((object) => {
			this.put(object);
		});
		this.usingObjects = [];
	}
}
```
