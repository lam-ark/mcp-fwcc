---
id: "cc_slot_module:SymbolPaytableViewer:methods:getSymbolCode"
title: "SymbolPaytableViewer.getSymbolCode Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "getSymbolCode"]
---

# 📖 `SymbolPaytableViewer.getSymbolCode()`

---

## 1. Method Overview & Signature

```typescript
public getSymbolCode(col: number, row: number): string
```

---

## 2. Complete Source Code Implementation

```typescript
getSymbolCode(col, row): string {
	const symbolCode = this.getSymbolByMatrix(col, row) || this.getSymbolByColRow(col, row);
	return symbolCode;
}
```
