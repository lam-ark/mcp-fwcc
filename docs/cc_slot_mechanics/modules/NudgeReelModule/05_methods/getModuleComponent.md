---
id: "cc_slot_mechanics:NudgeReelModule:methods:getModuleComponent"
title: "NudgeReelModule.getModuleComponent Method Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "getModuleComponent"]
---

# 📖 `NudgeReelModule.getModuleComponent()`

---

## 1. Method Signature

```typescript
getModuleComponent(symbol); if (!comp.getSize().equals(this.DEFAULT_SIZE) && comp.sizeCount > 1) { comp.sizeCount--; } else { this.symbolManager.removeSymbol(symbol); if (this._direction == NudgeDirection.NUDGE_UP) { this.listSymbols.shift(); } else { this.listSymbols.pop(); } } this._nudgeStep--; } protected spawnNudgeSymbol(code: string, size: cc.Vec2): cc.Node
```

- **Scope**: `NudgeReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
getModuleComponent(symbol);

		if (!comp.getSize().equals(this.DEFAULT_SIZE) && comp.sizeCount > 1) {
			comp.sizeCount--;
		} else {
			this.symbolManager.removeSymbol(symbol);
			if (this._direction == NudgeDirection.NUDGE_UP) {
				this.listSymbols.shift();
			} else {
				this.listSymbols.pop();
			}
		}

		this._nudgeStep--;
	}

	protected spawnNudgeSymbol(code: string, size: cc.Vec2): cc.Node {
		if (this._direction == NudgeDirection.NUDGE_UP) {
			return this.spawnBottomSymbol(code, size);
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
