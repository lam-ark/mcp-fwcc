---
id: "cc_slot_module:LoadingScreenModule:methods:resetProgress"
title: "LoadingScreenModule.resetProgress Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "resetProgress"]
---

# 📖 `LoadingScreenModule.resetProgress()`

---

## 1. Complete Source Code Implementation

```typescript
resetProgress(): void {
    this.progressBar && (this.progressBar.progress = 0);
    this.progressLabel && (this.progressLabel.string = '0%');
}
```
