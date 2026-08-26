---
id: "cc_slot_mechanics:TransformSymbolModule:methods:onTransformSymbol"
title: "TransformSymbolModule.onTransformSymbol Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "methods", "onTransformSymbol"]
---

# 📖 `TransformSymbolModule.onTransformSymbol()`

---

## 1. Method Signature & Overview

```typescript
onTransformSymbol(): Promise<void>
```

- **Primary Role**: Implements onTransformSymbol within the TransformSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onTransformSymbol(): Promise<void> {
		const transformData = this.data.getTransformData();

		if (transformData.length === 0) {
			return Promise.resolve();
		}

		for (const data of transformData) {
			const symbol = this.symbolManager.getSymbolByIndex(data.symbolIndex, SymbolOwnerType.TRANSFORM_SYMBOL);
			if (!symbol) {
				continue;
			}
			this.createVFXTransform(symbol);

			const cmp = symbol.getComponent(TransformSymbolItem);
			if (cmp) {
				cmp.transform(data.symbolCode)
			}

			this.scheduleOnce(() => {
				symbol.emit("TRANSFORM_TO_SYMBOL", data.symbolCode);
			}, this.config.DELAY_CHANGE_SYMBOL);
		}

		return new Promise((resolve) => {
			this.scheduleOnce(() => {
				resolve();
			}, this.config.TRANSFORM_DURATION);
		});
	}
```
