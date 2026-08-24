---
id: "cc_slot_module:SpinTimesModule:methods:onLoadExtend"
title: "SpinTimesModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `SpinTimesModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Binds events, registers node with Director via `SET_UP_SPIN_TIMES`, and initializes observers for base game.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.node.on('UPDATE_SPINTIMES', this.updateSpinTimes, this);
    this.node.on('RESET_SPINTIMES', this.resetSpinTimes, this);
    this.node.active = false;

    this.eventManager.emit(GameUIEvents.SPIN_TIMES.SET_UP_SPIN_TIMES, { gameMode: this.gameMode, node: this.node });

    if (this.gameMode === GAME_MODE_ENUM.NORMAL_GAME) {
        this.setupObserver();
    }
}
```
