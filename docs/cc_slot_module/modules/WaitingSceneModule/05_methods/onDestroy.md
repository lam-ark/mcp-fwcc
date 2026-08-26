---
id: "cc_slot_module:WaitingSceneModule:methods:onDestroy"
title: "WaitingSceneModule.onDestroy Method"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `WaitingSceneModule.onDestroy()`

---

## 1. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.waitingSceneData, this);
}
```
