---
id: "cc_slot_module:FortuneWheelGameDirector:method:_showWheelResult"
title: "FortuneWheelGameDirector._showWheelResult() Method Specification"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "method", "_showWheelResult", "STOP_SPIN_WHEEL", "bonusValue"]
---

# `FortuneWheelGameDirector._showWheelResult(bonusValue: number): Promise<void>`

---

## 1. Method Signature
```typescript
public _showWheelResult(bonusValue: number): Promise<void>
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `FortuneWheelWriterModule` / `GameModeWriterModule` script action or test controller `FortuneWheelGameTest` when the backend returns the bonus game result payload containing the target wheel slice / multiplier.
* **Execution Flow**: Step in the wheel settlement command pipeline.

---

## 3. Detailed Algorithmic Execution Logic
1. **Passes Prize Value to Sub-module**: Calls `this.moduleEvent.emit("STOP_SPIN_WHEEL", bonusValue)`.
2. **Returns Promise**: Propagates the `Promise<void>` returned by `moduleEvent.emit` so the caller (such as `ScriptExecutor`) can await the complete deceleration and landing animation of the wheel.

---

## 4. Caller & Callee Relationship
```mermaid
graph TD
    Writer[Bonus/Wheel Writer Script] --> _showWheelResult[FortuneWheelGameDirector._showWheelResult]
    _showWheelResult --> WheelModule[moduleEvent.emit STOP_SPIN_WHEEL, bonusValue]
    WheelModule --> Resolve[Promise Resolved after Wheel Stop Animation]
```

---

## 5. Un-truncated Source Code Implementation
```typescript
_showWheelResult(bonusValue: number): Promise<void> {
	return this.moduleEvent.emit("STOP_SPIN_WHEEL", bonusValue);
}
```
