---
id: "cc_slot_mechanics:MegawayData:methods:onDataUpdate"
title: "MegawayData.onDataUpdate Method"
category: "cc_slot_mechanics"
tags: ["MegawayData", "megaway_data", "cc_slot_mechanics", "methods", "onDataUpdate"]
---

# 📖 `MegawayData.onDataUpdate()`

---

## 1. Method Signature & Overview

```typescript
onDataUpdate(key: string, value: any): void
```

- **Primary Role**: Implements onDataUpdate within the MegawayData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onDataUpdate(key: string, value: any): void {
		this[key] = value;
		this._tableFormat = value.map(item => item.split("").length);
	}
```
