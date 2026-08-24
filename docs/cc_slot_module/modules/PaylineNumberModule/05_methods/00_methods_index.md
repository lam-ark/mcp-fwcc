---
id: "cc_slot_module:PaylineNumberModule:methods:index"
title: "PaylineNumberModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "index"]
---

# 📚 PaylineNumberModule Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Scans `container` hierarchy to build `mapNumberToItem`. |
| **[`registerPaylineEvents`](./registerPaylineEvents.md)** | `protected` | `void` | Subscribes to `payLineEmitter` event targets. |
| **[`setupPaylines`](./setupPaylines.md)** | `protected` | `void` | Ingests `payLines` payload. |
| **[`blinkAllPayLines`](./blinkAllPayLines.md)** | `protected` | `void` | Lights up all winning line numbers concurrently. |
| **[`hideAll`](./hideAll.md)** | `protected` | `void` | Dims/hides all number items. |
| **[`showPayLine`](./showPayLine.md)** | `protected` | `void` | Isolates and lights up a single payline number. |
| **[`showNumber`](./showNumber.md)** | `protected` | `void` | Calls `item.show()` on mapped items for `paylineID`. |
| **[`hideNumber`](./hideNumber.md)** | `protected` | `void` | Calls `item.hide()` on mapped items for `paylineID`. |
