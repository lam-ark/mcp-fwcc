---
id: "cc_slot_module:SpinTimesModule:methods:index"
title: "SpinTimesModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "methods", "index"]
---

# 📚 SpinTimesModule Methods Catalog Index

---

## 1. Declared Methods Index (All 6 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Binds events, dispatches `SET_UP_SPIN_TIMES`, and initializes observers. |
| **[`setupObserver`](./setupObserver.md)** | `public` | `void` | Subscribes to `autoSpinCount` and `state` on `SpinButtonNormal`. |
| **[`updateState`](./updateState.md)** | `public` | `void` | Resets spin times badge when button state returns to `NORMAL`. |
| **[`updateSpinTimes`](./updateSpinTimes.md)** | `public` | `void` | Updates badge string with remaining rounds or `'∞'`. |
| **[`resetSpinTimes`](./resetSpinTimes.md)** | `public` | `void` | Clears label string and deactivates badge node. |
| **[`onDestroy`](./onDestroy.md)** | `protected` | `void` | Releases reactive observer subscriptions. |
