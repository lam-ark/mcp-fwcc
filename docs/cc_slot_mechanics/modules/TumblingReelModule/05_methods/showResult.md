---
id: "cc_slot_mechanics:TumblingReelModule:methods:showResult"
title: "TumblingReelModule.showResult Method Implementation"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "showResult"]
---

# 📖 `TumblingReelModule.showResult()`

---

## 1. Method Signature

```typescript
showResult(symbols, reelStopCallback, reelPreStopCallback): void
```

- **Scope**: `TumblingReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

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

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
