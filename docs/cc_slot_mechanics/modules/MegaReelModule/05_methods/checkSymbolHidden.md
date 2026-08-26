---
id: "cc_slot_mechanics:MegaReelModule:methods:checkSymbolHidden"
title: "MegaReelModule.checkSymbolHidden Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "checkSymbolHidden"]
---

# 📖 `MegaReelModule.checkSymbolHidden()`

---

## 1. Method Signature & Overview

```typescript
checkSymbolHidden(symbol:cc.Node): boolean
```

- **Primary Role**: Implements checkSymbolHidden within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected checkSymbolHidden(symbol:cc.Node):boolean {
        const indexSymbol = SlotSymbolModule.getModuleComponent(symbol).getIndex();
        return (indexSymbol >= 0);
    }
```
