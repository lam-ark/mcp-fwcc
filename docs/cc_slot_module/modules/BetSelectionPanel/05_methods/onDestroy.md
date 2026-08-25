---
id: "cc_slot_module:BetSelectionPanel:methods:onDestroy"
title: "BetSelectionPanel.onDestroy Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "onDestroy", "cleanup", "memory_leak"]
---

# 📖 `BetSelectionPanel.onDestroy()`

---

## 1. Method Overview & Signature

Performs essential teardown by stopping active scrolling tweens and releasing all observer bindings on `BetData` and `UIManagerData`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
	this._tweenScrollingDenom && this._tweenScrollingDenom.stop();
	this._tweenScrollingTotal && this._tweenScrollingTotal.stop();
	this.observer.releaseAll(this.betModel, this);
	this.observer.releaseAll(this.uiManagerData, this);
}
```
