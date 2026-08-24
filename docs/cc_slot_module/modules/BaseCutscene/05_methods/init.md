---
id: "cc_slot_module:BaseCutscene:methods:init"
title: "BaseCutscene.init Method"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "methods", "init"]
---

# 📖 `BaseCutscene.init()`

---

## 1. Method Overview & Signature

Binds local node lifecycle events and deactivates the cutscene node.

```typescript
public init(): void
```

---

## 2. Complete Source Code Implementation

```typescript
init(): void {
    this.node.on('PLAY', this.play, this);
    this.node.on('HIDE', this.exit, this);
    this.node.on('INIT', this.init, this);
    this.node.on('SKIP', this.skip, this);

    this.node.active = false;

    // @ts-ignore
    if (CC_PREVIEW) {
        globalThis[this.node.name] = this;
    }
}
```
