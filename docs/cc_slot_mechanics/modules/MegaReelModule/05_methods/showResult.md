---
id: "cc_slot_mechanics:MegaReelModule:methods:showResult"
title: "MegaReelModule.showResult Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "showResult"]
---

# 📖 `MegaReelModule.showResult()`

---

## 1. Method Signature & Overview

```typescript
showResult(reelData, reelStopCallback, reelPreStopCallback): void
```

- **Primary Role**: Implements showResult within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
showResult(reelData, reelStopCallback, reelPreStopCallback): void {
		this.resultSymbols = [];
        this.megaData = reelData.megaData;

        this.updateMegaIndex(reelData.hasMulti);
		this.updateReelResult(reelData.symbols);
		this.setUpStopCallback();
		this.reelStopCB = reelStopCallback;
		this.reelPreStopCB = reelPreStopCallback;
	}
```
