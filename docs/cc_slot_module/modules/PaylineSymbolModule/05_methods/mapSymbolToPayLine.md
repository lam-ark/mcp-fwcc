---
id: "cc_slot_module:PaylineSymbolModule:method:mapSymbolToPayLine"
title: "PaylineSymbolModule.mapSymbolToPayLine Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "mapSymbolToPayLine"]
---

# 🚀 `PaylineSymbolModule.mapSymbolToPayLine(): void`

---

## 1. Method Signature

```typescript
protected mapSymbolToPayLine(): void
```

---

## 2. Full Source Code

```typescript
protected mapSymbolToPayLine(): void {
    if (!this.matrix) {
        return;
    }

    if (!this.mapTableSymbols) {
        this.mapTableSymbols = [];
    }

    for (let reel = 0; reel < this.matrix.length; reel++) {
        if (!this.mapTableSymbols[reel]) {
            this.mapTableSymbols[reel] = [];
        }
        for (let row = 0; row < this.matrix[reel].length; row++) {
            this.mapTableSymbols[reel][row] = this.getSymbol(reel, row);
        }
    }
}
```
