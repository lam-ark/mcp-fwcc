---
id: "cc_slot_module:PaylineLineModule:methods:index"
title: "PaylineLineModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "index"]
---

# 📚 PaylineLineModule Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`registerPaylineEvents`](./registerPaylineEvents.md)** | `protected` | `void` | Subscribes to `payLineEmitter` event channels. |
| **[`onDestroy`](./onDestroy.md)** | `protected` | `void` | Cleanup hook unregistering payline event listeners. |
| **[`setupPaylines`](./setupPaylines.md)** | `protected` | `void` | Ingests parsed `payLines` array from `PAYLINE_SET_DATA`. |
| **[`blinkAllPayLines`](./blinkAllPayLines.md)** | `protected` | `void` | Stage 1 handler displaying all winning line tracks. |
| **[`showPayLine`](./showPayLine.md)** | `protected` | `void` | Stage 2 handler isolating a single line ID. |
| **[`showLineNumber`](./showLineNumber.md)** | `protected` | `void` | Instantiates/retrieves and emits `"SHOW"` on a line instance. |
| **[`hideAll`](./hideAll.md)** | `protected` | `void` | Emits `"HIDE"` across all line nodes. |
| **[`clearAll`](./clearAll.md)** | `protected` | `void` | Emits `"RESET"` and returns active line nodes to `linePool`. |
| **[`getLine`](./getLine.md)** | `protected` | `cc.Node` | Retrieves node from pool or instantiates new `template`. |
