---
id: "cc_slot_module:WinAmountTooltipModule:methods:onJoinGameSuccess"
title: "WinAmountTooltipModule.onJoinGameSuccess Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "onJoinGameSuccess"]
---

# 📖 `WinAmountTooltipModule.onJoinGameSuccess()`

---

## 1. Method Overview & Signature

```typescript
public onJoinGameSuccess(data: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
onJoinGameSuccess(data: any): void {
	const joinGameData = (data && data.joinGameData) || {};
	if (joinGameData.isResume && joinGameData.winAmount) {
		this.showWinAmount({ winAmount: joinGameData.winAmount, time: 0 });
	} else {
		this.showText();
	}
}
```
