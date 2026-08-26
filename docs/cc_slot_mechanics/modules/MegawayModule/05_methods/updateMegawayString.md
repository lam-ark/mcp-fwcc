---
id: "cc_slot_mechanics:MegawayModule:methods:updateMegawayString"
title: "MegawayModule.updateMegawayString Method"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "methods", "updateMegawayString"]
---

# 📖 `MegawayModule.updateMegawayString()`

---

## 1. Method Signature & Overview

```typescript
updateMegawayString(totalWay: number): void
```

- **Primary Role**: Implements updateMegawayString within the MegawayModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
updateMegawayString(totalWay: number): void {
		this.lbMegaway.string = totalWay ? this.moneyFormatter.formatCoin(totalWay) : this.defaultString;
	}
```
