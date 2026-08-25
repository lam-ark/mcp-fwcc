---
id: "cc_slot_module:SlotBaseModule:gotchas:index"
title: "SlotBaseModule Gotchas Index"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotBaseModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_duplicate_game_mode_registration_crash`](./01_duplicate_game_mode_registration_crash.md)** | Multi-GameMode Registration Error | CRITICAL | Attempting to reuse a single module instance across multiple GameModes throws a fatal registration error. |
| **[`02_unreleased_event_and_observer_leak`](./02_unreleased_event_and_observer_leak.md)** | Memory Leaks from Unreleased Observers & Events | HIGH | Failing to call `observer.releaseAll()` and `eventManager.targetOff(this)` leaves zombie callbacks active after node destruction. |
| **[`03_premature_service_access_in_constructor`](./03_premature_service_access_in_constructor.md)** | Accessing Injected Fields in Constructor / Before onLoad | HIGH | `@inject` dependencies (`gameLogic`, `eventManager`, `observer`) are `null` until `applyInjections` runs inside `onLoad()`. |
