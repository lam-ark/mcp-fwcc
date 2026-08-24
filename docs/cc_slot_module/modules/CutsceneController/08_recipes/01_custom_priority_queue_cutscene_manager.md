---
id: "cc_slot_module:CutsceneController:recipes:custom_priority_queue_cutscene_manager"
title: "Recipe: Implementing Sequential Queueing for Overlapping Cutscenes"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "recipes", "queue", "priority"]
---

# 💡 Recipe: Implementing Sequential Queueing for Overlapping Cutscenes

---

## 1. Objective

Extend `CutsceneController` with a FIFO queue to prevent overlapping modals when multiple jackpot and big win events fire in close succession:

```typescript
@ccclass
export class QueuedCutsceneController extends CutsceneController {
    private _queue: Array<{ cutsceneType: number, cutsceneData: any, resolve: Function }> = [];
    private _isPlaying: boolean = false;

    playCutScene({ cutsceneType, cutsceneData }): Promise<void> {
        return new Promise((resolve) => {
            this._queue.push({ cutsceneType, cutsceneData, resolve });
            this._processQueue();
        });
    }

    private async _processQueue(): Promise<void> {
        if (this._isPlaying || this._queue.length === 0) return;
        this._isPlaying = true;
        const current = this._queue.shift();
        
        await super.playCutScene({ cutsceneType: current.cutsceneType, cutsceneData: current.cutsceneData });
        current.resolve();
        this._isPlaying = false;
        this._processQueue();
    }
}
```
