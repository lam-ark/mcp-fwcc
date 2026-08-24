---
id: "cc_slot_module:SlotButtonModule:gotchas:unreleased_system_event_listener_leak"
title: "Gotcha: Memory Leak from Retained Keyboard Listeners"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "gotchas", "memory_leak"]
---

# ⚠️ Gotcha: Memory Leak from Retained Keyboard Listeners

---

## 1. Problem Description

`cc.systemEvent` is a global singleton. If `SlotButtonModule` binds `systemEvent.on(KEY_UP, ...)` in `onEnable()` but neglects `systemEvent.off(KEY_UP, ...)` in `onDisable()`, the destroyed button component remains referenced by the system event dispatcher, leading to ghost callbacks and memory leaks.

---

## 2. Prevention

Always balance listeners in `onEnable` and `onDisable`:
```typescript
onEnable(): void {
    this.addEventListeners();
}
onDisable(): void {
    this.removeEventListeners();
}
```
