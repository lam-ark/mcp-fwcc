---
id: "game-implement:9666:payline:task_list"
title: "Red Cliff (g9666) Payline & Spine Bone Tracking Subsystem Task & Debugging Checklist"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "payline", "task_list", "debugging", "verification"]
---

# 📋 Red Cliff (g9666) Payline & Spine Bone Tracking Subsystem Task & Debugging Checklist

---

## 🎯 Purpose & Scope

This checklist details testing, verification, and debugging procedures for the **Payline Presentation & Real-Time Spine Bone Tracking Subsystem** in Red Cliff (`g9666`), including 243 AllWays paylines, `hsnCombineSpine` bone tracking, tiered win frame effects, and accumulation across cascades.

---

## 🧭 Phase 1: Payline Data Ingestion & AllWays Conversion

- [ ] **Step 1.1: Verify Payline Data Matrix Keys**
  - Ensure `SlotTablePaylineData9666` maps `payLines`, `normalGamePayLines`, `freeGamePayLines`, `respinGamePayLines`.
  - Validate Mega symbol expansion via `eno.SlotUtils.convertMegaSymbols()` before payline calculation.

- [ ] **Step 1.2: Check Base Win Amount Calculation**
  - Verify `SlotPaylineSchedule9666.getTotalWinAmount()`:
    $$\text{baseWin} = \sum \frac{\text{payLineWinAmount}}{\text{multiplier}}$$
  - Ensure base win without multiplier is properly fed to `extraAmountWin` label.

---

## 🧭 Phase 2: Real-Time Spine Bone Tracking (`hsn` & `money`)

- [ ] **Step 2.1: Bone Synchronization in `update()`**
  - Check `syncNodeToBone(multiLabel.node, 'hsn')` updates world coordinates of the multiplier label.
  - Check `syncNodeToBone(extraAmountWin.node, 'money')` updates world coordinates of the money label.
  - Verify `hsnCombineSpine.updateWorldTransform()` is called before reading bone `worldX` and `worldY`.

- [ ] **Step 2.2: Animation Sequence & Spine Events**
  - Verify animation sequence: `'active_money'` $\rightarrow$ `'active_ktt'` $\rightarrow$ `'active_reset'`.
  - Check Spine event `add_money`: Switches `extraAmountWin` to the multiplied win amount and hides `multiLabel`.
  - Check Spine event `add_ktt`: Emits `onShowResultEntry()`.

---

## 🧭 Phase 3: Tiered Win Frame & Total Win Accumulation

- [ ] **Step 3.1: Tiered Win Level Calculation (`PaylineWinFrameEffect9666`)**
  - **Level 1** ($< 5\times \text{Bet}$): Plays `total_1_active` $\rightarrow$ `total_1_idle`.
  - **Level 2** ($5\times - 10\times \text{Bet}$): Plays `total_2_active` $\rightarrow$ `total_2_idle`.
  - **Level 3** ($\ge 10\times \text{Bet}$): Plays `total_3_active` $\rightarrow$ `total_3_idle`.

- [ ] **Step 3.2: Accumulation Across Respins/Cascades**
  - In Normal Game: Win amount accumulates in `lbRight` across cascades; fades out on new spin (`SPIN_START`).
  - In Free Game: Accumulated win persists across free spins without resetting to 0.

---

## 🐛 Bug Troubleshooting & Diagnostic Quick-Fix Table

| Symptom | Probable Cause | Verification & Fix Location |
| :--- | :--- | :--- |
| **Multiplier / Money label drifting off Spine bone** | Label node parent coordinate system misaligned with Spine world transform. | Check `syncNodeToBone()` in [`PaylineInfoModule9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Gui/PaylineInfoModule9666.ts#L368-L381). |
| **Free Game total win resets to 0 mid-feature** | `onResetNewSpin()` called without checking `GAME_MODE_ENUM.FREE_GAME`. | Check [`PaylineInfoModule9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Gui/PaylineInfoModule9666.ts#L227-L235). |
| **Win frame Spine gets stuck on active animation** | CompleteListener interrupted during Fast Stop. | Check `onFastToResultTriggeredForApplyMulti()` in [`PaylineInfoModule9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Gui/PaylineInfoModule9666.ts#L519-L524). |
| **Money count-up tween jumps or skips** | `MoneyTween` duration not scaled by `this.speed`. | Check `updateTotalWinNumber()` in [`PaylineInfoModule9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Gui/PaylineInfoModule9666.ts#L413-L425). |
