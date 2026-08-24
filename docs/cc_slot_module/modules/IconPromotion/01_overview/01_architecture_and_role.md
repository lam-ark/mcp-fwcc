---
id: "cc_slot_module:IconPromotion:overview:architecture_and_role"
title: "IconPromotion Architectural Role & Promotional Event HUD"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "overview", "architecture", "promotion"]
---

# 🏛️ IconPromotion Architectural Role & Promotional Event HUD

---

## 1. Architectural Mission

`IconPromotion` manages promotional badges and event icons mounted under `Canvas/Director/UIManager/Promotion`. It observes `eno.PromotionData.isActive` to dynamically display tournament / mission event tags and pairs with `SlotPromotionSpinTimes` to display free promotional round counters.

```mermaid
graph TD
    Server[Promotion API / WebSocket] --> Model[eno.PromotionData]
    Model -->|Observer isActive| IP[IconPromotion]
    IP -->|node.active = isActive| Badge[Promotion Badge / Icon]
```

---

## 2. Key Responsibilities

1. **Promotion Visibility Control (`showPromotion`)**:
   - Observes reactive `PromotionData.isActive` and mounts/unmounts promotional badges.
2. **Complementary Countdown Display (`SlotPromotionSpinTimes`)**:
   - Renders remaining rounds for operator marketing campaigns and free tournament spins.
