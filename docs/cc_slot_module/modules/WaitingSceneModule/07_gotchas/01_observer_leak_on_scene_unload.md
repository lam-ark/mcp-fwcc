---
id: "cc_slot_module:WaitingSceneModule:gotchas:observer_leak"
title: "WaitingSceneModule Gotcha: Dangling Observer Reference"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "gotchas", "observer_leak"]
---

# ⚠️ WaitingSceneModule Gotcha: Dangling Observer Reference

---

## 1. Solution
Always invoke `this.observer.releaseAll(this.waitingSceneData, this)` in `onDestroy()` to prevent callbacks executing on destroyed nodes.
