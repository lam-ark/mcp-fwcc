---
id: "cc_slot_module:PaylineSymbolModule:method:setupPayLines"
title: "PaylineSymbolModule.setupPayLines Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "setupPayLines"]
---

# 🚀 `PaylineSymbolModule.setupPayLines(data): void`

---

## 1. Method Signature

```typescript
protected setupPayLines(data: { matrix: string[][], payLines: PayLineInfo[] }): void
```

---

## 2. Full Source Code

```typescript
protected setupPayLines(data: { matrix: string[][], payLines: PayLineInfo[] }): void {
    if (this.paylineConfig.IS_DEBUG) {
        log("[PaylineSymbolModule] setupPaylines", data);
    }
    this.matrix = Array.from(data.matrix);
    this.payLines = Array.from(data.payLines);
}
```
