---
id: "cc_slot_module:NormalGameWriterModule:gotchas:index"
title: "NormalGameWriterModule Gotchas Index"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ NormalGameWriterModule Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_omitting_resume_wallet_in_final_script`](./01_omitting_resume_wallet_in_final_script.md)** | Player wallet balance freezes and never updates after spin ends. | Overriding `makeScriptShowResultFinal` without including `_resumeWallet`. | 🔴 Critical (Balance Desync) |
