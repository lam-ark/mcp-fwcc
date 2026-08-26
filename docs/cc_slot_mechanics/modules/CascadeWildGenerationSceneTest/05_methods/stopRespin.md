---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:methods:stopRespin"
title: "CascadeWildGenerationSceneTest.stopRespin Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "methods", "stopRespin"]
---

# 📖 `CascadeWildGenerationSceneTest.stopRespin()`

---

## 1. Method Signature & Overview

```typescript
stopRespin(): void
```

- **Primary Role**: Implements stopRespin within the CascadeWildGenerationSceneTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopRespin(): void {
        this.scheduleOnce(() => {
            this.cascadeModule.stopRespinHandler();
        }, 0.5);
    }
```
