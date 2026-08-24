---
id: "cc_slot_module:PaylineSymbolModule:gotchas:z_index_sorting_clipping_glitch"
title: "Gotcha: Symbol Win Animation Clipping by Reel Masks"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "gotchas", "clipping", "mask"]
---

# 🛑 Gotcha: Symbol Win Animation Clipping by Reel Masks

---

## 1. Symptom & Visual Defect

Large Spine symbol win animations (such as characters extending beyond cell boundaries) get sliced at the left/right edges of their respective reel columns.

---

## 2. Root Cause

If `PaylineSymbolModule.container` is positioned inside the Reel Column hierarchy under `cc.Mask`, any animation extending beyond the column rect is truncated.

---

## 3. Standard Code Fix

Ensure `this.container` is assigned to a top-level overlay Node outside of the Reel masking hierarchy (e.g. `BoardG/Payline/WinSymbolsLayer`), allowing `eno.changeParent(symbol, this.container)` to elevate winning symbols above all masks.
