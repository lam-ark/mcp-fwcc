---
id: "cc_slot_module:FreeGameDirectorModule:method:onBeforeSpinStart"
title: "FreeGameDirectorModule.onBeforeSpinStart() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "onBeforeSpinStart"]
---

# `FreeGameDirectorModule.onBeforeSpinStart(): Promise<void>`

---

## 1. Method Signature
```typescript
onBeforeSpinStart(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Invokes `this.runAction("FreeSpinTrigger")` to execute the sequence planned by `FreeGameWriterModule`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onBeforeSpinStart(): Promise<void> {
    return this.runAction("FreeSpinTrigger");
}
```
