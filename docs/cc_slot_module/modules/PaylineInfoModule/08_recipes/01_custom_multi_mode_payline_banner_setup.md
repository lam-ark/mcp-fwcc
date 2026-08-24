---
id: "cc_slot_module:PaylineInfoModule:recipes:custom_multi_mode_payline_banner_setup"
title: "Recipe: Setting Up Mode-Specific Payline Toast Banners"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "recipes", "multi_mode"]
---

# 💡 Recipe: Setting Up Mode-Specific Payline Toast Banners

---

## 1. Scene Structure & Inspector Configuration

1. Create `NormalPaylineInfo` node under `Canvas/Director/UIManager`.
   - Set `useAcrossAllGameModes = false`, `gameMode = NORMAL_GAME`.
2. Create `FreePaylineInfo` node under `Canvas/Director/UIManager`.
   - Set `useAcrossAllGameModes = false`, `gameMode = FREE_GAME`.
3. Drag `smallSymbolFrames` into both components.
