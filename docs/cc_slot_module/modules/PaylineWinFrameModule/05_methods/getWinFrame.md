---
id: "cc_slot_module:PaylineWinFrameModule:method:getWinFrame"
title: "PaylineWinFrameModule.getWinFrame Method"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "getWinFrame"]
---

# 🚀 `PaylineWinFrameModule.getWinFrame(reel, row, position): cc.Node`

---

## 1. Method Signature

```typescript
protected getWinFrame(reel: number, row: number, position: cc.Vec3): cc.Node
```

---

## 2. Full Source Code

```typescript
protected getWinFrame(reel: number, row: number, position: cc.Vec3): cc.Node {
    if (!this.frames[reel]) {
        this.frames[reel] = [];
    }

    let winFrame = this.frames[reel][row];
    if (!winFrame) {
        winFrame = this.spawnFrame(reel, row, position);
    }
    return winFrame;
}
```
