---
id: "cc_slot_module:FortuneWheelGameDirector:method:resetBonusGame"
title: "FortuneWheelGameDirector.resetBonusGame() Method Specification"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "method", "resetBonusGame", "RESET_WHEEL", "cleanup"]
---

# `FortuneWheelGameDirector.resetBonusGame(): void`

---

## 1. Method Signature
```typescript
public resetBonusGame(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called when entering or resetting the wheel mini-game, e.g., in `startBonusGame()`, `enter()`, or when round settlement finishes.
* **Purpose**: Resets the visual wheel rotation, stops countdown, and restores initial angle state.

---

## 3. Detailed Algorithmic Execution Logic
1. **Invokes Base Reset**: Calls `super.resetBonusGame()` to reset base properties (`openedBoxes`, `selectedBox`, `isAutoOpen`, unblocking UI).
2. **Emits Wheel Reset Event**: Calls `this.moduleEvent.emit("RESET_WHEEL")` to notify `FortuneWheelModule` to restore default rotation and clear active tweens.

---

## 4. Caller & Callee Relationship
```mermaid
graph TD
    Enter[enter / startBonusGame] --> resetBonusGame[FortuneWheelGameDirector.resetBonusGame]
    resetBonusGame --> superReset[BonusGameDirectorModule.resetBonusGame]
    resetBonusGame --> moduleEvent[moduleEvent.emit RESET_WHEEL]
    moduleEvent --> WheelModule[FortuneWheelModule Reset Angle & State]
```

---

## 5. Un-truncated Source Code Implementation
```typescript
resetBonusGame(): void {
	super.resetBonusGame();
	this.moduleEvent.emit("RESET_WHEEL");
}
```
