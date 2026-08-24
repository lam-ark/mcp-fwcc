---
id: "cc_slot_module:SlotReelModule:method:showResult"
title: "SlotReelModule.showResult() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "showResult", "stopping", "result_matrix"]
---

# `SlotReelModule.showResult(symbols, reelStopCallback, reelPreStopCallback?): void`

---

## 1. Method Signature
```typescript
public showResult(symbols: string[], reelStopCallback: Function, reelPreStopCallback?: Function): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotTableModule.stopSpinning()` when the server responds with the target table matrix.

---

## 3. Detailed Algorithmic Execution Logic
1. Clears `this.resultSymbols = []`.
2. Populates target data array via `this.updateReelResult(symbols)`.
3. Sets up stopping schedule callback: `this.setUpStopCallback()` (applies column delay: `reelIndex * delayStop`).
4. Stores completion callback delegates: `this.reelStopCB` and `this.reelPreStopCB`.

---

## 4. Un-truncated Source Code Implementation
```typescript
showResult(symbols, reelStopCallback, reelPreStopCallback): void {
	this.resultSymbols = [];
	this.updateReelResult(symbols);
	this.setUpStopCallback();
	this.reelStopCB = reelStopCallback;
	this.reelPreStopCB = reelPreStopCallback;
}
```
