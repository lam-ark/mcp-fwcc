---
id: "cc_slot_mechanics:TransformSymbolModule:methods:registerGameEvents"
title: "TransformSymbolModule.registerGameEvents Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "methods", "registerGameEvents"]
---

# 📖 `TransformSymbolModule.registerGameEvents()`

---

## 1. Method Signature & Overview

```typescript
registerGameEvents(): void
```

- **Primary Role**: Implements registerGameEvents within the TransformSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
registerGameEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.on('SHOW_TRANSFORM_SYMBOL', this.onTransformSymbol, this);
			this.moduleEvent.on('TABLE_START_SPIN', this.onStartSpin, this);
		}
	}
```
