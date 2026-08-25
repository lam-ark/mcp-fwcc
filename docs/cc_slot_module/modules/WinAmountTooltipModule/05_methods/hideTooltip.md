---
id: "cc_slot_module:WinAmountTooltipModule:methods:hideTooltip"
title: "WinAmountTooltipModule.hideTooltip Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "hideTooltip"]
---

# 📖 `WinAmountTooltipModule.hideTooltip()`

---

## 1. Method Overview & Signature

```typescript
public hideTooltip(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideTooltip(): void {
	this.hideWinAmount();
	this._currentType = TOOL_TIP_TYPE.IDLE;
	this.showText();
}
```
