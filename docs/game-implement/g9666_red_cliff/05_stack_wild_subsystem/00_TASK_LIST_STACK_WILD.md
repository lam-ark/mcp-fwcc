---
id: "game-implement:9666:stack_wild:task_list"
title: "Red Cliff (g9666) Stack Wild Subsystem Step-by-Step Task & Debugging Checklist"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "stack_wild", "task_list", "debugging", "verification"]
---

# 📋 Red Cliff (g9666) Stack Wild Subsystem Step-by-Step Task & Debugging Checklist

---

## 🎯 Purpose & Scope

This checklist details testing, verification, and debugging procedures for the **Stack Wild Subsystem** (`StackWildModule`, `K2` Wild Symbol on top reel, full column expansion Spine effect, and event bus synchronization).

---

## 🧭 Phase 1: Stack Wild Symbol Identification & Landing

- [ ] **Step 1.1: Verify Top Reel K2 Symbol Ingestion**
  - Verify that `StackWildModuleData.getStackWildIndexes()` scans the top horizontal reel (reels 0..3 corresponding to Main Table reels 1..4 / columns 2..5).
  - Verify `symbolNode.emit('PLAY_ANIMATION', 'trigger')` on top reel `K2` symbol when landed (non-fast-to-result mode).

- [ ] **Step 1.2: Check Event Emission**
  - Verify `HorizontalTableModule9666` emits `STACK_WILD_LANDED` upon top horizontal reel stop.
  - Check MC state transition: `eventManager.emit('PLAY_MC_STATE', SpineStateMc9666.Expand)`.

---

## 🧭 Phase 2: Column Expansion & Spine Animation Sequence

- [ ] **Step 2.1: Column Effect Intro (`in` -> `loop`)**
  - `playColumnEffect(topTableReelIndex)` instantiates `columnEffectTemplate` (`sp.Skeleton`).
  - Play Spine track 0 animation `'in'` (non-loop) and await its complete listener.
  - Automatically queue `'loop'` animation in the background.

- [ ] **Step 2.2: Row-by-Row Symbol Reveal Loop**
  - For each vertical row in the column:
    - Spawn placeholder `STACK_WILD` symbol via `symbolManager.createSymbol('STACK_WILD', ...)`.
    - Emit `CHANGE_TO_SYMBOL` with `'K'`.
    - Emit `PLAY_ANIMATION_APPEAR`.
  - Re-raise column Spine effect layer (`raiseColumnEffectsToTop()`) after each row to avoid symbols rendering over the effect.
  - Apply `STACK_WILD_DELAY` (or `STACK_WILD_DELAY_TURBO` if Turbo mode active).

- [ ] **Step 2.3: Column Effect Outro (`out`)**
  - Play Spine animation `'out'` and deactivate the instance upon completion.

---

## 🧭 Phase 3: Synchronization to Main Table (`STACK_WILD_STOP`)

- [ ] **Step 3.1: Table Stop Hook**
  - In `GameWriterModule9666`, verify `_syncStackWild` triggers `moduleEvent.emit('STACK_WILD_STOP')`.
  - `StackWildModule.onTableStop()` awaits `_landedPromise`.
  - Emit `SYNC_STACK_WILD_TO_TABLE` with payload `{ mainReelIndex, symbolNodes }`.

- [ ] **Step 3.2: Symbol Replacement in Main Reel**
  - `SlotTableModule9666.onSyncStackWild()` replaces the original column symbols with the expanded Stack Wild nodes.

---

## 🐛 Bug Troubleshooting & Diagnostic Quick-Fix Table

| Symptom | Probable Cause | Verification & Fix Location |
| :--- | :--- | :--- |
| **Expanded Wild covered by new symbol rows** | Column Spine effect stayed below newly spawned symbols. | Verify `raiseColumnEffectsToTop()` in [`StackWildModule.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModule.ts#L239-L250). |
| **Grid hangs indefinitely during Turbo Spin** | `playColumnEffect` Promise never resolved because 'in' animation complete listener was interrupted. | Verify `_pendingInResolvers` cleanup in [`StackWildModule.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModule.ts#L286-L298). |
| **Ghost Wild symbols remaining on board next spin** | `clearAllStackWilds()` did not return nodes to `symbolManager`. | Check [`StackWildModule.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModule.ts#L324-L335). |
