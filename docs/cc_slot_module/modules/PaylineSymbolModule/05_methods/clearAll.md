---
id: "cc_slot_module:PaylineSymbolModule:method:clearAll"
title: "PaylineSymbolModule.clearAll Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "clearAll"]
---

# 🚀 `PaylineSymbolModule.clearAll(): void`

---

## 1. Method Signature

```typescript
protected clearAll(): void
```

---

## 2. Full Source Code

```typescript
protected clearAll(): void {
    const symbols = eno.ArrayUtils.flatOnce(this.mapTableSymbols).filter(Boolean);
    for (const symbol of symbols) {
        symbol.emit("ENABLE_HIGHLIGHT");
        this.factory.returnSymbol(symbol);
    }
    this.mapTableSymbols = [];
}
```
