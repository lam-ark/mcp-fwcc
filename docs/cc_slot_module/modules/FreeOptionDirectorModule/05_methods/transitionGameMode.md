---
id: "cc_slot_module:FreeOptionDirectorModule:method:transitionGameMode"
title: "FreeOptionDirectorModule.transitionGameMode() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "transitionGameMode"]
---

# `FreeOptionDirectorModule.transitionGameMode(data: any): Promise<void>`

---

## 1. Method Signature
```typescript
transitionGameMode(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Resolves immediately: `return Promise.resolve()`. Subclasses override this method to play custom VFX transitions into Free Option mode.

---

## 3. Un-truncated Source Code Implementation
```typescript
transitionGameMode(data): Promise<void> {
    return Promise.resolve();
}
```
