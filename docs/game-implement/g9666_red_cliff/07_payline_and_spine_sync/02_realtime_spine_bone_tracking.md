---
id: "game-implement:9666:payline:realtime_spine_bone_tracking"
title: "Red Cliff (g9666) Real-Time Spine Bone Tracking ('hsn' & 'money')"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "PaylineInfoModule9666", "spine", "bone_tracking", "hsnCombineSpine"]
---

# 🦴 Red Cliff (g9666) Real-Time Spine Bone Tracking ('hsn' & 'money')

---

## 1. Spine Bone Anchor Architecture

In Red Cliff 9666, the multiplier application effect uses dynamic bone tracking where UI text labels strictly follow animated Spine bones in world space:
- **Spine Skeleton**: `hsnCombineSpine` (`sp.Skeleton`).
- **Bone `'hsn'`**: Tracks the position of `multiLabel` (e.g., `x2`, `x8`).
- **Bone `'money'`**: Tracks the position of `extraAmountWin` (the winning amount text).

```mermaid
sequenceDiagram
    autonumber
    participant Director as GameDirectorModule9666
    participant PayInfo as PaylineInfoModule9666
    participant Spine as hsnCombineSpine (sp.Skeleton)
    participant MultiLabel as multiLabel (cc.Label)
    participant MoneyLabel as extraAmountWin (cc.Label)

    Director->>PayInfo: emit('APPLY_MULTIPLIER_TO_WIN_AMOUNT')
    PayInfo->>Spine: setAnimation(0, 'active_money', false)
    Note over PayInfo: Enable _isMultiLabelFollowingBone & _isExtraAmountWinFollowingBone
    
    loop Every frame in update(dt)
        PayInfo->>Spine: updateWorldTransform() & findBone('hsn' / 'money')
        PayInfo->>MultiLabel: setPosition(convertedWorldPos)
        PayInfo->>MoneyLabel: setPosition(convertedWorldPos)
    end
    
    Spine-->>PayInfo: Spine Event: 'add_money'
    PayInfo->>MoneyLabel: Update string = baseWin * multiplier & pulse bounce (scale 1.3 -> 1.0)
    PayInfo->>MultiLabel: string = '' & stop bone tracking
    
    Spine->>Spine: setAnimation(0, 'active_ktt', false)
    Spine-->>PayInfo: Spine Event: 'add_ktt' -> onShowResultEntry()
    Spine->>Spine: setAnimation(0, 'active_reset', false)
    PayInfo-->>Director: Resolve Promise
```

---

## 2. Coordinate Space Transformation Implementation

In `PaylineInfoModule9666.ts`:

```typescript
update(_dt: number): void {
    if (this._isMultiLabelFollowingBone) {
        this.syncNodeToBone(this.multiLabel?.node, 'hsn');
    }
    if (this._isExtraAmountWinFollowingBone) {
        this.syncNodeToBone(this.extraAmountWin?.node, 'money');
    }
}

private syncNodeToBone(targetNode: cc.Node, boneName: string): void {
    if (!targetNode || !targetNode.parent || !this.hsnCombineSpine || !this.hsnCombineSpine.skeletonData) {
        return;
    }

    this.hsnCombineSpine.updateWorldTransform();
    const bone = this.hsnCombineSpine.findBone(boneName);
    if (!bone) {
        return;
    }

    // Convert local Spine bone coordinate to World Space, then to targetNode's Parent Space
    const worldPos = this.hsnCombineSpine.node.convertToWorldSpaceAR(cc.v2(bone.worldX, bone.worldY));
    targetNode.setPosition(targetNode.parent.convertToNodeSpaceAR(worldPos));
}
```
