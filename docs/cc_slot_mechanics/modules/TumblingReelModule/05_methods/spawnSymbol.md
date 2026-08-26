---
id: "cc_slot_mechanics:TumblingReelModule:methods:spawnSymbol"
title: "TumblingReelModule.spawnSymbol Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "spawnSymbol"]
---

# 📖 `TumblingReelModule.spawnSymbol()`

---

## 1. Method Signature & Overview

```typescript
spawnSymbol(code: string, size: cc.Vec2): cc.Node
```

- **Primary Role**: Implements spawnSymbol within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected spawnSymbol(code: string, size: cc.Vec2): cc.Node {
        const symbol = super.spawnSymbol(code, size);
        const position = symbol.position;
        symbol.setPosition(position.x, position.y + this.config.BUFFER_TOP_Y + this.SYMBOL_HEIGHT);
		return symbol;
	}
```
