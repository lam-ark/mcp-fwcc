---
id: "cc_slot_mechanics:NudgeReelModule:methods:addRemainNudgeSymbols"
title: "NudgeReelModule.addRemainNudgeSymbols Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "addRemainNudgeSymbols"]
---

# 📖 `NudgeReelModule.addRemainNudgeSymbols()`

---

## 1. Method Signature & Overview

```typescript
addRemainNudgeSymbols(positionY: number): void
```

- **Primary Role**: Implements addRemainNudgeSymbols within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected addRemainNudgeSymbols(positionY: number): void {
		let offsetY = positionY;
		for (let i = 0; i < this._totalNudgeStep; i++) {
			const symbol = this.spawnNudgeSymbol(SYMBOL_NUDGE, SYMBOL_NUDGE_SIZE);
			SlotSymbolModule.getModuleComponent(symbol).setIndex(SymbolIndexType.UNUSED);
			symbol.setPosition(new Vec2(symbol.position.x, offsetY));
			offsetY = offsetY + this._direction * this.SYMBOL_HEIGHT;
		}
	}
```
