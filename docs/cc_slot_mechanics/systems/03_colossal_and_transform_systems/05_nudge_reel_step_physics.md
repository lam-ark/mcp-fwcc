---
id: "cc_slot_mechanics:systems:colossal_transforms:nudge_reel"
title: "Nudge Reel Physics & Wild Nudging Steps"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "nudge_reel", "nudge_physics", "wild_nudge"]
---

# ↕️ Nudge Reel Physics & Wild Nudging Steps

---

## 1. Nudge Step Calculations
If a partial Wild stack lands, `NudgeReelModule` steps the column up or down one row at a time until the Wild covers the entire reel, incrementing the wild multiplier by $+1\times$ per nudge step.
