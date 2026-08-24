---
id: "cc_slot_module:SlotTablePaylineModule:method:init"
title: "SlotTablePaylineModule.init Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "init"]
---

# 🚀 `SlotTablePaylineModule.init(): void`

---

## 1. Method Signature

```typescript
protected init(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `onLoadExtend()`. Sets up `PaylineUtils`, creates `payLineEmitter`, discovers child components, and distributes dependencies.

---

## 3. Algorithmic Steps

1. Validates that `this.moduleEvent` is present; logs error if missing.
2. Injects `PaylineUtils.setConfig(this.paylineConfig)`.
3. Instantiates `this.payLineEmitter = new EventTarget()`.
4. If `paylineComponents` is empty, discovers them via `this.getComponentsInChildren(BasePaylineComponent)`.
5. Appends `this.paylineSchedule` into `this.paylineComponents`.
6. Loops through all components and invokes `component.init({ config, payLineEmitter, moduleEvent, eventManager })`.

---

## 4. Full Source Code

```typescript
protected init(): void {
    if (!this.moduleEvent) {
        error("[SlotTablePaylineModule] moduleEvent is not set");
        return;
    }

    PaylineUtils.setConfig(this.paylineConfig);

    this.payLineEmitter = new EventTarget();

    if (!this.paylineComponents || this.paylineComponents.length === 0) {
        this.paylineComponents = this.getComponentsInChildren(BasePaylineComponent);
    }
    this.paylineComponents.push(this.paylineSchedule);

    for (const component of this.paylineComponents) {
        component.init({
            config: this.paylineConfig,
            payLineEmitter: this.payLineEmitter,
            moduleEvent: this.moduleEvent,
            eventManager: this.eventManager,
        });
    }
}
```
