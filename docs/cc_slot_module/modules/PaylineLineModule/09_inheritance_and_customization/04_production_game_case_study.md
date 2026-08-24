---
id: "cc_slot_module:PaylineLineModule:inheritance:production_game_case_study"
title: "PaylineLineModule Production Game Case Study (25-Line Slot)"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "case_study", "production"]
---

# 🎰 PaylineLineModule Production Game Case Study (25-Line Slot)

---

## 1. Production Game Context

In 25-line fixed slots (e.g. `g9000L` Classic 5x3):
- **Requirement**: Display individual colorful connecting lines when cycling through winning combinations during Stage 2 idle.
- **Implementation**: `PaylineLineModule` dynamically pulls pooled line prefabs containing `cc.Graphics`, draws the track connecting coordinate points `(col, row)`, and resets them on next spin.
