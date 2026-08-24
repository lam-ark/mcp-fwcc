---
id: "cc_slot_module:GameModeDirectorModule:method:onBeforeSpinStart"
title: "GameModeDirectorModule.onBeforeSpinStart() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onBeforeSpinStart"]
---

# `GameModeDirectorModule.onBeforeSpinStart(): Promise<void>`

---

## 1. Method Signature
```typescript
onBeforeSpinStart(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"NormalSpinTrigger"`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onBeforeSpinStart(): Promise<void> {
    return this.runAction("NormalSpinTrigger");
}
```
