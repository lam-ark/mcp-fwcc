---
id: "cc_slot_module:WaitingSceneModule:methods:setupObserver"
title: "WaitingSceneModule.setupObserver Method"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `WaitingSceneModule.setupObserver()`

---

## 1. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.observer.watch(this.waitingSceneData, "active", this.showWaitingScene.bind(this), this);
}
```
