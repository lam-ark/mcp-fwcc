---
id: "cc_slot_mechanics:NudgeReelModule:methods:spawnSymbol"
title: "NudgeReelModule.spawnSymbol Method Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "spawnSymbol"]
---

# 📖 `NudgeReelModule.spawnSymbol()`

---

## 1. Method Signature

```typescript
spawnSymbol(code, size); } } protected spawnBottomSymbol(code: string, size: cc.Vec2): cc.Node
```

- **Scope**: `NudgeReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
spawnSymbol(code, size);
		}
	}

	protected spawnBottomSymbol(code: string, size: cc.Vec2): cc.Node {
		const offsetX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
		const offsetY = size.y * this.SYMBOL_HEIGHT;
		const topY = this.originalPosition.y + Math.abs(this.node.position.y) - this.reelManager.showSymbol * this.SYMBOL_HEIGHT;

		const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		symbol.setPosition(offsetX, topY - offsetY);

		this.listSymbols.push(symbol);
		return symbol;
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
