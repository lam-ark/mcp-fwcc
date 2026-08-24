---
id: "cc_slot_module:PaylineWinFrameModule:method:playAnimation"
title: "PaylineWinFrameModule.playAnimation Method"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "playAnimation"]
---

# 🚀 `PaylineWinFrameModule.playAnimation(data): void`

---

## 1. Method Signature

```typescript
protected playAnimation(data: { symbol: any, duration: number }): void
```

---

## 2. Full Source Code

```typescript
protected playAnimation(data: { symbol: any, duration: number }): void {
    const { reel, row, position } = data.symbol;
    const winFrame = this.getWinFrame(reel, row, position);
    winFrame.emit('PLAY_ANIMATION', '', data.duration);
}
```
