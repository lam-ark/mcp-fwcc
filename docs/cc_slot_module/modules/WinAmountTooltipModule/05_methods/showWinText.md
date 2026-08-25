---
id: "cc_slot_module:WinAmountTooltipModule:methods:showWinText"
title: "WinAmountTooltipModule.showWinText Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "showWinText"]
---

# 📖 `WinAmountTooltipModule.showWinText()`

---

## 1. Method Overview & Signature

```typescript
public showWinText(isTotalWin: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showWinText(isTotalWin: boolean): void {
	this.winTextSprite.node.active = true;
	this.winTextSprite.spriteFrame = isTotalWin ? this.totalWinTextSpriteFrame : this.winTextSpriteFrame;
}
```
