---
id: "cc_slot_module:BetSelectionPanel:methods:onScrollToBetId"
title: "BetSelectionPanel.onScrollToBetId Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "onScrollToBetId", "tween", "synchronization"]
---

# 📖 `BetSelectionPanel.onScrollToBetId()`

---

## 1. Method Overview & Signature

Routes and executes animated dual-wheel scrolling synchronization between Denomination and Total Bet scroll views with tween locking.

```typescript
public onScrollToBetId(isDenom: boolean, offsetY: number, isForce?: boolean): void
```

---

## 2. Trigger Source & Execution Context

- **Caller**: Called by `scrollItemClick(betId, isDenom)` on direct row tap, or by `onScrollViewEnd()` after inertia release.
- **Role**: Coordinates primary wheel instant response and secondary wheel follower animation.

---

## 3. Algorithmic Breakdown & Concurrency Guards

1. **Lock Active Scrolling**: Sets `this.isScrolling = true` to prevent race conditions from concurrent touch events.
2. **Primary Wheel Action**: Scrolls the active touched wheel (`firstScrollView`) to target `new Vec2(0, offsetY)` over `this.scrollTime` (0.15s).
3. **Tween Chaining**: Stops existing `_tweenScrollingDenom` or `_tweenScrollingTotal` tweens to prevent stutter.
4. **Secondary Wheel Follower**: After an optional `delay(isForce ? 0 : this.scrollTime)`, animates `secondScrollView` to the matching offset.
5. **Settlement Hook**: When both wheels finish scrolling, calls `this.setHighlight()` to illuminate the gold selection frame and resets `this.isScrolling = false`.

---

## 4. Complete Source Code Implementation

```typescript
onScrollToBetId(isDenom: boolean, offsetY: number, isForce = false): void {
    if (isDenom) {
        this.onScrollToBetIdDenom(isDenom, offsetY, isForce);
    } else {
        this.onScrollToBetIdTotal(isDenom, offsetY, isForce);
    }
}

onScrollToBetIdDenom(isDenom: boolean, offsetY = 0, isForce = false): void {
    this.isScrolling = true;
    let firstScrollView: cc.ScrollView = isDenom ? this.scrollViewDenom : this.scrollViewTotal;
    let secondScrollView: cc.ScrollView = isDenom ? this.scrollViewTotal : this.scrollViewDenom;
    firstScrollView.scrollToOffset(new Vec2(0, offsetY), this.scrollTime);
    this._tweenScrollingDenom && this._tweenScrollingDenom.stop();
    this._tweenScrollingDenom = tween(this)
        .delay(isForce ? 0 : this.scrollTime)
        .call(() => {
            secondScrollView.scrollToOffset(new Vec2(0, offsetY), this.scrollTime);
        })
        .delay(this.scrollTime)
        .call(() => {
            this.setHighlight();
            this.isScrolling = false;
            this._tweenScrollingDenom = null;
        })
        .start();
}

onScrollToBetIdTotal(isDenom: boolean, offsetY = 0, isForce = false): void {
    this.isScrolling = true;
    let firstScrollView: cc.ScrollView = isDenom ? this.scrollViewDenom : this.scrollViewTotal;
    let secondScrollView: cc.ScrollView = isDenom ? this.scrollViewTotal : this.scrollViewDenom;
    firstScrollView.scrollToOffset(new Vec2(0, offsetY), this.scrollTime);
    this._tweenScrollingTotal && this._tweenScrollingTotal.stop();
    this._tweenScrollingTotal = tween(this)
        .delay(isForce ? 0 : this.scrollTime)
        .call(() => {
            secondScrollView.scrollToOffset(new Vec2(0, offsetY), this.scrollTime);
        })
        .delay(this.scrollTime)
        .call(() => {
            this.setHighlight();
            this.isScrolling = false;
            this._tweenScrollingTotal = null;
        })
        .start();
}
```
