---
id: "cc_slot_module:FortuneWheelGameDirector:method:onExtendedLoad"
title: "FortuneWheelGameDirector.onExtendedLoad() Method Specification"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "method", "onExtendedLoad", "lifecycle", "events"]
---

# `FortuneWheelGameDirector.onExtendedLoad(): void`

---

## 1. Method Signature
```typescript
public onExtendedLoad(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotBaseModule.onLoad()` during node initialization lifecycle after dependency injection is complete.
* **Timing**: Executed once when `FortuneWheelGameDirector` component awakens in the Cocos scene tree.

---

## 3. Detailed Algorithmic Execution Logic
1. **Invokes Base Class Initialization**: Calls `super.onExtendedLoad()` on `BonusGameDirectorModule` to bind `CLICK_ITEM` and base bonus listeners.
2. **Registers Scoped Event Listener**: Registers listener on `this.moduleEvent` for topic `"ON_SPIN_WHEEL"` pointing to `this.onSpinWheel()`, bound to `this` execution context.

---

## 4. Caller & Callee Relationship
```mermaid
graph TD
    SlotBaseModule[SlotBaseModule.onLoad] --> onExtendedLoad[FortuneWheelGameDirector.onExtendedLoad]
    onExtendedLoad --> superExtend[BonusGameDirectorModule.onExtendedLoad]
    onExtendedLoad --> moduleEventOn[moduleEvent.on ON_SPIN_WHEEL -> onSpinWheel]
```

---

## 5. Un-truncated Source Code Implementation
```typescript
onExtendedLoad(): void {
	super.onExtendedLoad();
	this.moduleEvent.on("ON_SPIN_WHEEL", this.onSpinWheel, this);
}
```
