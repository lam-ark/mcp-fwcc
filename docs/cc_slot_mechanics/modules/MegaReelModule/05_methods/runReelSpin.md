---
id: "cc_slot_mechanics:MegaReelModule:methods:runReelSpin"
title: "MegaReelModule.runReelSpin Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "runReelSpin"]
---

# 📖 `MegaReelModule.runReelSpin()`

---

## 1. Method Signature & Overview

```typescript
runReelSpin(mode): void
```

- **Primary Role**: Implements runReelSpin within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
runReelSpin(mode): void {
        super.runReelSpin(mode);
        this.listSymbols.forEach((symbol) => {
			const indexSymbol = SlotSymbolModule.getModuleComponent(symbol).getIndex();
            const isHidden = this.checkSymbolHidden(symbol);
            if (isHidden) {
                // check to hide small symbols
                this.hideSmallSymbol(symbol, indexSymbol);
            }
		});
        this.megaData = [];
	}
```
