---
id: "cc_slot_module:GameConfig:gotcha:table_format_column_mismatch"
title: "Gotcha: TABLE_FORMAT Column Count Matrix Mismatch"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "gotchas", "TABLE_FORMAT", "matrix", "column_mismatch", "crash"]
---

# 🛑 Gotcha: `TABLE_FORMAT` Column Count Matrix Mismatch

## 1. Symptom & Visual Defect
Reels fail to stop, or the game crashes when receiving the spin result packet:
```text
TypeError: Cannot read property 'length' of undefined
at SlotTableModule.setMatrix (SlotTableModule.ts:180)
```

---

## 2. Root Cause & Technical Defect
`TABLE_FORMAT` defines the expected columns and row heights (e.g. `[3, 3, 3, 3, 3]` for 5 reels). If backend server matrix JSON contains a different dimension (e.g. 6 reels `[3, 3, 3, 3, 3, 3]`), column index out-of-bounds occurs during reel mapping.

---

## 3. Standard Code Solution & Fix
Ensure `TABLE_FORMAT` length in `GameConfig` exactly matches the server paytable matrix schema:

```typescript
// For 5-reel standard games:
public readonly TABLE_FORMAT: number[] = [3, 3, 3, 3, 3];

// For 6-reel Megaways games:
public readonly TABLE_FORMAT: number[] = [4, 5, 5, 5, 5, 4];
```
