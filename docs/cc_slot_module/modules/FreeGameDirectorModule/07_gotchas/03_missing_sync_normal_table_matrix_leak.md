---
id: "cc_slot_module:FreeGameDirectorModule:gotcha:missing_sync_normal_table_matrix_leak"
title: "Gotcha: Missing Normal Table Sync Causes Blank Transition Reels"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "gotchas", "syncNormalTable"]
---

# ⚠️ Gotcha: Missing Normal Table Sync Causes Blank Transition Reels

## 1. Defect Symptom
Free Game opens with empty symbol columns while waiting for the first spin payload.

---

## 2. Root Cause Analysis
If `syncNormalTable()` is omitted during `enter()`, the Free Game table does not ingest the landing matrix from the Base Game spin that triggered the feature.

---

## 3. Recommended Resolution
Ensure `syncNormalTable()` runs inside `enter()` whenever `!isResume`.
