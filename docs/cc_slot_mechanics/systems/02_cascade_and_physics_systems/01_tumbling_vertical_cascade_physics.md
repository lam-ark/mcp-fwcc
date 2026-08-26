---
id: "cc_slot_mechanics:systems:cascade_and_physics:tumbling_physics"
title: "Tumbling Vertical Cascade Physics & Gravity Math"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "tumbling_reels", "gravity_drop", "bounce_easing", "cascade_math"]
---

# ⬇️ Tumbling Vertical Cascade Physics & Gravity Math

---

## 1. Column Drop Distance Formula
For each column $c$ and row $r$:

$$\text{dropDistance}(c, r) = \sum_{k=0}^{r-1} \mathbb{I}(\text{cell}(c, k) = \text{EXPLODED}) \times \text{SYMBOL\_HEIGHT}$$

Tween timing is proportional to drop distance:
$$t = \text{baseDuration} + \text{dropRows} \times \text{rowDelay}$$
