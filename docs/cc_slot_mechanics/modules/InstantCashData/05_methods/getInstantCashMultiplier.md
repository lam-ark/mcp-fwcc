---
id: "cc_slot_mechanics:InstantCashData:methods:getInstantCashMultiplier"
title: "InstantCashData.getInstantCashMultiplier Method"
category: "cc_slot_mechanics"
tags: ["InstantCashData", "instant_cash_data", "cc_slot_mechanics", "methods", "getInstantCashMultiplier"]
---

# 📖 `InstantCashData.getInstantCashMultiplier()`

---

## 1. Method Signature & Overview

```typescript
getInstantCashMultiplier(): number
```

- **Primary Role**: Implements getInstantCashMultiplier within the InstantCashData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getInstantCashMultiplier(): number {
		return this.instantCashMultiplier || 1;
	}
```
