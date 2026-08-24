---
id: "cc_slot_module:BaseCutscene:methods:exit"
title: "BaseCutscene.exit Method"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "methods", "exit"]
---

# 📖 `BaseCutscene.exit()`

---

## 1. Method Overview & Signature

Concludes the cutscene, fires completion callback, emits close notifications, and deactivates the root node.

```typescript
public exit(_data?: any, _callback?: Function): void
```

---

## 2. Complete Source Code Implementation

```typescript
exit(_data?: any, _callback?: Function): void {
    this.callback && this.callback();
    this.callback = null;

    this.fireCutsceneClose();
    this.node.emit("STOP");
    this.node.active = false;
}
```
