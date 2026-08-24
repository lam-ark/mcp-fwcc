---
id: "cc_slot_module:BaseCutscene:methods:index"
title: "BaseCutscene Methods Catalog Index"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "methods", "index"]
---

# 📚 BaseCutscene Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`init`](./init.md)** | `public` | `void` | Binds local node events (`PLAY`, `HIDE`, `INIT`, `SKIP`) and deactivates node. |
| **[`play`](./play.md)** | `public` | `void` | Triggers full-display notification, activates node, and calls `enter()`. |
| **[`show`](./show.md)** | `public` | `void` | Sets `this.node.active = true`. |
| **[`enter`](./enter.md)** | `public` | `void` | Abstract hook overridden by subclasses for animations. |
| **[`exit`](./exit.md)** | `public` | `void` | Fires callback, emits close events, and deactivates node. |
| **[`fireCutsceneClose`](./fireCutsceneClose.md)**| `public` | `void` | Emits `HIDE_FULL_DISPLAY_CUTSCENE` and `ON_CUTSCENE_CLOSE`. |
| **[`skip`](./skip.md)** | `public` | `void` | Virtual hook overridden by subclasses for touch-to-skip. |
