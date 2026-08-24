---
id: "cc_slot_module:FreeOptionDirectorModule:customization:production_game_case_study"
title: "Production Case Study: Red Cliff 9666 Free Spins Volatility Selection"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "customization", "case_study", "red_cliff"]
---

# 📖 Production Case Study: Red Cliff 9666 Free Spins Volatility Selection

## 1. Production Context & Implementation

In `Red Cliff (9666)` (`assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeOptionDirectorModule9666.ts`), hitting 3 Scatters presents 4 option cards:
1. **Option 1**: 20 Free Spins with 2x/3x/5x Wild Multiplier.
2. **Option 2**: 15 Free Spins with 3x/5x/8x Wild Multiplier.
3. **Option 3**: 10 Free Spins with 5x/8x/10x Wild Multiplier.
4. **Option 4**: Mystery Choice (Random combination of spins and multipliers).

`FreeOptionDirectorModule9666` binds all 4 options, runs the 15-second countdown timer, and automatically picks a random card if the player doesn't interact, seamlessly transitioning into `FreeGameDirectorModule9666`.
