---
id: "cc_slot_module:LoadingScreenModule:methods:startLoadScene"
title: "LoadingScreenModule.startLoadScene Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "startLoadScene"]
---

# 📖 `LoadingScreenModule.startLoadScene()`

---

## 1. Complete Source Code Implementation

```typescript
startLoadScene(): void {
    this.node.active = true;
    setOpacity(this.node, 255);
    this.preloadScene();
}
```
