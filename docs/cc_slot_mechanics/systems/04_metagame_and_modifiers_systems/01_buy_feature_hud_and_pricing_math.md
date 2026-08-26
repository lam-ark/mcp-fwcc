---
id: "cc_slot_mechanics:systems:metagame_modifiers:buy_feature"
title: "Buy Feature HUD & Pricing Math"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "buy_feature", "feature_buy", "pricing_math", "bonus_buy"]
---

# 🛒 Buy Feature HUD & Pricing Math

---

## 1. Pricing Formula
$$\text{Buy Price} = \text{Total Bet} \times \text{Feature Multiplier (e.g. 100x)}$$
Validates player balance, deducts funds, and triggers `GameModeDirectorModule` directly into `FREE_GAME` without normal spinning.
