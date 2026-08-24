---
id: "cc_slot_module:JackpotModule:recipes:four_tier_progressive_banner_setup"
title: "Recipe: Setting Up a 4-Tier Progressive Jackpot Banner"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "recipes", "progressive_banner"]
---

# 💡 Recipe: Setting Up a 4-Tier Progressive Jackpot Banner

---

## 1. Scene Setup & Item Binding

1. Create 4 child label nodes under `Canvas/Director/Jackpot`: `Grand`, `Major`, `Minor`, `Mini`.
2. Attach `JackpotLabel` to each label node.
3. In `JackpotModule` Inspector, add 4 items to `jackpotItems` array:
   - Index 0: `label: Grand`, `jackpotType: GRAND`
   - Index 1: `label: Major`, `jackpotType: MAJOR`
   - Index 2: `label: Minor`, `jackpotType: MINOR`
   - Index 3: `label: Mini`, `jackpotType: MINI`
