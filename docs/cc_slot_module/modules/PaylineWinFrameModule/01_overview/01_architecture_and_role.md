---
id: "cc_slot_module:PaylineWinFrameModule:overview:architecture_and_role"
title: "PaylineWinFrameModule Architecture & Role"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "overview", "architecture", "win_frame"]
---

# 🏛️ PaylineWinFrameModule Architecture & Role

---

## 1. Architectural Purpose

`PaylineWinFrameModule` (`assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/WinFrame/scripts/PaylineWinFrameModule.ts`) is the **Decorative Win Frame Box Overlay Engine** in the `cc-common` Slot SDK.

When winning symbols animate, `PaylineWinFrameModule`:
1. Listens to `SYMBOL_PLAY_ANIMATION_WIN` from `PaylineSymbolModule`.
2. Spawns or retrieves cached border frames from a local `cc.NodePool("PaylineWinFrame")`.
3. Positions the frame at the symbol's grid coordinates `(reel, row)`.
4. Triggers `winFrame.emit('PLAY_ANIMATION', '', duration)` to render glowing golden/neon borders around winning combinations.

```mermaid
graph TD
    PSM[PaylineSymbolModule] -->|SYMBOL_PLAY_ANIMATION_WIN| PWFM[PaylineWinFrameModule]
    PWFM -->|getWinFrame / spawnFrame| Pool[cc.NodePool PaylineWinFrame]
    Pool --> FrameNode[Win Frame Node]
    FrameNode -->|emit: PLAY_ANIMATION| Anim[Glowing Border VFX]
    PWFM -->|PAYLINE_CLEAR| Recycle[Recycle frames back into Pool]
```

---

## 2. Core Responsibilities

1. **Zero-Allocation Node Pooling**: Maintains `winFramePool` to eliminate Garbage Collection hit spikes during rapid spin sequences.
2. **Synchronized Playback**: Automatically matches the duration and active state of the underlying winning symbol animation.
3. **Clean Teardown**: Recycles frames via `this.winFramePool.put(frame)` upon `PAYLINE_CLEAR`.
