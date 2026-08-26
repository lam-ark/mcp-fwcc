---
id: "cc_slot_mechanics:TumblingReelModule:methods:changeToBlurSymbol"
title: "TumblingReelModule.changeToBlurSymbol Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "changeToBlurSymbol"]
---

# 📖 `TumblingReelModule.changeToBlurSymbol()`

---

## 1. Method Signature & Overview

```typescript
changeToBlurSymbol(symbol: cc.Node): void
```

- **Primary Role**: Implements changeToBlurSymbol within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected changeToBlurSymbol(symbol: cc.Node): void {
        SlotSymbolModule.getModuleComponent(symbol).changeToBlurSymbol();
    }
```
