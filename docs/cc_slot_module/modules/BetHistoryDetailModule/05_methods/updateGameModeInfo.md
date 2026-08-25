---
id: "cc_slot_module:BetHistoryDetailModule:methods:updateGameModeInfo"
title: "BetHistoryDetailModule.updateGameModeInfo Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "updateGameModeInfo"]
---

# 📖 `BetHistoryDetailModule.updateGameModeInfo()`

---

## 1. Method Overview & Signature

Formats mode win amount and jackpot bonus text.

```typescript
public updateGameModeInfo(data: any): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called in onRenderDataView for active game mode steps.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
updateGameModeInfo(data: any): void {
	const { latestWinJackpotInfo, winAmount } = data.customData;
	const currentData = this.getCurrentData();
	if (!currentData) {
		cc.warn('currentData is null');
		return;
	}

	const { name: modeName = '' } = currentData;
	let text = `${modeName}`;

	if (winAmount || latestWinJackpotInfo) {
		if (winAmount === 0 && !latestWinJackpotInfo) {
			return;
		}

		if (latestWinJackpotInfo) {
			const jpAmount = latestWinJackpotInfo[0] && latestWinJackpotInfo[0].jackpotAmount;
			text += " + JACKPOT: " + this.moneyFormatter.formatMoney(jpAmount + winAmount);
		} else {
			text += ": " + this.moneyFormatter.formatMoney(winAmount);
		}
	}
	this.infoLabel.string = text;
}
```
