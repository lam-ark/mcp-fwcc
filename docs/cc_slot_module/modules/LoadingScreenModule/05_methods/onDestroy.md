---
id: "cc_slot_module:LoadingScreenModule:methods:onDestroy"
title: "LoadingScreenModule.onDestroy Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `LoadingScreenModule.onDestroy()`

---

## 1. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.unscheduleAllCallbacks();
    if (this.tweenFullProgress) {
        this.tweenFullProgress.stop();
    }
    this.tweenFullProgress = null;
    if (this.usingLoadHowl) {
        JsbUtils.unregisterLoadHowl();
    }
}
```
