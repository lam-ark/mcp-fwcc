---
id: "game-implement:9666:custom_overrides"
title: "Red Cliff (g9666) - SDK Subclasses & Custom Method Overrides Matrix"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "custom_overrides"
tags: ["game_implement", "9666", "subclasses", "overrides", "director", "table", "wineffect"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 3. 🧩 SDK Subclasses & Custom Method Overrides Matrix

---

## 3.1 Custom Class Mapping Matrix

| SDK Base Class (`cc-common`) | Subclass (`cc1-red-cliff`) | File Path | Key Overridden Methods & Functions |
| :--- | :--- | :--- | :--- |
| `NormalGameDirectorModule` | `NormalGameDirectorModule9666` | `scripts/GameMode/NormalGameDirectorModule9666.ts` | `_showResultEntry()` (Spin button lockout on FreeGame trigger), `_beforeSpinStart()` (Re-enable spin button), `_startRespinningTable()` (Parallel `COLLECT_SCATTER`), `_showTransitionFreeGame()`, `_disableNormalSpinButton()`, `_enableNormalSpinButton()` |
| `FreeGameDirectorModule` | `FreeGameDirectorModule9666` | `scripts/GameMode/FreeGameDirectorModule9666.ts` | `_showTransitionNormalGame()`, `_syncGameMultiplier()` (Free Spins progressive multiplier sync) |
| `SlotTableModule` | `SlotTableModule9666` | `scripts/Table/SlotTableModule9666.ts` | Dynamic Megaways grid layout, multi-height symbol positioning, horizontal sub-reel cascade linkage |
| `SlotReelModule` | `SlotReelModule9666` | `scripts/Table/SlotReelModule9666.ts` | Multi-size blur symbol generation (`BUG-002`), sub-reel blur exclusion (`BUG-004`), symbol scale fitting |
| `WinEffectModule` | `WinEffectModule9666` | `scripts/Cutscene/WinEffectModule9666.ts` | `showFastEffectWin()` (Turbo fast particle 1s), `playSfxFastBigWin()`, Multi-milestone Spine sync (`RECIPE-002`), Bone money synchronization (`slot_money`) |
| `TotalWinModule` | `TotalWinModule9666` | `scripts/Cutscene/TotalWinModule9666.ts` | 3-Phase Spine celebration sequence (`RECIPE-003`), Win level milestone branching (`WIN_LEVEL_ENUM`), sound sync |
| `SlotButtonNormal` | `SlotButtonSprite9666` | `scripts/Gui/SlotButtonSprite9666.ts` | Custom Spin button sprite framing and hold-to-auto spin visual states |
| `WinAmountModule` | `WinAmountModule9666` | `scripts/Gui/WinAmountModule9666.ts` | `FADE_OUT_RESPIN_WIN_AMOUNT`, `COMMIT_RESPIN_WIN_AMOUNT`, payline win amount aggregation |
