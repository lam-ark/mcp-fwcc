---
id: "game-implement:9666:mechanics:jackpot_collection"
title: "Red Cliff (g9666) Jackpot Collection & Smart Resume Subsystem"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionModule9666", "JackpotCollectionItem9666", "jackpot", "resume"]
---

# 💎 Red Cliff (g9666) Jackpot Collection & Smart Resume Subsystem

---

## 📚 Detailed Documentation Sub-chapters

Comprehensive documentation for the 4-Tier Jackpot Collection Subsystem in Red Cliff 9666 is organized within:
[`06_jackpot_collection/`](./06_jackpot_collection/)

1. **[01. 4-Tier Architecture & Thresholds](./06_jackpot_collection/01_tier_architecture_and_thresholds.md)**: Mini (`S4`, 6 tokens, $20\times$), Minor (`S3`, 9 tokens, $50\times$), Major (`S2`, 12 tokens, $200\times$), Grand (`S1`, 15 tokens, $1000\times$).
2. **[02. Token Meter UI & Particle Fly-In](./06_jackpot_collection/02_token_meter_ui_and_fly_in.md)**: `JackpotCollectionModule9666`, particle flight path from matrix to HUD character cards.
3. **[03. Smart Resume Deduction Algorithm](./06_jackpot_collection/03_smart_resume_deduction_math.md)**: $C_{\text{before}} = \max(0, C_{\text{collected}} - W_{\text{current}})$ math formulation preventing premature token display on reconnect.
4. **[04. Jackpot Collection Edge Cases & Gotchas](./06_jackpot_collection/04_edge_cases_and_gotchas.md)**: Stale token counts on game exit, Turbo speed particle skipping, multiple simultaneous tier triggers.
