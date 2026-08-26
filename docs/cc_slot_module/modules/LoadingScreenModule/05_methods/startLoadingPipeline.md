---
id: "cc_slot_module:LoadingScreenModule:methods:startLoadingPipeline"
title: "LoadingScreenModule.startLoadingPipeline Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "startLoadingPipeline"]
---

# 📖 `LoadingScreenModule.startLoadingPipeline()`

---

## 1. Complete Source Code Implementation

```typescript
startLoadingPipeline(): void {
    const { IS_FINISHED_REMOTE } = environment.getConfig();
    if (IS_FINISHED_REMOTE) {
        this.redirectSceneName();
        this.addHomeEvent();
        this.startLoadScene();
    } else {
        setTimeout(() => {
            this.startLoadingPipeline();
        }, 100);
    }
}
```
