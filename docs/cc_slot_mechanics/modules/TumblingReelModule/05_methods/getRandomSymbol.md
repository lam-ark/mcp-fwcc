---
id: "cc_slot_mechanics:TumblingReelModule:methods:getRandomSymbol"
title: "TumblingReelModule.getRandomSymbol Method Implementation"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "getRandomSymbol"]
---

# 📖 `TumblingReelModule.getRandomSymbol()`

---

## 1. Method Signature

```typescript
getRandomSymbol()); } if (skip) { return; } const symbol = this.spawnSymbol(code, size); if (indexSymbol != SymbolIndexType.UNUSED) { SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol); this.resultSymbols.push(symbol); } return symbol; } protected spawnSymbol(code: string, size: cc.Vec2): cc.Node
```

- **Scope**: `TumblingReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
getRandomSymbol());
		}

		if (skip) {
			return;
		}

		const symbol = this.spawnSymbol(code, size);
		if (indexSymbol != SymbolIndexType.UNUSED) {
			SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol);
			this.resultSymbols.push(symbol);
		}

		return symbol;
	}

    protected spawnSymbol(code: string, size: cc.Vec2): cc.Node {
        const symbol = super.spawnSymbol(code, size);
        const position = symbol.position;
        symbol.setPosition(position.x, position.y + this.config.BUFFER_TOP_Y + this.SYMBOL_HEIGHT);
		return symbol;
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
