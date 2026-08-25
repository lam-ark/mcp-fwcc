---
id: "cc_slot_module:SymbolPaytableViewer:methods:hideSymbolInfo"
title: "SymbolPaytableViewer.hideSymbolInfo Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "hideSymbolInfo"]
---

# 📖 `SymbolPaytableViewer.hideSymbolInfo()`

---

## 1. Method Overview & Signature

```typescript
public hideSymbolInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideSymbolInfo(): void {
	this.bgNode && (this.bgNode.active = false);
	this.topBlock && (this.topBlock.active = false);
	this.symbolPayoutViewer.node.active = false;
	this.symbolPayoutViewer.hideSymbolInfo();
}
```
