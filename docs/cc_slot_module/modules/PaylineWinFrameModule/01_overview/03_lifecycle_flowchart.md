---
id: "cc_slot_module:PaylineWinFrameModule:overview:lifecycle_flowchart"
title: "PaylineWinFrameModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 PaylineWinFrameModule Lifecycle Flowchart

---

## 1. Frame Spawning & Recycling Sequence

```mermaid
sequenceDiagram
    autonumber
    participant PSM as PaylineSymbolModule
    participant PWFM as PaylineWinFrameModule
    participant Pool as NodePool
    participant Frame as FrameNode

    PSM->>PWFM: emit("SYMBOL_PLAY_ANIMATION_WIN", { symbol, duration })
    PWFM->>PWFM: getWinFrame(reel, row, position)
    alt Frame exists in cache
        PWFM->>Frame: winFrame.emit("PLAY_ANIMATION", '', duration)
    else Frame not in cache
        PWFM->>Pool: winFramePool.get() || instantiate(template)
        PWFM->>Frame: setPosition(position)
        PWFM->>Frame: winFrame.emit("PLAY_ANIMATION", '', duration)
    end

    Note over PWFM,Pool: When spin completes or reset occurs
    PSM->>PWFM: emit("PAYLINE_CLEAR")
    PWFM->>Frame: winFrame.emit("RESET")
    PWFM->>Pool: winFramePool.put(frame)
```
