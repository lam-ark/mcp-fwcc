---
id: "cc_slot_mechanics:NudgeReelModule:methods:changeBufferSymbol"
title: "NudgeReelModule.changeBufferSymbol Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "changeBufferSymbol"]
---

# 📖 `NudgeReelModule.changeBufferSymbol()`

---

## 1. Method Signature & Overview

```typescript
changeBufferSymbol(index: number): cc.Node
```

- **Primary Role**: Implements changeBufferSymbol within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected changeBufferSymbol(index: number): cc.Node {
		const symbol = this.listSymbols[index];
		SlotSymbolModule.getModuleComponent(symbol).changeToSymbol(SYMBOL_NUDGE);
		return symbol;
	}
```
