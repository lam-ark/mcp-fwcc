---
id: "cc_slot_module:BetSelectionPanel:methods:index"
title: "BetSelectionPanel Methods Index"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "index"]
---

# 📑 BetSelectionPanel Methods Index

---

## 1. Master Methods Overview

`BetSelectionPanel` coordinates dual synchronized ScrollViews (`scrollViewDenom` and `scrollViewTotal`) to provide a mobile-friendly bet selection wheel. The table below catalogs all public and lifecycle methods with their execution roles.

---

## 2. Methods Table

| Method | Visibility | Parameters | Return | Summary Description |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Binds touch/wheel events on both ScrollViews, establishes data observers, and initializes layout coordinates. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Registers reactive watchers on `BetData` and `UIManagerData` for bet changes and modal visibility. |
| [`init`](init.md) | `public` | None | `void` | Builds the list of selectable bet items and adds top/bottom buffer padding for center alignment. |
| [`selectCurrentBet`](selectCurrentBet.md) | `public` | None | `void` | Forces layout recalculation and instantly scrolls both columns to the currently active bet ID. |
| [`calculateOffsetY`](calculateOffsetY.md) | `public` | `index: number` | `number` | Computes the exact vertical ScrollView pixel offset for a target bet tier row index. |
| [`findClosestItemIndex`](findClosestItemIndex.md) | `public` | `scrollOffsetY: number` | `number` | Discretizes continuous scroll position into the nearest valid bet item index using rounding math. |
| [`onSelectMaxBet`](onSelectMaxBet.md) | `public` | None | `void` | Shortcut handler scrolling both wheels to the maximum available bet tier. |
| [`setHighlight`](setHighlight.md) | `public` | None | `void` | Updates the visual gold glow frame and label color on the active row across both wheels. |
| [`onConfirmBet`](onConfirmBet.md) | `public` | None | `void` | Emits the `UPDATE_BET_ID` event to the game logic if the bet changed, and dismisses the panel. |
| [`getBetId`](getBetId.md) | `public` | None | `string` | Returns the composite bet key combining the main bet level with any active extra/ante bet suffix. |
| [`scrollItemClick`](scrollItemClick.md) | `public` | `betId: string, isDenom: boolean` | `void` | Handles direct player taps on individual row items in either the denomination or total bet wheel. |
| [`onScrollViewEnd`](onScrollViewEnd.md) | `public` | `isDenom: boolean` | `void` | Snaps the released wheel to the nearest discrete item and synchronizes the follower wheel via tween. |
| [`onScrollToBetId`](onScrollToBetId.md) | `public` | `isDenom: boolean, offsetY: number, isForce?: boolean` | `void` | Orchestrates coordinated tween scrolling between the primary and follower ScrollViews. |
| [`onBetSelectionPanelOpen`](onBetSelectionPanelOpen.md) | `public` | `isOpen: boolean` | `void` | Toggles popup modal visibility and triggers opening animations and initial bet centering. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Cancels active scrolling tweens and safely releases all registered data model observer bindings. |
