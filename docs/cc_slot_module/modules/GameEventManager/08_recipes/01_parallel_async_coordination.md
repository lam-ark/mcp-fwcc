---
id: "cc_slot_module:GameEventManager:recipe:parallel_async_coordination"
title: "Recipe: Parallel Async Multi-Module Coordination"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "recipes", "async", "coordination", "parallel", "production_code"]
---

# 💡 Recipe: Parallel Async Multi-Module Coordination

## 1. Concrete Production Use-Case

When presenting Big Win milestones, multiple modules across the scene graph must animate simultaneously, and the Director must await until all animations finish before proceeding to the next cascade or respin.

```typescript
// 1. In GameDirector (Publisher):
async presentMilestoneWin(winAmount: number): Promise<void> {
    // Parallel dispatch awaiting all subscribers (Coin Roll + Character Spine + SFX)
    await this.eventManager.emit("PRESENT_MILESTONE_WIN", {
        amount: winAmount,
        duration: 3.5
    });

    console.log("All UI, VFX, and audio celebrations finished!");
    this.proceedToNextSpinStep();
}

// 2. In WinAmountModule (Subscriber 1):
protected registerEvents(): void {
    this.eventManager.on("PRESENT_MILESTONE_WIN", this.onPresentWinNumber, this);
}

private async onPresentWinNumber(data: any): Promise<void> {
    return new Promise<void>((resolve) => {
        this.moneyTween.startTween({
            from: 0,
            to: data.amount,
            duration: data.duration,
            onUpdate: (val) => { this.label.string = val; },
            onComplete: () => { resolve(); }
        });
    });
}

// 3. In CharacterVFXModule (Subscriber 2):
protected registerEvents(): void {
    this.eventManager.on("PRESENT_MILESTONE_WIN", this.onPlaySpineVfx, this);
}

private async onPlaySpineVfx(data: any): Promise<void> {
    this.spineSkeleton.setAnimation(0, "celebration_jump", false);
    // Sync with duration
    await new Promise(r => setTimeout(r, data.duration * 1000));
}
```
