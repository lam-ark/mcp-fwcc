---
id: "game-implement:9666:cascade:task_list"
title: "Red Cliff (g9666) Composite Cascade Step-by-Step Task & Debugging Checklist"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "task_list", "composite_cascade", "debugging", "verification"]
---

# 📋 Red Cliff (g9666) Composite Cascade Step-by-Step Task & Debugging Checklist

---

## 🎯 Purpose & Scope

This checklist provides an exhaustive, step-by-step verification and troubleshooting playbook for the **Composite Dual Cascade Subsystem** in Red Cliff (`g9666`). It covers data splitting, parallel cascade orchestration, near-win staggering, fast-stop interruptions, and symbol pooling.

---

## 🧭 Phase 1: Matrix Data Ingestion & Splitting Verification

- [ ] **Step 1.1: Verify PlaySession Data Keys Mapping**
  - Ensure `GameDataStore9666` properly maps `matrix`, `matrix0`, `fMx0`, `nMx0`, `formatMatrix`, `normalFormatMatrix`, `freeFormatMatrix`.
  - Check fallback default format: `['1111', '11111', '11111', '11111', '11111', '1111']` in `9666TableUtil.ts`.

- [ ] **Step 1.2: Verify 1D Array Splitting (`splitTopAndMainTable`)**
  - **Top Table (Horizontal 4 symbols)**: Must extract exactly indices across columns 2..5 (indices `[4, 9, 14, 19]`).
  - **Main Table (Vertical 6 columns)**: Must extract remaining symbols per column according to `formatSymbolSize`.
  - Ensure no off-by-one pointer desynchronization when parsing Mega symbols (`1x2`, `1x3`).

- [ ] **Step 1.3: Verify Mega Symbols Conversion**
  - Check `eno.SlotUtils.convertMegaSymbols(rawMatrix, formatMatrix)`.
  - Validate that multi-size symbols (`symbol_1_2`, `symbol_1_3`) properly occupy virtual matrix heights without corrupting adjacent symbol indices.

---

## 🧭 Phase 2: Dual Grid Spin & Stop Execution

- [ ] **Step 2.1: Spin Initiation (`_startSpinningTable`)**
  - Main vertical table initiates spin via `SlotTableModule9666.startSpin()`.
  - Top horizontal table initiates slide spin via `HorizontalTableModule9666.startSpin()`.
  - Verify event `RESET_MEGAWAY` is emitted before spin starts.

- [ ] **Step 2.2: Dual Stop Orchestration (`_stopSpinningTopTable` & `_stopSpinningTable`)**
  - Writer module must execute `_stopSpinningTopTable` first to stop the top horizontal reel.
  - Listen for `STACK_WILD_LANDED` if top reel stops with special symbols.
  - Stop vertical reels sequentially (columns 0 through 5) with column delays defined in `TableModuleConfig9666`.

- [ ] **Step 2.3: Fast-Stop / Turbo Interruption (`TABLE_FAST_STOP`)**
  - Verify `onForceStopRequested()` in `HorizontalTableModule9666` and `SlotTableModule9666`.
  - If user hits Space/Spin during spinning, `_pendingStopPromise` must immediately capture `stopSpin()`.
  - Ensure `SpeedDecorator(2, 3)` accelerates falling and landing times.

---

## 🧭 Phase 3: Cascade / Respin Cycle (`VerticalCascadeModule9666`)

- [ ] **Step 3.1: Disappear Phase (`startRespin`)**
  - `playDisappearAnimations()` triggers `PLAY_ANIMATION_DISAPPEAR` on winning symbols marked with `DROP_SYMBOL_CODE`.
  - Wait `0.45s / this.speed` for disappear animations to finish before dropping new symbols.

- [ ] **Step 3.2: Drop & Refill Calculation**
  - Existing non-winning symbols above the exploded holes drop downwards (`listDroppedSymbols`).
  - New symbols from the cascade refill matrix spawn above the viewport (`listNewSymbols`).

- [ ] **Step 3.3: Near-Win Staggering (`SETUP_NEARWIN_REFILL` & `DROP_NEARWIN_REFILL`)**
  - If Near-Win triggers during cascade refill, columns drop with incremental delays (`baseDelay + index * nearWinStaggerTime`).
  - Verify `calculatePosition()` applies delta bouncing (`DELTA_BOUNCING = 3px`) on landing.
  - Verify `RESET_NEARWIN_REFILL` cleans up camera shaking and particle effects once all columns settle.

---

## 🧭 Phase 4: Resume & Reconnect Verification

- [ ] **Step 4.1: Normal Game Resume Matrix Ingestion**
  - In `NormalGameWriterModule9666.makeScriptPreResumeGameMode()`, verify `_resumeNormalTable` calls `syncTable(getResumeMatrix())`.
  - Verify `removeAllSymbols()` cleans up previously pooled symbol instances.

- [ ] **Step 4.2: Free Game Resume Matrix Ingestion**
  - In `FreeGameWriterModule9666.makeScriptResumeGameMode()`, verify `_resumeFreeTable` correctly uses `freeFormatMatrix`.
  - Ensure all resumed symbols emit `PLAY_ANIMATION_IDLE`.

---

## 🐛 Bug Troubleshooting & Diagnostic Quick-Fix Table

| Symptom | Probable Cause | Verification & Fix Location |
| :--- | :--- | :--- |
| **Top table displays incorrect symbols on resume** | `splitTopAndMainTable` was given `formatMatrix` instead of `megaFormatMatrix`. | Check [`HorizontalTableModuleData9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Table/HorizontalTableModuleData9666.ts). |
| **Cascade freezes during Near-Win refill** | `_nearWinColumnDelays` scheduled callbacks did not resolve `_stopRespinCB`. | Check [`VerticalCascadeModule9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/GameModule/VerticalCascadeModule9666.ts). |
| **Symbols overlapping after Fast Stop** | Double invocation of `stopSpin()` caused multiple promises to race. | Verify `_pendingStopPromise` check in [`SlotTableModule9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotTableModule9666.ts). |
| **Wild Multiplier badge appears on 1x2 Mega symbol** | Multiplier badge anchor misaligned on non-1x1 symbols. | Verify `SPECIAL_SYMBOLS_1X1_ONLY` in [`TableModuleConfig9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Table/TableModuleConfig9666.ts). |
