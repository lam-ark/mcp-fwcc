---
id: "cc_slot_mechanics:HorizontalCascadeData:methods:getTraceWay"
title: "HorizontalCascadeData.getTraceWay Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeData", "horizontal_cascade_data", "cc_slot_mechanics", "methods", "getTraceWay"]
---

# 📖 `HorizontalCascadeData.getTraceWay()`

---

## 1. Method Signature & Overview

```typescript
getTraceWay(): number[]
```

- **Primary Role**: Implements getTraceWay within the HorizontalCascadeData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getTraceWay(): number[] {
		return this["traceWay"] ? this["traceWay"].sort(function (a, b) {
			return a - b; 
		}) : [];
	}
```
