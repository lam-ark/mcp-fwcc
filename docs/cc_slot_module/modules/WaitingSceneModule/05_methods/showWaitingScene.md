---
id: "cc_slot_module:WaitingSceneModule:methods:showWaitingScene"
title: "WaitingSceneModule.showWaitingScene Method"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "methods", "showWaitingScene"]
---

# 📖 `WaitingSceneModule.showWaitingScene()`

---

## 1. Complete Source Code Implementation

```typescript
showWaitingScene(active: boolean): void {
    this.node.active = active;
    setOpacity(this.node, active ? 255 : 0);
}
```
