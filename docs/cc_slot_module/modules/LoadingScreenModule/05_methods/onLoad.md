---
id: "cc_slot_module:LoadingScreenModule:methods:onLoad"
title: "LoadingScreenModule.onLoad Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `LoadingScreenModule.onLoad()`

---

## 1. Method Overview & Signature

```typescript
onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoad(): void {
    if (this.sceneName === '') {
        return;
    }
    this.resetProgress();
    this.updatedScene = this.sceneName;
    this.loadHistory = false;
    this.startLoadingPipeline();
}
```
