---
id: "game-implement:9666:jackpot:gotchas"
title: "Red Cliff (g9666) Jackpot Collection Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "gotchas", "jackpot", "resume"]
---

# ⚠️ Red Cliff (g9666) Jackpot Collection Gotchas

---

## 1. Gotcha: Meter Over-Filling on Reconnect
- **Symptom**: Reconnecting mid-spin shows the Jackpot meter full, then adds tokens again causing overflow.
- **Fix**: Always apply the `currentWinCount` deduction in `onJoinGameSuccess`.
