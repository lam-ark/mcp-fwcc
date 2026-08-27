---
id: "game-implement:9666:mechanics:payline_and_spine_bone_sync"
title: "Red Cliff (g9666) Payline & Spine Bone Tracking Subsystem"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "payline", "allways", "spine", "bone_tracking", "hsnCombineSpine"]
---

# ⚔️ Red Cliff (g9666) Payline & Spine Bone Tracking Subsystem

---

## 📚 Detailed Documentation Sub-chapters

Comprehensive technical documentation for the Payline Presentation & Real-Time Spine Bone Tracking Subsystem in Red Cliff 9666 is organized within:
[`07_payline_and_spine_sync/`](./07_payline_and_spine_sync/)

1. **[00. Step-by-Step Task & Debugging Checklist](./07_payline_and_spine_sync/00_TASK_LIST_PAYLINE_SYSTEM.md)**: Exhaustive verification checklist, test scenarios, and diagnostic quick-fix table.
2. **[01. Payline Architecture & 243 AllWays Rules](./07_payline_and_spine_sync/01_payline_architecture_and_allways.md)**: 243 AllWays evaluation, `SlotTablePaylineData9666`, Mega symbol grid conversion, un-multiplied base win derivation.
3. **[02. Real-Time Spine Bone Tracking ('hsn' & 'money')](./07_payline_and_spine_sync/02_realtime_spine_bone_tracking.md)**: `PaylineInfoModule9666`, dynamic world coordinate transformation for bones `'hsn'` and `'money'`, `hsnCombineSpine` state machine.
4. **[03. Tiered Win Frame Levels & Money Presentation](./07_payline_and_spine_sync/03_win_frame_levels_and_amount_presentation.md)**: `PaylineWinFrameEffect9666` (Level 1, 2, 3 thresholds), `MoneyTween` count-up, punchy text bounce animation.
5. **[04. Synchronization & Event Pipeline](./07_payline_and_spine_sync/04_synchronization_and_events.md)**: Event timing (`SHOW_PAYLINE_WIN_AMOUNT`, `APPLY_MULTIPLIER_TO_WIN_AMOUNT`, `COMMIT_RESPIN_WIN_AMOUNT`).
6. **[05. Payline & Spine Sync Edge Cases & Gotchas](./07_payline_and_spine_sync/05_edge_cases_and_gotchas.md)**: Free Game win preservation, bone matrix coordinate desynchronization, Fast-Stop interruption.
