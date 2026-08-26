---
id: "cc_slot_mechanics:MegaReelModule:methods:addOffsetY"
title: "MegaReelModule.addOffsetY Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "addOffsetY"]
---

# 📖 `MegaReelModule.addOffsetY()`

---

## 1. Method Signature & Overview

```typescript
addOffsetY(symbol:cc.Node, dy:number): void
```

- **Primary Role**: Implements addOffsetY within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected addOffsetY(symbol:cc.Node, dy:number):void {
        symbol.setPosition(new cc.Vec2(symbol.position.x, symbol.position.y + dy));
    }
```
