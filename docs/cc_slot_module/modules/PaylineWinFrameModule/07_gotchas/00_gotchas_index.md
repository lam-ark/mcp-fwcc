---
id: "cc_slot_module:PaylineWinFrameModule:gotchas:index"
title: "PaylineWinFrameModule Engine Gotchas Index"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ PaylineWinFrameModule Engine Gotchas Index

---

## 1. Known Gotchas Summary

| Gotcha Document | Symptom | Severity | Engine Subsystem |
| :--- | :--- | :--- | :--- |
| **[`01_unpooled_winframe_instantiation_lag.md`](./01_unpooled_winframe_instantiation_lag.md)** | Frame drop during Big Win due to continuous `instantiate(this.template)` calls. | `MEDIUM` | Memory / GC |
