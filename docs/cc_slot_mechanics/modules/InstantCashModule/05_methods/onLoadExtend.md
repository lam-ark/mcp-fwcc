---
id: "cc_slot_mechanics:InstantCashModule:methods:onLoadExtend"
title: "InstantCashModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `InstantCashModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the InstantCashModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this._instantCashData = this.getComponent(InstantCashData);
		this._betData = this.gameLogic && this.gameLogic.getDataModel() && this.gameLogic.getDataModel().BetData;
		this.moduleEvent.on('SHOW_INSTANT_CASH', this.showInstantCash, this);
		this.moduleEvent.on('RESET_INSTANT_CASH', this.resetInstantCash, this);
	}
```
