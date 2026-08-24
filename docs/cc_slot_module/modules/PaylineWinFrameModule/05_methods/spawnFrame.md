---
id: "cc_slot_module:PaylineWinFrameModule:method:spawnFrame"
title: "PaylineWinFrameModule.spawnFrame Method"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "spawnFrame"]
---

# 🚀 `PaylineWinFrameModule.spawnFrame(reel, row, position): cc.Node`

---

## 1. Method Signature

```typescript
protected spawnFrame(reel: number, row: number, position: cc.Vec3): cc.Node
```

---

## 2. Full Source Code

```typescript
protected spawnFrame(reel: number, row: number, position: cc.Vec3): cc.Node {
    let node = this.winFramePool.get() || cc.instantiate(this.template);
    node.setParent(this.container);
    node.setPosition(position);
    if (!this.frames[reel]) {
        this.frames[reel] = [];
    }
    this.frames[reel][row] = node;
    return node;
}
```
