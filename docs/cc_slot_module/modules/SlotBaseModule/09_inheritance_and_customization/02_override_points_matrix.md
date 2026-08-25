---
id: "cc_slot_module:SlotBaseModule:inheritance:override_points_matrix"
title: "SlotBaseModule Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 SlotBaseModule Override Points Matrix

---

## 1. Extension Matrix

| Method | Scope | Super Required | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoad` | `public` | DO NOT OVERRIDE | Core DI container bootstrap. |
| `onLoadExtend` | `public` | No | Subclass initialization hook after DI is ready. |
| `registerEvents` | `protected` | No | Hook to register event and module listeners. |
| `unregisterEvents` | `protected` | No | Hook to unregister event listeners. |
| `resetAllEffectAndTasks` | `protected` | No | Spin reset trigger handler. |
| `setupModule` | `public` | Rare (Call super) | Mode registration and scoped bus injection. |
