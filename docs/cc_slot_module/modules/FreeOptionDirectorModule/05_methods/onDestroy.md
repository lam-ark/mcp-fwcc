---
id: "cc_slot_module:FreeOptionDirectorModule:method:onDestroy"
title: "FreeOptionDirectorModule.onDestroy() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "onDestroy", "cleanup"]
---

# `FreeOptionDirectorModule.onDestroy(): void`

---

## 1. Method Signature
```typescript
onDestroy(): void
```

---

## 2. Detailed Algorithmic Execution Logic
If `_repeatCountDown` tween is active, stops it and sets `this._repeatCountDown = null`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onDestroy(): void {
    if (this._repeatCountDown) {
        this._repeatCountDown.stop();
        this._repeatCountDown = null;
    }
}
```
