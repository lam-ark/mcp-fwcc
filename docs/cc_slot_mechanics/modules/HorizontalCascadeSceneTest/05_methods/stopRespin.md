---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:methods:stopRespin"
title: "HorizontalCascadeSceneTest.stopRespin Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "methods", "stopRespin"]
---

# 📖 `HorizontalCascadeSceneTest.stopRespin()`

---

## 1. Method Signature & Overview

```typescript
stopRespin(): void
```

- **Primary Role**: Implements stopRespin within the HorizontalCascadeSceneTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopRespin(): void {
        this.scheduleOnce(() => {
            this.cascadeModule.stopRespin(null, null);
        }, 0.5);
    }
```
