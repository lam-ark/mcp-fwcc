---
id: "cc_slot_module:SlotPaylineSchedule:methods:setConfig"
title: "SlotPaylineSchedule.setConfig Method"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "methods", "setConfig"]
---

# 📖 `SlotPaylineSchedule.setConfig()`

---

## 1. Method Overview & Signature

Captures `TIMELINE_CONFIG` duration from configuration.

```typescript
protected setConfig(config: PaylineConfig): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected setConfig(config: PaylineConfig): void {
    super.setConfig(config);
    this.timelineConfig = config.TIMELINE_CONFIG;
}
```
