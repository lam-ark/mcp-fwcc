---
id: "transfer-ark:feature:total_win_celebration:03_spine_bone_tracking"
title: "Total Win Celebration - Spine Bone Tracking & Sync"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["TotalWinModule", "sp.Skeleton"]
tags: ["spine", "bone_tracking", "world_space", "in_loop_out", "slot_money"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 3. 🦴 Spine Bone Tracking & Mixing (`in`/`loop`/`out`)

---

## 3.1 Skeleton Mix Configuration

To prevent hard frame popping when transitioning between the 3 animations, smooth track mixing is registered in `onLoadExtend()`:

```typescript
onLoadExtend(): void {
    super.onLoadExtend();
    this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
    if (!this._lbWinAmount && this.winAmount) {
        this._lbWinAmount = this.winAmount.getComponent(cc.Label);
    }
    if (this.totalWinSkeleton && this.totalWinSkeleton.skeletonData) {
        this.totalWinSkeleton.setMix('in', 'loop', 0.2);
        this.totalWinSkeleton.setMix('loop', 'out', 0.2);
        this.totalWinSkeleton.setMix('in', 'out', 0.2);
    }
}
```

---

## 3.2 Dynamic Bone World-Space Synchronization

During `in` and `out` animations, the character gestures dynamically. To keep the label attached to the floating board / character's hands:

```typescript
syncMoneyToSlot(): void {
    if (!this.totalWinSkeleton || !this.totalWinSkeleton.skeletonData || !this.winAmount || !this.winAmount.parent) {
        return;
    }

    // 1. Refresh bone matrices for the active frame
    this.totalWinSkeleton.updateWorldTransform();

    // 2. Locate designated bone
    const bone = this.totalWinSkeleton.findBone('slot_money');
    if (!bone) {
        return;
    }

    // 3. Convert from Spine local to Cocos World Space
    const worldPos = this.totalWinSkeleton.node.convertToWorldSpaceAR(cc.v2(bone.worldX, bone.worldY));

    // 4. Convert from World Space to Label Parent Local Space
    this.winAmount.setPosition(this.winAmount.parent.convertToNodeSpaceAR(worldPos));
}

update(_dt: number): void {
    // Only execute per-frame sync when bone movement is active ('in' or 'out')
    if (this._isMoneySlotMoving) {
        this.syncMoneyToSlot();
    }
}
```

---

## 3.3 Outro (`out`) Animation Teardown

```typescript
private closePopup(): void {
    if (this._popupState === TotalWinState.CLOSING) {
        return;
    }
    this._popupState = TotalWinState.CLOSING;

    this.cleanupTweens();

    if (this.totalWinSkeleton && this.totalWinSkeleton.skeletonData) {
        this._isMoneySlotMoving = true;
        this.totalWinSkeleton.setAnimation(0, 'out', false);
        this.totalWinSkeleton.setCompleteListener((trackEntry: any) => {
            if (trackEntry && trackEntry.animation && trackEntry.animation.name === 'out') {
                this.totalWinSkeleton.setCompleteListener(() => { });
                this.exit();
            }
        });
    } else {
        this.exit();
    }
}
```
