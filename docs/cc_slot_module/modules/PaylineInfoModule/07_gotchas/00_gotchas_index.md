---
id: "cc_slot_module:PaylineInfoModule:gotchas:index"
title: "PaylineInfoModule Gotchas Index"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ PaylineInfoModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_unsupported_pay_system_type_crash`](./01_unsupported_pay_system_type_crash.md)** | Unmatched PAY_SYSTEM Math Type | HIGH | Setting an unhandled `gameConfig.PAY_SYSTEM` returns `undefined` from `convertPayLineInfo`, crashing string destructuring. |
| **[`02_missing_symbol_sprite_frame_mapping`](./02_missing_symbol_sprite_frame_mapping.md)** | Unmapped Small Symbol Sprite Assets | MEDIUM | If `smallSymbolFrames` misses symbol IDs, thumbnail displays null/empty sprite frames. |
