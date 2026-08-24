---
id: "cc_slot_module:SlotReelModule:method:spinAction"
title: "SlotReelModule.spinAction() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "spinAction", "scrolling_tween", "recursion"]
---

# `SlotReelModule.spinAction(): void`

---

## 1. Method Signature
```typescript
public spinAction(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `runReelSpin()` and recursively re-invoked on each symbol step translation callback until `this.reelManager.state === ReelSpinState.STOPPED`.

---

## 3. Detailed Algorithmic Execution Logic
1. Checks stopping condition: If state is `STOPPED`, invokes `this.playStopAnimation()` and exits loop.
2. Computes translation distance (`newPosition = (0, -this.SYMBOL_HEIGHT)`).
3. Computes frame duration taking slowdown factors into account.
4. Starts `cc.tween` translating the column downwards by one symbol height.
5. On tween completion: invokes `this.recycleSymbol()` and recursively invokes `this.spinAction()`.

---

## 4. Un-truncated Source Code Implementation
```typescript
spinAction(): void {
	if (this.reelManager.state === ReelSpinState.STOPPED) {
		this.playStopAnimation();
		return;
	}

	const newPosition: cc.Vec2 = new cc.Vec2(0, -this.SYMBOL_HEIGHT);
	const slowdownFactor = this.currentMode.slowdownFactor || 4;
	const time = this.reelManager.speed + this.reelManager.speed * this.reelManager.stop / slowdownFactor;
	this.tween = tween(this.node)
		.by(time, { position: newPosition })
		.call(() => {
			this.tween = null;
			this.recycleSymbol();
			this.spinAction();
		})
		.start();
}
```
