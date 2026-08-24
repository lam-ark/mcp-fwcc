---
id: "cc_slot_module:SlotButtonModule:methods:index"
title: "SlotButtonModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "index"]
---

# 📚 SlotButtonModule Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Registers button node with Director and triggers `setup()`. |
| **[`setup`](./setup.md)** | `public` | `void` | Resolves touch node reference and initializes data model observer. |
| **[`onEnable`](./onEnable.md)** | `public` | `void` | Binds keyboard event listeners. |
| **[`onDisable`](./onDisable.md)** | `public` | `void` | Removes keyboard event listeners. |
| **[`setupObserver`](./setupObserver.md)** | `public` | `void` | Virtual hook for observing reactive state streams. |
| **[`addEventListeners`](./addEventListeners.md)** | `public` | `void` | Binds `SystemEvent.EventType.KEY_UP` handler. |
| **[`removeEventListeners`](./removeEventListeners.md)**| `public` | `void` | Unbinds `SystemEvent.EventType.KEY_UP` handler. |
| **[`onKeyUp`](./onKeyUp.md)** | `public` | `void` | Dispatches `TRIGGER_SPACE_BUTTON` when Spacebar is tapped. |
| **[`onDestroy`](./onDestroy.md)** | `public` | `void` | Cleans up observer subscriptions. |
