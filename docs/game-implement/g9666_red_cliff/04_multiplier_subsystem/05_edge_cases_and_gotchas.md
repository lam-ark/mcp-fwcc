---
id: "game-implement:9666:multiplier:edge_cases_and_gotchas"
title: "Red Cliff (g9666) Multiplier Subsystem Edge Cases & Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "gotchas", "edge_cases", "multiplier", "pooling"]
---

# ⚠️ Red Cliff (g9666) Multiplier Subsystem Edge Cases & Gotchas

---

## 1. Gotcha: Multiplier Badge Orphaned on Pooled Symbol Recycling
- **Symptom**: When a regular symbol (e.g., symbol '5' or '8') is recycled from the object pool, it displays a stale multiplier label (e.g., `x8`) left over from a previous spin.
- **Root Cause**: The label node is not sanitized when returning to the pool or re-assigning symbol codes.
- **Fix**: In `SlotSymbolModule9666.initExtend()` and `changeToSymbol()`, always reset `this.hasCollectedMultiplier = false;` and execute `this.updateMultiplierLabel()`, ensuring `multiplierLabel.node.active = false` and `string = ''` for all non-`K1-x` symbols.

---

## 2. Gotcha: Free Game Resume Out of Sync Due to Commented Out Command
- **Symptom**: Upon reloading into a Free Game session with Multiplier Wilds, the Global Multiplier displays a lower multiplier than server state (e.g., server returned `mulF = 10`, but HUD only shows `x2`).
- **Root Cause**: `_collectWildMultiplier` was commented out in `FreeGameWriterModule9666.makeScriptResumeGameMode()`, while `onJoinGameSuccess()` only reads `pMulF` rather than the accumulated `mulF`.
- **Fix**: Provide a dedicated `_fastForwardMultiplierOnResume` step or allow `syncMultiplier` to evaluate the final `freeGameMultiplier` directly when `isResume = true`.

---

## 3. Gotcha: Flying Particle Z-Index Occlusion
- **Symptom**: When flying from the table to the HUD multiplier banner, the particle gets occluded behind Spine symbols in top reels.
- **Fix**: `CollectMultiModule9666` reparents flying items directly to `Canvas` (or the highest HUD layer) and assigns `NodeUtils.setZIndex(itemNode, 99999, true)`.

---

## 4. Gotcha: Unexploded K1 Symbol Prematurely Losing Badge
- **Symptom**: A `K1` symbol lands but does not participate in a win. On the subsequent respin/cascade, it persists on the table but its `x8` badge vanishes.
- **Fix**: Ensure `hasCollectedMultiplier` and `hideMultiplierLabel()` are triggered **only** when the symbol is part of a winning payway. If unexploded, retain the badge across cascade steps.
