---
id: "cc_slot_mechanics:MegaReelModule:methods:hideSmallSymbol"
title: "MegaReelModule.hideSmallSymbol Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "hideSmallSymbol"]
---

# 📖 `MegaReelModule.hideSmallSymbol()`

---

## 1. Method Signature & Overview

```typescript
hideSmallSymbol(symbol:cc.Node, index:number): void
```

- **Primary Role**: Implements hideSmallSymbol within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected hideSmallSymbol(symbol:cc.Node, index:number): void {
        if (this.megaData && this.megaData.length) {
            this.megaData.forEach((data) => {
                if (data["indexes"].indexOf(index) >= 0) {
                    symbol.active = false;
                }
            });
        }
    }
```
