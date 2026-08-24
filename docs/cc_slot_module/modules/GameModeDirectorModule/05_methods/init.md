---
id: "cc_slot_module:GameModeDirectorModule:method:init"
title: "GameModeDirectorModule.init() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "init"]
---

# `GameModeDirectorModule.init(): void`

---

## 1. Method Signature
```typescript
init(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Invokes `super.init()` to instantiate the director's writer and script execution queues.
2. Emits scoped module event `"TABLE_INIT"` to trigger table grid instantiation.
3. Emits scoped module event `"SHOW_BEAUTY_MATRIX"` to display an initial attract-mode matrix.

---

## 3. Un-truncated Source Code Implementation
```typescript
init(): void {
    super.init();
    this.moduleEvent.emit("TABLE_INIT");
    this.moduleEvent.emit("SHOW_BEAUTY_MATRIX");
}
```
