---
id: "cc_slot_mechanics:MegaReelModule:methods:spawnMegaSymbol"
title: "MegaReelModule.spawnMegaSymbol Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "spawnMegaSymbol"]
---

# 📖 `MegaReelModule.spawnMegaSymbol()`

---

## 1. Method Signature & Overview

```typescript
spawnMegaSymbol(code: string): cc.Node
```

- **Primary Role**: Implements spawnMegaSymbol within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

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
```
