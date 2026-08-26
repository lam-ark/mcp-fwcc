---
id: "cc_slot_mechanics:HorizontalReelModule:methods:getModuleComponent"
title: "HorizontalReelModule.getModuleComponent Method Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "getModuleComponent"]
---

# 📖 `HorizontalReelModule.getModuleComponent()`

---

## 1. Method Signature

```typescript
getModuleComponent(symbol); if (!comp.getSize().equals(this.DEFAULT_SIZE) && comp.sizeCount > 1) { comp.sizeCount--; } else { this.symbolManager.removeSymbol(symbol); this.listSymbols.shift(); } this.reelManager.step--; if (this.reelManager.step < this.reelManager.totalSymbol) { this.reelManager.changeState(ReelSpinState.SHOWING_RESULT); } this.spawnReelSymbol(); if (this.reelManager.stop >= this.reelManager.totalSymbol) { this.reelManager.changeState(ReelSpinState.STOPPED); } } getPositionStopStep(): 
```

- **Scope**: `HorizontalReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
getModuleComponent(symbol);

		if (!comp.getSize().equals(this.DEFAULT_SIZE) && comp.sizeCount > 1) {
			comp.sizeCount--;
		} else {
			this.symbolManager.removeSymbol(symbol);
			this.listSymbols.shift();
		}

		this.reelManager.step--;
		if (this.reelManager.step < this.reelManager.totalSymbol) {
			this.reelManager.changeState(ReelSpinState.SHOWING_RESULT);
		}

		this.spawnReelSymbol();

		if (this.reelManager.stop >= this.reelManager.totalSymbol) {
			this.reelManager.changeState(ReelSpinState.STOPPED);
		}
	}

	getPositionStopStep(): { positionStep1: cc.Vec2, positionStep2: cc.Vec2 } {
		const stepDistance = this.currentMode.easingStop;
		const positionStep1 = new Vec2(-stepDistance, 0);
		const positionStep2 = new Vec2(stepDistance, 0);

		return { positionStep1, positionStep2 };
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
