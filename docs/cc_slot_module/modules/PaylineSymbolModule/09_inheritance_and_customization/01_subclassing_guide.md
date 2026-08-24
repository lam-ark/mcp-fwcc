---
id: "cc_slot_module:PaylineSymbolModule:inheritance:subclassing_guide"
title: "PaylineSymbolModule Subclassing Guide"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ PaylineSymbolModule Subclassing Guide

---

## 1. Subclassing Declaration

```typescript
const { ccclass } = cc._decorator;
import { PaylineSymbolModule } from "PaylineSymbolModule";

@ccclass
export default class PaylineSymbolModule9666 extends PaylineSymbolModule {
    // Custom symbol win presentation
}
```

---

## 2. Invariant Rules

1. **Always Return Symbols on Clear**: Preserve `factory.returnSymbol()` in `clearAll()`.
2. **Synchronize Z-Index**: Always call `updateSymbolSiblingIndex()` after modifying parent hierarchies.
