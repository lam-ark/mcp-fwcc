---
id: "cc_slot_module:WinAmountTooltipModule:methods:onLoadExtend"
title: "WinAmountTooltipModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `WinAmountTooltipModule.onLoadExtend()`

---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.eventManager.on(GameUIEvents.WIN_AMOUNT_TOOLTIP.SHOW_TOOLTIP_WIN_AMOUNT, this.showWinAmount, this);
	this.eventManager.on(GameUIEvents.WIN_AMOUNT_TOOLTIP.SHOW_TOOLTIP_TOTAL_WIN_AMOUNT, this.showTotalWinAmount, this);
	this.eventManager.on(GameUIEvents.WIN_AMOUNT_TOOLTIP.SHOW_TOOLTIP_TEXT, this.showText, this);
	this.eventManager.on(GameUIEvents.WIN_AMOUNT_TOOLTIP.HIDE_TOOLTIP, this.hideTooltip, this);
	this.eventManager.on(GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS, this.onJoinGameSuccess, this);

	this.hideWinAmount();
	this.hideText();
}
```
