# SlotCustomNodePool

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotCustomNodePool.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`SpecialSymbolTemplates`**
- **`SlotCustomNodePool`**

## CC Properties
- `symbolCode`
- `template`
- `initCount`

## Key Methods
- `initSymbolPool(): void`
- `setupNormalSymbolPool(): void`
- `setupSpecialSymbolPool(): void`
- `createPool(): cc.NodePool`
- `setNodeMetadata(): void`
- `getSpecialPoolName(): string`
- `get(): cc.Node`
- `getSymbolFromPool(): cc.Node`
- `setNodeMetadata(): NORMAL_POOL_NAME, isSpecial)`
- `put(): void`
- `size(): number`

## Source Implementation
```typescript
const { _decorator, error, instantiate, Node, NodePool, Prefab } = cc;
import { SPECIAL_SYMBOL_KEY } from '../../../Components/Common/SlotEnum';
const { ccclass, property } = _decorator;

const POOL_NAME_PREFIX = 'SlotCustomNodePool';
const NORMAL_POOL_NAME = `${POOL_NAME_PREFIX}_normal`;
const SPECIAL_POOL_NAME_PREFIX = `${POOL_NAME_PREFIX}_special_`;
const CUSTOM_POOL_NAME_KEY = '__custom_pool_name_';

@ccclass('SpecialSymbolTemplates')
export class SpecialSymbolTemplates {
	@property() symbolCode: string = '';
	@property(cc.Prefab) template: cc.Prefab = null;
	@property() initCount: number = 1;
}

export class SlotCustomNodePool {
	private readonly normalSymbolTemplate: cc.Prefab;
	private readonly normalInitCount: number;
	private readonly specialSymbolTemplates: SpecialSymbolTemplates[];
	protected readonly _pools: Map<string, cc.NodePool> = new Map();
	
	constructor(template: cc.Prefab, initCount: number, specialSymbolTemplates: SpecialSymbolTemplates[]) {
		this.normalSymbolTemplate = template;
		this.normalInitCount = initCount;
		this.specialSymbolTemplates = specialSymbolTemplates || [];
	}

	initSymbolPool(): void {
		this.setupNormalSymbolPool();
		this.setupSpecialSymbolPool();
	}

	protected setupNormalSymbolPool(): void {
		const pool = this.createPool(NORMAL_POOL_NAME, this.normalSymbolTemplate, this.normalInitCount);
		this._pools.set(NORMAL_POOL_NAME, pool);
	}

	protected setupSpecialSymbolPool(): void {
		this.specialSymbolTemplates.forEach(({ symbolCode, template, initCount }) => {
			if (template) {
				const poolName = this.getSpecialPoolName(symbolCode);
				const pool = this.createPool(poolName, template, initCount);
				this._pools.set(poolName, pool);
			}
		});
	}

	protected createPool(poolName: string, template: cc.Prefab, count: number): cc.NodePool {
		const pool = new NodePool(poolName);
		for (let i = 0; i < count; i++) {
			const obj = instantiate(template);
			this.setNodeMetadata(obj, poolName, false);
			pool.put(obj);
		}
		return pool;
	}

	protected setNodeMetadata(node: cc.Node, poolName: string, isSpecial: boolean): void {
		node[CUSTOM_POOL_NAME_KEY] = poolName;
		node[SPECIAL_SYMBOL_KEY] = isSpecial;
	}

	protected getSpecialPoolName(symbolCode: string): string {
		return `${SPECIAL_POOL_NAME_PREFIX}${symbolCode}`;
	}

	get(symbolCode: string): cc.Node {
		const specialPoolName = this.getSpecialPoolName(symbolCode);
		const specialPool = this._pools.get(specialPoolName);
		
		if (specialPool) {
			return this.getSymbolFromPool(specialPool, symbolCode, true);
		}
		
		const normalPool = this._pools.get(NORMAL_POOL_NAME);
		return this.getSymbolFromPool(normalPool, null, false);
	}

	protected getSymbolFromPool(pool: cc.NodePool | undefined, symbolCode: string | null, isSpecial: boolean): cc.Node {
		// Try to get from pool first
		if (pool && pool.size() > 0) {
			const obj = pool.get();
			obj[SPECIAL_SYMBOL_KEY] = isSpecial;
			return obj;
		}
		
		// Fallback: create new instance
		let template: cc.Prefab = null;
		if (isSpecial) {
			const specialSymbolTemplate = this.specialSymbolTemplates.find((t: SpecialSymbolTemplates) => t.symbolCode === symbolCode);
			if (specialSymbolTemplate) {
				template = specialSymbolTemplate.template;
			}
		} else {
			template = this.normalSymbolTemplate;
		}
		
		const obj = instantiate(template);
		this.setNodeMetadata(obj, isSpecial ? this.getSpecialPoolName(symbolCode!) : NORMAL_POOL_NAME, isSpecial);
		return obj;
	}

	put(symbol: cc.Node): void {
		const poolName = symbol[CUSTOM_POOL_NAME_KEY] as string | undefined;
		if (!poolName) {
			symbol.destroy();
			return;
		}
		
		const pool = this._pools.get(poolName);
		if (pool) {
			pool.put(symbol);
		} else {
			symbol.destroy();
		}
	}

	size(): number {
		let totalSize = 0;
		this._pools.forEach(pool => {
			totalSize += pool.size();
		});
		return totalSize;
	}
}


```
