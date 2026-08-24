---
id: "cc_slot_module:BaseCutscene:methods:show"
title: "BaseCutscene.show Method"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "methods", "show"]
---

# 📖 `BaseCutscene.show()`

---

## 1. Method Overview & Signature

Activates the cutscene root node.

```typescript
public show(): void
```

---

## 2. Complete Source Code Implementation

```typescript
show(): void {
    this.node.active = true;
}
```
