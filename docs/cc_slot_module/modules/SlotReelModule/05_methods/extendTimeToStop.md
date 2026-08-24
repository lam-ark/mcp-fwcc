---
id: "cc_slot_module:SlotReelModule:method:extendTimeToStop"
title: "SlotReelModule.extendTimeToStop() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "extendTimeToStop", "near_win", "anticipation"]
---

# `SlotReelModule.extendTimeToStop(isNearWin: boolean, isLastReel: boolean): void`

---

## 1. Method Signature
```typescript
public extendTimeToStop(isNearWin: boolean, isLastReel: boolean): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotTableModule` when evaluating Scatter / Bonus anticipation to extend spinning duration on upcoming columns.

---

## 3. Detailed Algorithmic Execution Logic
1. Increments `NEAR_WIN_DELAY_STOP` in `this.config` by `NEAR_WIN_DELAY_TIME` or `NEAR_WIN_DELAY_TIME_LAST_REEL`.
2. Cancels existing stop schedule: `this.unschedule(this.stopCallback)`.
3. Reschedules `this.stopCallback` with the extended anticipation duration.

---

## 4. Un-truncated Source Code Implementation
```typescript
extendTimeToStop(isNearWin: boolean, isLastReel: boolean): void {
	if (isNearWin) {
		this.config.NEAR_WIN_DELAY_STOP += (isLastReel ? this.config.NEAR_WIN_DELAY_TIME_LAST_REEL : this.config.NEAR_WIN_DELAY_TIME);
	} else {
		this.config.NEAR_WIN_DELAY_STOP += this.currentMode.delayStop;
	}

	this.unschedule(this.stopCallback);
	this.scheduleOnce(this.stopCallback, this.config.NEAR_WIN_DELAY_STOP);
}
```
