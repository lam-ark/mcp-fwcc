---
id: "cc_slot_module:PaylineSymbolModule:method:blinkAllPayLines"
title: "PaylineSymbolModule.blinkAllPayLines Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "blinkAllPayLines"]
---

# 🚀 `PaylineSymbolModule.blinkAllPayLines(data): void`

---

## 1. Method Signature

```typescript
protected blinkAllPayLines(data: { blinkDuration: number }): void
```

---

## 2. Full Source Code

```typescript
protected blinkAllPayLines(data: { blinkDuration: number }): void {
    const symbolSet: cc.Node[] = this.getAllWinSymbols();
    this.showListWinSymbols(symbolSet, data.blinkDuration);
}
```
