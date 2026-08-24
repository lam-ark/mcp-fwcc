---
id: "cc_slot_module:FreeOptionDirectorModule:method:onResumeGameMode"
title: "FreeOptionDirectorModule.onResumeGameMode() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "onResumeGameMode"]
---

# `FreeOptionDirectorModule.onResumeGameMode(): Promise<void>`

---

## 1. Method Signature
```typescript
onResumeGameMode(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Resolves immediately: `return Promise.resolve()`. Subclasses override this method to render reconnection state.

---

## 3. Un-truncated Source Code Implementation
```typescript
onResumeGameMode(): Promise<void> {
    return Promise.resolve();
}
```
