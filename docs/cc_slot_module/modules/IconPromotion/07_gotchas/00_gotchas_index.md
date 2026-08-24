---
id: "cc_slot_module:IconPromotion:gotchas:index"
title: "IconPromotion Gotchas Index"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ IconPromotion Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_promotional_state_observer_leak`](./01_promotional_state_observer_leak.md)** | Unreleased Observer on PromotionData | HIGH | Failing to call `releaseAll` in `onDestroy()` leaks observer callbacks on reload. |
| **[`02_promotional_badge_occlusion`](./02_promotional_badge_occlusion.md)** | UI Layer Occlusion | MEDIUM | Placing promotional icons under reel layers causes visual clipping during active rounds. |
