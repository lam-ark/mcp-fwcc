---
id: "cc_slot_module:SlotReelModule:method:initReel"
title: "SlotReelModule.initReel() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "initReel", "initialization", "bootstrap"]
---

# `SlotReelModule.initReel({ reelIndex, config, pool }): void`

---

## 1. Method Signature
```typescript
public initReel({ reelIndex, config, pool }: { reelIndex: number, config: any, pool: SlotSymbolManager }): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotTableModule.init()` during scene setup when creating each column instance.
* **Timing**: Executed once during table engine initialization.

---

## 3. Detailed Algorithmic Execution Logic
1. Stores injected parameters: `this.reelIndex = reelIndex`, `this.config = config`, `this.symbolManager = pool`.
2. Reads configuration constants via `this.getConfigValue()`.
3. Instantiates `ReelManager` calculating `visibleSymbol` and `totalSymbol` (including top/bottom buffer sizes).
4. Populates initial symbol nodes in column via `this.initSymbolsInReel()`.
5. Caches resting anchor position: `this.originalPosition = new cc.Vec2(this.node.position.x, this.node.position.y)`.

---

## 4. Un-truncated Source Code Implementation
```typescript
initReel({ reelIndex, config, pool }): void {
	this.reelIndex = reelIndex;
	this.config = config;
	this.symbolManager = pool;

	this.getConfigValue();
	this.initReelManager();
	this.initSymbolsInReel();

	this.originalPosition = new cc.Vec2(this.node.position.x, this.node.position.y);
}
```
