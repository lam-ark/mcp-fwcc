---
id: "cc_slot_module:PaylineWinFrameModule:inheritance:game_creation_workflow"
title: "PaylineWinFrameModule Game Creation Workflow"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "inheritance", "workflow"]
---

# 📋 PaylineWinFrameModule Game Creation Workflow

---

## 1. Step-by-Step Checklist for New Slot Games

1. Create a child node `WinFramesLayer` under `Payline`.
2. Attach `PaylineWinFrameModule`.
3. In Inspector, assign `container` to the desired frame rendering node.
4. Assign `template` to your game's glowing win frame prefab (containing Spine or Sprite animations).
5. Ensure the win frame prefab script handles the `PLAY_ANIMATION`, `HIDE`, and `RESET` node events.
