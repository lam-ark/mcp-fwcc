---
id: "cc_slot_module:SlotReelModule:method:playStopAnimation"
title: "SlotReelModule.playStopAnimation() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "playStopAnimation", "bounce", "landing_physics"]
---

# `SlotReelModule.playStopAnimation(): void`

---

## 1. Method Signature
```typescript
protected playStopAnimation(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `spinAction()` when `this.reelManager.state === ReelSpinState.STOPPED`.

---

## 3. Detailed Algorithmic Execution Logic
1. Reads stopping speed: `spinSpeed = this.currentMode.easingTimeStop`.
2. Emits pre-stop notification: `this.onReelPreStop()` ➔ triggers `reelPreStopCB(this.reelIndex)`.
3. Triggers symbol appear animation on visible rows: `this.playSymbolAppearAnimation()`.
4. Calculates two-step bounce offsets via `this.getPositionStopStep()` (`positionStep1 = (0, -easingStop)`, `positionStep2 = (0, easingStop)`).
5. Starts two-phase `cc.tween` creating bounce landing effect.
6. On tween completion:
   - Resets reel coordinates via `this.resetReel()`.
   - Invokes completion callback: `this.reelStopCB(this.reelIndex)`.
   - Unschedules stopping step timers.

---

## 4. Un-truncated Source Code Implementation
```typescript
protected playStopAnimation(): void {
	const spinSpeed = this.currentMode.easingTimeStop;
	this.onReelPreStop();

	this.playSymbolAppearAnimation();

	const { positionStep1, positionStep2 } = this.getPositionStopStep();

	this.tween = tween(this.node)
		.by(spinSpeed, { position: positionStep1 })
		.by(spinSpeed, { position: positionStep2 })
		.call(() => {
			this.tween = null;
			this.resetReel();
			this.reelStopCB && this.reelStopCB(this.reelIndex);
			this.unschedule(this.setStepToStop);
		})
		.start();
}
```
