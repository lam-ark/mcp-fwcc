---
id: "cc_slot_module:SymbolPaytableViewer:methods:getSymbolByColRow"
title: "SymbolPaytableViewer.getSymbolByColRow Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "getSymbolByColRow"]
---

# 📖 `SymbolPaytableViewer.getSymbolByColRow()`

---

## 1. Method Overview & Signature

```typescript
public getSymbolByColRow(col: number, row: number): string | null
```

---

## 2. Complete Source Code Implementation

```typescript
getSymbolByColRow(col, row): string | null {
	if (!this._table) {
		return null;
	}
	const symbol = this._table.getSymbolByColRow(col, row);
	return symbol ? SlotSymbolModule.getModuleComponent(symbol).symbolCode : null;
}
```
