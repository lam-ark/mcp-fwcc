---
id: "cc_slot_module:WinAmountTooltipModule:properties:inspector_properties"
title: "WinAmountTooltipModule Inspector Properties"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ WinAmountTooltipModule Inspector Properties

---

## 1. Properties Table

| Property | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `featureSprite` | `cc.Sprite` | `null` | Sprite displaying moving feature tip art. |
| `featureSfs` | `CustomFeatureText[]`| `[]` | Array of feature tip sprite frames and pixel widths. |
| `winTextSprite` | `cc.Sprite` | `null` | Header sprite showing "WIN" or "TOTAL WIN". |
| `winTextSpriteFrame`| `cc.SpriteFrame` | `null` | "WIN" title sprite frame. |
| `totalWinTextSpriteFrame`| `cc.SpriteFrame`| `null` | "TOTAL WIN" title sprite frame. |
| `fadeTime` | `number` | `0.5` | Fade transition time. |
| `delayTime` | `number` | `1.5` | Center hold duration. |
| `movingTime` | `number` | `5` | Horizontal sliding duration. |
