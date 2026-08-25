---
id: "cc_slot_module:WinAmountTooltipModule:methods:hideWinAmount"
title: "WinAmountTooltipModule.hideWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "hideWinAmount"]
---

# 📖 `WinAmountTooltipModule.hideWinAmount()`

---

## 1. Method Overview & Signature

```typescript
public hideWinAmount(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideWinAmount(): void {
	this.clearWinAmount();
	this.winTextSprite.node.active = false;
	this.labelWinAmount.node.active = false;
}
```
