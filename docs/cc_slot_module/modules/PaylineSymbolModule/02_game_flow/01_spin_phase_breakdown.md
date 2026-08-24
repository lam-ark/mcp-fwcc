---
id: "cc_slot_module:PaylineSymbolModule:game_flow:spin_phase_breakdown"
title: "PaylineSymbolModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 PaylineSymbolModule Spin Phase Breakdown

---

## 1. Phase-by-Phase Behavior

1. **Spinning**: Symbols are recycled; `mapTableSymbols` cleared.
2. **Reel Stop**: Ingests matrix/paylines via `PAYLINE_SET_DATA`.
3. **Blink All**: Grabs all winning symbols, dimming unhit symbols and playing win animations.
4. **Line Cycling**: Receives `PAYLINE_SHOW_LINE`, dims other lines, highlights and loops current line's symbols.
5. **Next Spin Clean**: `PAYLINE_CLEAR` returns symbols to factory pool.
