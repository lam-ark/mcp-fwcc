---
id: "game-implement:9666:multiplier:task_list"
title: "Red Cliff (g9666) Multiplier Subsystem Step-by-Step Task & Debugging Checklist"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "multiplier", "task_list", "debugging", "verification"]
---

# 📋 Red Cliff (g9666) Multiplier Subsystem Step-by-Step Task & Debugging Checklist

---

## 🎯 Purpose & Scope

This checklist covers verification, debugging, and testing steps for the **Multiplier Subsystem** in Red Cliff (`g9666`), including `K1-<multiplier>` symbol parsing, floating particle collection to HUD banner, base multiplier offsets by game mode, and reload/reconnect synchronization.

---

## 🧭 Phase 1: Symbol Parsing & Badge Display Verification

- [ ] **Step 1.1: Verify Symbol Code Parsing**
  - Check `K1-<multiplier>` parsing via `SlotSymbolModule9666.extractMultiplier()`.
  - Validate that `lbMultiplier.string` displays `"x" + multiplier` only for `multiplier > 1`.
  - Ensure regular non-multiplier symbols have `multiplierLabel.node.active = false` and `string = ''`.

- [ ] **Step 1.2: Verify Symbol Spine Tracks**
  - Multiplier Wilds (`K1`) must play `idle_multi` on track 0 when idling.
  - On winning participate, verify `coming_win_appear` $\rightarrow$ `coming_win_idle`.

---

## 🧭 Phase 2: Collection & Flight Animation Verification

- [ ] **Step 2.1: Collection Filter (`CollectMultiModule9666`)**
  - Verify `_collectWildMultiplier` queries `CollectMultiModuleData.getK1Symbols()`.
  - Ensure uncollected filter checks `!symbolModule.hasCollectedMultiplier`.
  - If `afterMulti <= previouseMulti`, collection must resolve immediately without animations.

- [ ] **Step 2.2: Floating Particle Trajectory (`CollectMultiItem9666`)**
  - Particle item spawned from `itemPool` and positioned in `flyParent` (Canvas layer).
  - Check `NodeUtils.setZIndex(itemNode, 99999, true)` so it flies above all reel symbols.
  - Settle at `targetWorldPos` (Global Multiplier Banner on HUD).

- [ ] **Step 2.3: Base Subtraction & Event Emission**
  - In Normal Game at base multiplier `x1`: `sumMultiplier -= 1` to prevent double-counting.
  - Emit `ADD_MULTIPLIER` and trigger punch-scale animation (1.4 $\rightarrow$ 1.0) on HUD label.

---

## 🧭 Phase 3: Reload / Reconnect Verification

- [ ] **Step 3.1: No-Combine Reload**
  - If user reloads and matrix has no winning payway: **SKIP** all multiplier animations.
  - Retain base multiplier on HUD (`x1` in Normal, `x2` in Free).

- [ ] **Step 3.2: Has-Combine Reload**
  - If user reloads with active winning payway containing `K1`:
    1. **SKIP** Multiplier Wild fly animation.
    2. Fast-forward Global Multiplier HUD to the **post-addition value**.
    3. Hide multiplier label on `K1` symbol nodes.
    4. Replay winning combine animation.

---

## 🐛 Bug Troubleshooting & Diagnostic Quick-Fix Table

| Symptom | Probable Cause | Verification & Fix Location |
| :--- | :--- | :--- |
| **Old multiplier label appears on regular symbol** | Symbol recycled from pool without clearing label. | Check [`SlotSymbolModule9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotSymbolModule9666.ts#L80-L95). |
| **HUD Multiplier shows 1 instead of added sum on Free Game resume** | `_collectWildMultiplier` commented out in `FreeGameWriterModule9666`. | Check [`FreeGameWriterModule9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameWriterModule9666.ts#L12-L14). |
| **Particle flying under top reels** | Flying node parented to table reel rather than Canvas root. | Check [`CollectMultiModule9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Gui/CollectMultiModule9666.ts#L127-L142). |
