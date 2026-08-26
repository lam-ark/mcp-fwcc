---
id: "cc_slot_module:LoadingScreenModule:methods:setProgressFull"
title: "LoadingScreenModule.setProgressFull Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "setProgressFull"]
---

# 📖 `LoadingScreenModule.setProgressFull()`

---

## 1. Complete Source Code Implementation

```typescript
setProgressFull(delay: number, callback: () => void): void {
    if (this.tweenFullProgress) {
        this.tweenFullProgress.stop();
    }
    this.tweenFullProgress = tween(this)
    this.tweenFullProgress
        .to(delay, { CurrentProgress: 1 }, { easing: "sineIn" })
        .call(() => {
            this.updateLabelProgressFull();
            callback && callback();
            this.tweenFullProgress = null;
        })
        .start();
}
```
