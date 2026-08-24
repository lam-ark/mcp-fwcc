---
id: "cc_slot_module:PaylineSymbolModule:method:showJackpotLine"
title: "PaylineSymbolModule.showJackpotLine Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "showJackpotLine"]
---

# 🚀 `PaylineSymbolModule.showJackpotLine(payLine, duration): void`

---

## 1. Method Signature

```typescript
protected showJackpotLine(payLine: PayLineInfo | PayWayInfo, duration?: number): void
```

---

## 2. Full Source Code

```typescript
protected showJackpotLine(payLine: PayLineInfo | PayWayInfo, duration?: number): void {
    const symbolSet: cc.Node[] = this.getWinSymbolsInPayLine(payLine);
    this.showListWinSymbols(symbolSet, duration);
}
```
