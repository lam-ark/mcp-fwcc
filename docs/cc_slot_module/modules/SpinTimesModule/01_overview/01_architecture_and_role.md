---
id: "cc_slot_module:SpinTimesModule:overview:architecture_and_role"
title: "SpinTimesModule Architectural Role & Remaining Spin Counter Badge"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "overview", "architecture", "spin_times"]
---

# 🏛️ SpinTimesModule Architectural Role & Remaining Spin Counter Badge

---

## 1. Architectural Mission

`SpinTimesModule` renders the numeric remaining round countdown badge overlay attached to spin buttons (`normalSpinTimes` under Base Game Auto Spins, `freeSpinTimes` under Free Spins). It listens to `UPDATE_SPINTIMES` / `RESET_SPINTIMES`, observes reactive `SpinButtonNormal.autoSpinCount`, and formats infinite round quantities (`> 100000` $\rightarrow$ `'∞'`).

```mermaid
graph TD
    DataModel[eno.SpinButtonNormal Model] -->|Reactive autoSpinCount & state| STM[SpinTimesModule]
    Director[GameModeDirectorModule] -->|UPDATE_SPINTIMES / RESET_SPINTIMES| STM
    
    STM -->|Update string / active| Label[spinTimesLabel: cc.Label]
    STM -->|SET_UP_SPIN_TIMES| Director
```

---

## 2. Key Responsibilities

1. **Auto Spin Countdown (`autoSpinCount`)**:
   - Decrements and renders the remaining auto-spin count on the base game spin button.
2. **Infinite Spin Symbolization (`> 100000` $\rightarrow$ `'∞'`)**:
   - Converts unbounded free spins or large test auto-spin counts to the infinity glyph (`'∞'`).
3. **State-Driven Reset (`updateState`)**:
   - Automatically hides and clears the badge when the spin button state returns to `BUTTON_STATE_ENUM.NORMAL`.
