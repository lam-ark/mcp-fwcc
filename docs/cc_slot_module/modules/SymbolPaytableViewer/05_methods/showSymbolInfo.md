---
id: "cc_slot_module:SymbolPaytableViewer:methods:showSymbolInfo"
title: "SymbolPaytableViewer.showSymbolInfo Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "showSymbolInfo"]
---

# 📖 `SymbolPaytableViewer.showSymbolInfo()`

---

## 1. Method Overview & Signature

```typescript
public showSymbolInfo(symbolData: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
showSymbolInfo(symbolData: any): void {
	this.bgNode && (this.bgNode.active = true);
	this.topBlock && (this.topBlock.active = true);
	this.symbolPayoutViewer.node.active = true;
	this.symbolPayoutViewer.showSymbolInfo(symbolData);
}
```
