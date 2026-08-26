---
id: "cc_slot_mechanics:TransformSymbolData:methods:getMatrix0"
title: "TransformSymbolData.getMatrix0 Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "methods", "getMatrix0"]
---

# 📖 `TransformSymbolData.getMatrix0()`

---

## 1. Method Signature & Overview

```typescript
getMatrix0(): string[]
```

- **Primary Role**: Implements getMatrix0 within the TransformSymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getMatrix0(): string[] {
		return Array.from(this["matrix0"] || []);
	}
```
