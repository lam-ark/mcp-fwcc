---
id: "cc_slot_module:IntroGameModule:gotchas:index"
title: "IntroGameModule Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ IntroGameModule Gotchas & Engine Defects Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_local_storage_parse_corrupt_crash`](./01_local_storage_parse_corrupt_crash.md)** | Corrupted `localStorage` Data Throws `JSON.parse` Exception | HIGH | Non-JSON text in `sys.localStorage.getItem("HideIntroGame")` throws syntax error, preventing game startup. |
