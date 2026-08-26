---
id: "cc_slot_mechanics:MegaReelModule:methods:spawnMegaSymbol"
title: "MegaReelModule.spawnMegaSymbol Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "spawnMegaSymbol"]
---

# 📖 `MegaReelModule.spawnMegaSymbol()`

---

## 1. Method Signature

```typescript
spawnMegaSymbol(code: string): cc.Node
```

- **Scope**: `MegaReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
protected spawnMegaSymbol(code: string): cc.Node {
        const size = this.config.MEGA_SIZE;
		const offsetX = (size.x / 2 - 0.5) * this.SYMBOL_WIDTH;
        const offsetY = (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT;

        let topY = 0;
        if (this.reelManager.state == ReelSpinState.SHOWING_RESULT) {
            topY = this.originalPosition.y + Math.abs(this.node.position.y) + this.reelManager.startY;
        }
        
		const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		symbol.setPosition(offsetX, topY + offsetY);

		SlotSymbolModule.getModuleComponent(symbol).setIndex(SymbolIndexType.GIGABLOX);
		this.megaSymbolList.push(symbol);

        return symbol
    }

    resetReel(): void {
		const offset = Math.abs(this.node.position.y);
		this.megaSymbolList.forEach((s) => s.setPosition(s.position.x, s.position.y - offset));

        super.resetReel();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
