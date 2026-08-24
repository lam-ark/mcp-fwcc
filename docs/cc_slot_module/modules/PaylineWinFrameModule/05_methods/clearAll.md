---
id: "cc_slot_module:PaylineWinFrameModule:method:clearAll"
title: "PaylineWinFrameModule.clearAll Method"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "clearAll"]
---

# 🚀 `PaylineWinFrameModule.clearAll(): void`

---

## 1. Method Signature

```typescript
protected clearAll(): void
```

---

## 2. Full Source Code

```typescript
protected clearAll(): void {
    this.frames.forEach((reel) => {
        reel.forEach((frame) => {
            frame.emit('RESET');
            this.winFramePool.put(frame);
        });
    });
    this.frames = [];
}
```
