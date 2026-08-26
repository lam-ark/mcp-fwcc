---
id: "cc_slot_module:WaitingSceneModule:methods:start"
title: "WaitingSceneModule.start Method"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "methods", "start"]
---

# 📖 `WaitingSceneModule.start()`

---

## 1. Complete Source Code Implementation

```typescript
start(): void {
    this.waitingSceneData = this.gameLogic.getDataModel().WaitingSceneData;
    this.setupObserver();
}
```
