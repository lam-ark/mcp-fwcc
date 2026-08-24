---
id: "cc_slot_module:IconPromotion:gotchas:promotional_badge_occlusion"
title: "Gotcha: UI Layer Occlusion"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "gotchas", "layering"]
---

# ⚠️ Gotcha: UI Layer Occlusion

---

## 1. Problem Description

If `IconPromotion` is nested under `MainGameBoard` instead of `Canvas/Director/UIManager/Promotion`, winning payline overlays and cascade blocks visually occlude the event badge.

---

## 2. Prevention

Always mount `IconPromotion` inside the top-level `UIManager` hierarchy.
