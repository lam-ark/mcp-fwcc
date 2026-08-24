---
id: "cc_slot_module:PaylineSymbolModule:method:stopAllPayLines"
title: "PaylineSymbolModule.stopAllPayLines Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "stopAllPayLines"]
---

# 🚀 `PaylineSymbolModule.stopAllPayLines(): void`

---

## 1. Method Signature

```typescript
protected stopAllPayLines(): void
```

---

## 2. Full Source Code

```typescript
protected stopAllPayLines(): void {
    for (const symbol of this.symbols) {
        symbol.emit('STOP_ANIMATION');
        symbol.emit('ENABLE_HIGHLIGHT');
    }
    this.updateSymbolSiblingIndex();
}
```
