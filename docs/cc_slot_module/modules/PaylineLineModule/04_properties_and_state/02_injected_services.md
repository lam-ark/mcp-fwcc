---
id: "cc_slot_module:PaylineLineModule:properties_and_state:injected_services"
title: "PaylineLineModule Injected Context & Services"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 PaylineLineModule Injected Context & Services

---

## 1. Context Injected via `init()`

Inherited from `BasePaylineComponent`:

```typescript
public init(context: {
    payLineEmitter: cc.EventTarget;
    config: any;
    moduleEvent: cc.EventTarget;
    eventManager: any;
}): void {
    this.payLineEmitter = context.payLineEmitter;
    this.config = context.config;
    this.moduleEvent = context.moduleEvent;
    this.eventManager = context.eventManager;
    this.registerPaylineEvents();
}
```
