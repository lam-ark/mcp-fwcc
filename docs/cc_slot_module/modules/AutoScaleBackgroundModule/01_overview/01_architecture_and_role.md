---
id: "cc_slot_module:AutoScaleBackgroundModule:overview:architecture_and_role"
title: "AutoScaleBackgroundModule Architectural Role & Background Cover Scaler"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "overview", "architecture", "background_scaling", "cover_scale"]
---

# 🏛️ AutoScaleBackgroundModule Architectural Role & Background Cover Scaler

---

## 1. Architectural Mission

`AutoScaleBackgroundModule` (declared as class `AutoScaleBackground`) is the **aspect-ratio preserving background cover scaler** mounted on main game backgrounds (`Canvas/Director/GameMode/BG_MainG`). It guarantees letterbox-free cover scaling across arbitrary device screen resolutions by calculating:

$$\text{scale} = \max\left(\frac{\text{widthView}}{\text{convertWithBG}}, \frac{\text{heightView}}{\text{convertHeightBG}}\right)$$

```mermaid
graph TD
    Resize[Window resize / canvas-resize event] --> ASB[AutoScaleBackground]
    ASB --> Math[Compute ratioW and ratioH against frame size]
    Math --> Apply[this.node.scale = max ratioW, ratioH]
```
