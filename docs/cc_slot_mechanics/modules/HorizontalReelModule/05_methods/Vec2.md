---
id: "cc_slot_mechanics:HorizontalReelModule:methods:Vec2"
title: "HorizontalReelModule.Vec2 Method Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "Vec2"]
---

# 📖 `HorizontalReelModule.Vec2()`

---

## 1. Method Signature

```typescript
Vec2(-this.SYMBOL_WIDTH, 0); this.tween = tween(this.node) .by(this.currentMode.speed, { position: newPosition }) .call(() => { this.tween = null; this.recycleSymbol(); this.spinAction(); }) .start(); } updateReelResult(symbols: string[]): void
```

- **Scope**: `HorizontalReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
Vec2(-this.SYMBOL_WIDTH, 0);
		this.tween = tween(this.node)
			.by(this.currentMode.speed, { position: newPosition })
			.call(() => {
				this.tween = null;
				this.recycleSymbol();
				this.spinAction();
			})
			.start();
	}

	updateReelResult(symbols: string[]): void {
		this.data = [...symbols];
		for (let index = 0; index < this.config.BUFFER_BOT; index++) {
			this.data.unshift(this.getRandomSymbolWithException().symbolCode);
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
