---
id: "cc_slot_module:PaylineInfoModule:gotchas:missing_symbol_sprite_frame_mapping"
title: "Gotcha: Unmapped Small Symbol Sprite Assets"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "gotchas", "sprite_mapping"]
---

# ⚠️ Gotcha: Unmapped Small Symbol Sprite Assets

---

## 1. Problem Description

`_symbolAssets` maps sprite frame asset names to lookup keys. If sprite frame asset names do not match `${smallSymbolPrefix}${symbolId}`, `sprSymbol.spriteFrame` resolves to `undefined` and leaves the thumbnail blank.

---

## 2. Prevention

Ensure sprite frame asset names match symbol definitions (e.g. `sym_A`, `sym_K`, `sym_10`) and assign `smallSymbolPrefix = "sym_"`.
