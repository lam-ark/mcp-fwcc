---
id: "cc_slot_module:SlotReelModule:gotcha:reel_bounce_tween_interrupt_hang"
title: "Gotcha: Reel Bounce Tween Interruption Freezes Table Promise"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "gotchas", "tween_interrupt", "freeze", "stop_callback"]
---

# 🛑 Gotcha: Reel Bounce Tween Interruption Freezes Table Promise

---

## 1. Symptom & Technical Defect
When the player spam-clicks Fast Stop or switches mode during reel deceleration, the reel stops visually, but the game freezes and never advances to the payline blink phase.

---

## 2. Root Cause
In `playStopAnimation()`:
```typescript
this.tween = tween(this.node)
    .by(spinSpeed, { position: positionStep1 })
    .by(spinSpeed, { position: positionStep2 })
    .call(() => {
        this.reelStopCB && this.reelStopCB(this.reelIndex); // ⚠️ Only called if tween finishes!
    })
    .start();
```

If an external caller calls `this.tween.stop()`, the `.call()` step is cancelled, and `this.reelStopCB` is never fired. As a result, `SlotTableModule` never reaches `reelCount === numberOfReels`, and its master `Promise` never resolves.

---

## 3. Standard Code Solution
In `resetReel()` or cleanup routines, ensure `reelStopCB` is invoked if pending:

```typescript
resetReel(): void {
    // Standard coordinate reset
    super.resetReel();
    
    // Safety callback dispatch
    if (this.reelStopCB) {
        const cb = this.reelStopCB;
        this.reelStopCB = null;
        cb(this.reelIndex);
    }
}
```
