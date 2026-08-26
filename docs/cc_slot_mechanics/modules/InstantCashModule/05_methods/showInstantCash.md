---
id: "cc_slot_mechanics:InstantCashModule:methods:showInstantCash"
title: "InstantCashModule.showInstantCash Method"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "methods", "showInstantCash"]
---

# 📖 `InstantCashModule.showInstantCash()`

---

## 1. Method Signature & Overview

```typescript
showInstantCash(): void
```

- **Primary Role**: Implements showInstantCash within the InstantCashModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
showInstantCash(): void {
		const multiplier = this._instantCashData.getInstantCashMultiplier();
		const totalBet = this._betData ? this._betData.totalBet : 0;

		this.lbInstantCash.string = `${multiplier * totalBet}`;
	}
```
