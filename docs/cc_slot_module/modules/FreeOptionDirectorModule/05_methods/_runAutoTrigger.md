---
id: "cc_slot_module:FreeOptionDirectorModule:method:runAutoTrigger"
title: "FreeOptionDirectorModule._runAutoTrigger() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "_runAutoTrigger", "auto_pick"]
---

# `FreeOptionDirectorModule._runAutoTrigger(): void`

---

## 1. Method Signature
```typescript
_runAutoTrigger(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Halts active timer: `this.stopCountDown()`.
2. Computes random option index: `let randomIndex = Math.floor(Math.random() * this.options.length);`.
3. Selects option card: `let randomOption = this.options[randomIndex];`.
4. Executes click logic programmatically: `this.optionClick(null, Number(randomOption.optionId));`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_runAutoTrigger(): void {
    this.stopCountDown();
    let randomIndex = Math.floor(Math.random() * this.options.length);
    let randomOption = this.options[randomIndex];
    this.optionClick(null, Number(randomOption.optionId));
}
```
