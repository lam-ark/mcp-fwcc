---
id: "cc_slot_module:WinAmountTooltipModule:methods:showTotalWinAmount"
title: "WinAmountTooltipModule.showTotalWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "showTotalWinAmount"]
---

# 📖 `WinAmountTooltipModule.showTotalWinAmount()`

---

## 1. Method Overview & Signature

```typescript
public showTotalWinAmount({ winAmount, time, winLevel }: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
showTotalWinAmount({ winAmount, time, winLevel }: any): void {
	this.stopAllTweens();
	this.hideText();

	this._currentType = TOOL_TIP_TYPE.WIN_AMOUNT;
	this.labelWinAmount.node.active = true;
	this.showWinText(true);
	this.updateWinAmount({ winAmount, time, winLevel });
}
```
