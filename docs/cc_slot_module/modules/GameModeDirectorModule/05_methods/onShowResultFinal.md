---
id: "cc_slot_module:GameModeDirectorModule:method:onShowResultFinal"
title: "GameModeDirectorModule.onShowResultFinal() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onShowResultFinal"]
---

# `GameModeDirectorModule.onShowResultFinal(): Promise<void>`

---

## 1. Method Signature
```typescript
onShowResultFinal(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"ShowResultFinal"` (clearing temporary win particles and unlocking the wallet).

---

## 3. Un-truncated Source Code Implementation
```typescript
onShowResultFinal(): Promise<void> {
    return this.runAction("ShowResultFinal");
}
```
