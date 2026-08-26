---
id: "cc_slot_mechanics:TransformSymbolModule:methods:onLoadExtend"
title: "TransformSymbolModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `TransformSymbolModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the TransformSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this.data = this.getComponent(TransformSymbolData);
		this.config = this.getComponent(TransformSymbolConfig);
		this.registerGameEvents();
	}
```
