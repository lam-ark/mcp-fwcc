---
id: "cc_slot_module:WinAmountTooltipModule:methods:showWinAmount"
title: "WinAmountTooltipModule.showWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "showWinAmount"]
---

# 📖 `WinAmountTooltipModule.showWinAmount()`

---

## 1. Method Overview & Signature

```typescript
public showWinAmount({ winAmount, time, winLevel }: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
showWinAmount({ winAmount, time, winLevel }: any): void {
	this.stopAllTweens();
	this.hideText();

	this._currentType = TOOL_TIP_TYPE.WIN_AMOUNT;
	this.labelWinAmount.node.active = true;
	this.showWinText(false);
	this.updateWinAmount({ winAmount, time, winLevel });
}
```
