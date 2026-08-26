---
id: "cc_slot_mechanics:InfinityReelModule:methods:showExtendedResult"
title: "InfinityReelModule.showExtendedResult Method"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "methods", "showExtendedResult"]
---

# 📖 `InfinityReelModule.showExtendedResult()`

---

## 1. Method Signature & Overview

```typescript
showExtendedResult(symbols, reelStopCallback, reelPreStopCallback): void
```

- **Primary Role**: Implements showExtendedResult within the InfinityReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
showExtendedResult(symbols, reelStopCallback, reelPreStopCallback): void {
		this.resultSymbols = [];
		this.updateReelResult(symbols);
		this.setUpExtendedCallback();
		this.reelStopCB = reelStopCallback;
		this.reelPreStopCB = reelPreStopCallback;
	}
```
