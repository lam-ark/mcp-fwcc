---
id: "cc_slot_mechanics:TumblingReelModule:methods:showResult"
title: "TumblingReelModule.showResult Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "showResult"]
---

# 📖 `TumblingReelModule.showResult()`

---

## 1. Method Signature & Overview

```typescript
showResult(symbols, reelStopCallback, reelPreStopCallback): void
```

- **Primary Role**: Implements showResult within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
showResult(symbols, reelStopCallback, reelPreStopCallback): void {
        this.resultSymbols = [];
		this.updateReelResult(symbols);
		
		this.reelStopCB = reelStopCallback;
		this.reelPreStopCB = reelPreStopCallback;

        if (this.reelManager.state == ReelSpinState.START) {
            this.reelManager.changeState(ReelSpinState.SHOWING_RESULT);
        }
	}
```
