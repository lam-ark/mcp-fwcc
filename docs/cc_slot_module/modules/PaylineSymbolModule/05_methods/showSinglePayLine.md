---
id: "cc_slot_module:PaylineSymbolModule:method:showSinglePayLine"
title: "PaylineSymbolModule.showSinglePayLine Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "showSinglePayLine"]
---

# 🚀 `PaylineSymbolModule.showSinglePayLine(payLine, duration): void`

---

## 1. Method Signature

```typescript
protected showSinglePayLine(payLine: PayLineInfo | PayWayInfo, duration?: number): void
```

---

## 2. Full Source Code

```typescript
protected showSinglePayLine(payLine: PayLineInfo | PayWayInfo, duration?: number): void {
    const symbolSet: cc.Node[] = this.getWinSymbolsInPayLine(payLine);
    this.showListWinSymbols(symbolSet, duration);
}
```
