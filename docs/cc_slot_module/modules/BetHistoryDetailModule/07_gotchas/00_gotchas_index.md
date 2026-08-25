---
id: "cc_slot_module:BetHistoryDetailModule:gotchas:index"
title: "BetHistoryDetailModule Gotchas Index"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BetHistoryDetailModule Gotchas Index

---

## 1. Engine Gotchas Summary

| Gotcha Slug | Severity | Problem Summary |
| :--- | :--- | :--- |
| [`01_node_pool_leak_on_repeated_reopen`](01_node_pool_leak_on_repeated_reopen.md) | High | Unreturned scroll items create unbounded NodePool allocation when opening multiple detail views. |
| [`02_scrollview_offset_negative_bounce`](02_scrollview_offset_negative_bounce.md) | Medium | ScrollView scroll offset calculation without clamping causes elastic overshoot on low step counts. |
