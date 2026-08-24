---
id: "cc_slot_module:SlotReelModule:method:resumeReel"
title: "SlotReelModule.resumeReel() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "resumeReel", "isResume", "reconnection"]
---

# `SlotReelModule.resumeReel(symbols: string[]): void`

---

## 1. Method Signature
```typescript
public resumeReel(symbols: string[]): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotTableModule` upon network reconnection (`isResume = true`) or scene fast synchronization (`SYNC_TABLE`).

---

## 3. Detailed Algorithmic Execution Logic
1. Ingests target symbols array, appending top/bottom buffer symbol codes.
2. Instantiates static symbol nodes directly via `symbolManager.createSymbol()` without playing roll animations.
3. Positions each symbol using `initPositionByType(index, size)`.
4. Updates sibling display indexes via `this.symbolManager.updateSymbolSiblingIndex()`.

---

## 4. Un-truncated Source Code Implementation
```typescript
resumeReel(symbols): void {
	this.data = [...symbols];

	for (let index = 0; index < this.config.BUFFER_BOT; index++) {
		this.data.push(this.getRandomSymbolWithException().symbolCode);
	}

	for (let index = 0; index < this.config.BUFFER_TOP; index++) {
		this.data.unshift(this.getRandomSymbolWithException().symbolCode);
	}

	this.data.forEach((symbolValue, index) => {
		if (symbolValue) {
			const revertIndex = this.data.length - index - 1;
			const { symbolCode: code, symbolSize: size } = this.mapSymbolData(symbolValue);
			const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
			SlotSymbolModule.getModuleComponent(symbol).setIndex(this.getIndexSymbol(revertIndex));
			const position = this.initPositionByType(index, size);
			symbol.setPosition(position.x, position.y);
			this.listSymbols.push(symbol);
		}
	});
	this.symbolManager.updateSymbolSiblingIndex(this.listSymbols);
}
```
