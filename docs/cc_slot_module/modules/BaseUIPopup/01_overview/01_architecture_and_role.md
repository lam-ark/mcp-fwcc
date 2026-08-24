---
id: "cc_slot_module:BaseUIPopup:overview:architecture_and_role"
title: "BaseUIPopup Architectural Role & Abstract Modal Base Class"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "overview", "architecture", "popup_base"]
---

# 🏛️ BaseUIPopup Architectural Role & Abstract Modal Base Class

---

## 1. Architectural Mission

`BaseUIPopup` is the abstract base class for all modal dialogs in the slot game engine (`BetHistoryModule`, `JackpotHistoryModule`, `SettingPanel`, `InfoPanel`, `JackpotWinNoticePopup`). It standardizes popup transition behaviors (`PopupBehavior` / `FadePopupBehavior` / `SlidePopupBehavior`), handles sound playback on user interaction (`playSFXClick`), dispatches `CLOSE_ALL_POPUPS` to `GameLogic`, and manages animated show/hide lifecycles with completion callbacks (`togglePopup`).

```mermaid
graph TD
    Parent[BaseUIPopup] --> BH[BetHistoryModule]
    Parent --> JH[JackpotHistoryModule]
    Parent --> SP[SettingPanel]
    Parent --> IP[InfoPanel]
    Parent --> JN[JackpotWinNoticePopup]
    
    Parent -->|Delegates animations to| PB[PopupBehavior: FadePopupBehavior / SlidePopupBehavior]
```

---

## 2. Key Responsibilities

1. **Popup Behavior Delegation (`popupBehavior`)**:
   - Automatically attaches or acquires a `PopupBehavior` component (defaults to `FadePopupBehavior` if absent).
2. **Standardized Show / Hide API (`togglePopup` / `activePopup`)**:
   - Executes animated show/hide transitions with optional completion callbacks.
3. **Global Popup Dismissal (`closeAllPopups`)**:
   - Emits `GameLogicUIEvents.CLOSE_ALL_POPUPS` to cleanly dismiss all active dialogs.
