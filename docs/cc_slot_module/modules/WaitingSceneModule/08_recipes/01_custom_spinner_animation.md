---
id: "cc_slot_module:WaitingSceneModule:recipes:custom_spinner_animation"
title: "Recipe: Adding Spine Spinner Loop to Waiting Screen"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "recipes"]
---

# 💡 Recipe: Adding Spine Spinner Loop to Waiting Screen

```typescript
import { WaitingSceneModule } from 'cc-slot-module/Components/WaitingSceneModule';

export class CustomWaitingScene extends WaitingSceneModule {
    @property(sp.Skeleton)
    spinnerSpine: sp.Skeleton = null;

    showWaitingScene(active: boolean): void {
        super.showWaitingScene(active);
        if (active && this.spinnerSpine) {
            this.spinnerSpine.setAnimation(0, 'spin_loop', true);
        }
    }
}
```
