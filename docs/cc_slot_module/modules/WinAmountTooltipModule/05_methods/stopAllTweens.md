---
id: "cc_slot_module:WinAmountTooltipModule:methods:stopAllTweens"
title: "WinAmountTooltipModule.stopAllTweens Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "stopAllTweens"]
---

# 📖 `WinAmountTooltipModule.stopAllTweens()`

---

## 1. Method Overview & Signature

```typescript
public stopAllTweens(): void
```

---

## 2. Complete Source Code Implementation

```typescript
stopAllTweens(): void {
	this._currentTween && this._currentTween.stop();
	this._currentTween = null;
	this._tweenFade && this._tweenFade.stop();
	this._tweenFade = null;
}
```
