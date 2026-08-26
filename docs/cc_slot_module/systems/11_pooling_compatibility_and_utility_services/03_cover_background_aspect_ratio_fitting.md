---
id: "cc_slot_module:systems:pooling_compatibility:cover_background_fitting"
title: "Cover Background Aspect Ratio Fitting"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "auto_scale_bg", "aspect_ratio", "letterbox_free"]
---

# 🖼️ Cover Background Aspect Ratio Fitting

---

## 1. Scaling Formula
`AutoScaleBackgroundModule` ensures background images completely fill the screen without distortion:

$$\text{scale} = \max\left(\frac{\text{frameWidth}}{\text{bgBaseWidth} \times \text{deviceScale}}, \frac{\text{frameHeight}}{\text{bgBaseHeight} \times \text{deviceScale}}\right)$$

This eliminates black letterbox bars on ultra-wide 21:9 monitors and 4:3 iPad tablets alike.
