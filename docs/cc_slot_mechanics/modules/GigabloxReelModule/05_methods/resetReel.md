---
id: "cc_slot_mechanics:GigabloxReelModule:methods:resetReel"
title: "GigabloxReelModule.resetReel Method"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "methods", "resetReel"]
---

# 📖 `GigabloxReelModule.resetReel()`

---

## 1. Method Signature & Overview

```typescript
resetReel(): void
```

- **Primary Role**: Implements resetReel within the GigabloxReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
resetReel(): void {
		const offset = Math.abs(this.node.position.y);
		this._topGigaSymbol -= offset;
		
		if (this.listGigaSymbols.length > 1) {
			this.listGigaSymbols.forEach((s) => s.setPosition(s.position.x, s.position.y - offset));
			this.listGigaSymbols.sort((a, b) => b.position.y - a.position.y);
		}
		super.resetReel();

		let i = 0;
		while (i < this.listGigaSymbols.length) {
			const gigaSymbol = this.listGigaSymbols[i];
			if (gigaSymbol.position.y < this.node.position.y - this.reelManager.totalSymbol * this.config.SYMBOL_HEIGHT / 2) {
				this.symbolManager.removeSymbol(gigaSymbol);
				this.listGigaSymbols.splice(i, 1);
			} else {
				i++;
			}
		}
	}
```
