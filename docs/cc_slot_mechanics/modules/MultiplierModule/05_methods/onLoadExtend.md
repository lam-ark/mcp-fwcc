---
id: "cc_slot_mechanics:MultiplierModule:methods:onLoadExtend"
title: "MultiplierModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `MultiplierModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the MultiplierModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this._multiplierData = this.getComponent(MultiplierData);
	}
```
