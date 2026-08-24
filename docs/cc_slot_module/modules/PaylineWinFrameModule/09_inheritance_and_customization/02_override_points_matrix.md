---
id: "cc_slot_module:PaylineWinFrameModule:inheritance:override_points_matrix"
title: "PaylineWinFrameModule Override Points Matrix"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 PaylineWinFrameModule Override Points Matrix

---

## 1. Override Points Matrix

| Method | Safe to Override? | Required `super` | Customization Purpose |
| :--- | :--- | :--- | :--- |
| `playAnimation` | `YES` | Optional | Custom animation names or tinting logic. |
| `spawnFrame` | `YES` | Optional | Custom prefab layout or particle attachment. |
| `clearAll` | `NO` | `MANDATORY` | Pool recycling safety. |
