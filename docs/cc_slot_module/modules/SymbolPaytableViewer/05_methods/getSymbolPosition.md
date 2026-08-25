---
id: "cc_slot_module:SymbolPaytableViewer:methods:getSymbolPosition"
title: "SymbolPaytableViewer.getSymbolPosition Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "getSymbolPosition"]
---

# 📖 `SymbolPaytableViewer.getSymbolPosition()`

---

## 1. Method Overview & Signature

```typescript
public getSymbolPosition(col: number, row: number): cc.Vec2
```

---

## 2. Complete Source Code Implementation

```typescript
getSymbolPosition(col, row): cc.Vec2 {
	const { TABLE_FORMAT, SYMBOL_WIDTH, SYMBOL_HEIGHT } = this._config;
	const startX = -(TABLE_FORMAT.length / 2 - 0.5) * SYMBOL_WIDTH;
	const x = startX + SYMBOL_WIDTH * col;
	const y = (TABLE_FORMAT[col] / 2 - row - 0.5) * SYMBOL_HEIGHT;
	return v2(x, y);
}
```
