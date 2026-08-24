---
id: "cc_slot_module:SlotReelModule:method:recycleSymbol"
title: "SlotReelModule.recycleSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "recycleSymbol", "node_pool", "recycling"]
---

# `SlotReelModule.recycleSymbol(): void`

---

## 1. Method Signature
```typescript
protected recycleSymbol(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks bottommost symbol in `this.listSymbols`.
2. If symbol is multi-cell and `sizeCount > 1`, decrements `sizeCount--`.
3. Otherwise, returns symbol to pool via `this.symbolManager.removeSymbol(symbol)` and pops it from `this.listSymbols`.
4. Decrements countdown steps: `this.reelManager.step--`. If `step < totalSymbol`, transitions to `ReelSpinState.SHOWING_RESULT`.
5. Spawns new symbol at top buffer: `const newSymbol = this.spawnReelSymbol()`.
6. Invokes customization hook: `this.customizeNewSymbol(newSymbol)`.
7. When `this.reelManager.stop >= this.reelManager.totalSymbol`, switches state to `ReelSpinState.STOPPED`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected recycleSymbol(): void {
	if (!this.listSymbols.length) {
		return;
	}

	const length = this.listSymbols.length;
	const symbol = this.listSymbols[length - 1];
	const comp = SlotSymbolModule.getModuleComponent(symbol);

	if (!comp.getSize().equals(this.DEFAULT_SIZE) && comp.sizeCount > 1) {
		comp.sizeCount--;
	} else {
		this.symbolManager.removeSymbol(symbol);
		this.listSymbols.pop();
	}

	this.reelManager.step--;
	if (this.reelManager.step < this.reelManager.totalSymbol) {
		this.reelManager.changeState(ReelSpinState.SHOWING_RESULT);
	}

	const newSymbol = this.spawnReelSymbol();
	this.customizeNewSymbol(newSymbol);

	if (this.reelManager.stop >= this.reelManager.totalSymbol) {
		this.reelManager.changeState(ReelSpinState.STOPPED);
	}
}
```
