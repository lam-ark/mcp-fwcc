---
id: "cc_slot_mechanics:TransformSymbolItem:methods:playAnimationTransform"
title: "TransformSymbolItem.playAnimationTransform Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolItem", "transform_symbol_item", "cc_slot_mechanics", "methods", "playAnimationTransform"]
---

# 📖 `TransformSymbolItem.playAnimationTransform()`

---

## 1. Method Signature & Overview

```typescript
playAnimationTransform(_symbolCode: string): void
```

- **Primary Role**: Implements playAnimationTransform within the TransformSymbolItem mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected playAnimationTransform(_symbolCode: string): void {
		//TODO: Play animation transform symbol, this function will be override by each game
		if (this.animationName) {
			this.node.emit("PLAY_ANIMATION", this.animationName);
		}
	}
```
