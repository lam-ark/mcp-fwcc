---
id: "cc_slot_module:PaylineWinFrameModule:method:hideAll"
title: "PaylineWinFrameModule.hideAll Method"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "hideAll"]
---

# 🚀 `PaylineWinFrameModule.hideAll(): void`

---

## 1. Method Signature

```typescript
protected hideAll(): void
```

---

## 2. Full Source Code

```typescript
protected hideAll(): void {
    this.frames.forEach((reel) => {
        reel.forEach((frame) => {
            frame.emit('HIDE');
        });
    });
}
```
