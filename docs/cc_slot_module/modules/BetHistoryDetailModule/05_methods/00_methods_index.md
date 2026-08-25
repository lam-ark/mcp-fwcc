---
id: "cc_slot_module:BetHistoryDetailModule:methods:index"
title: "BetHistoryDetailModule Methods Index"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "index"]
---

# 📑 BetHistoryDetailModule Methods Index

---

## 1. Methods Table

| Method Name | Visibility | Parameters | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Binds node listeners, initializes NodePool, and hides initial views. |
| [`start`](start.md) | `public` | None | `void` | Calls setupObserver. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Observes BetHistoryDetailData and BetHistoryData fields. |
| [`enableNextBtn`](enableNextBtn.md) | `public` | `isEnableNext: boolean` | `void` | Toggles btnNext interactable state. |
| [`enablePreviousBtn`](enablePreviousBtn.md) | `public` | `isEnablePrev: boolean` | `void` | Toggles btnPrev interactable state. |
| [`initDetailView`](initDetailView.md) | `public` | `data: any` | `void` | Resets view and emits INIT_BET_DETAIL event. |
| [`onNextClick`](onNextClick.md) | `public` | None | `void` | Advances to next spin step. |
| [`onPrevClick`](onPrevClick.md) | `public` | None | `void` | Moves to previous spin step. |
| [`onBackClick`](onBackClick.md) | `public` | None | `void` | Closes detail view and emits CLOSE_BET_HISTORY_DETAIL_PANEL. |
| [`onScrollClick`](onScrollClick.md) | `public` | `index: number` | `void` | Requests step replay at specific tab index. |
| [`initScrollItem`](initScrollItem.md) | `public` | `scrollData: any[]` | `void` | Populates ScrollView tabs with pooled nodes. |
| [`enableTabHighlight`](enableTabHighlight.md) | `public` | `index: number` | `void` | Highlights active tab and scrolls ScrollView to focus offset. |
| [`hasScrollView`](hasScrollView.md) | `public` | None | `boolean` | Guard verifying ScrollView and content exist. |
| [`onRenderDataView`](onRenderDataView.md) | `public` | `data: any` | `void` | Renders either summaryView or gameModeView based on step type. |
| [`updateSummaryInfo`](updateSummaryInfo.md) | `public` | `_data: any` | `void` | Clears infoLabel during summary step. |
| [`updateGameModeInfo`](updateGameModeInfo.md) | `public` | `data: any` | `void` | Formats mode win amount and jackpot bonus text. |
| [`getCurrentData`](getCurrentData.md) | `public` | None | `any` | Returns current step data object. |
| [`updateCurrentModeLabel`](updateCurrentModeLabel.md) | `public` | `data: any` | `void` | Sets mode name title label in uppercase. |
| [`updateSessionGroup`](updateSessionGroup.md) | `public` | `data: any` | `void` | Emits SET_SESSION_ID to sessionGroup node. |
| [`resetSessionGroup`](resetSessionGroup.md) | `public` | None | `void` | Emits RESET_SESSION_ID to sessionGroup node. |
| [`_getScrollItem`](_getScrollItem.md) | `public` | None | `cc.Node` | Checks out tab item from pool or instantiates prefab. |
| [`_clearScrollItem`](_clearScrollItem.md) | `public` | None | `void` | Recycles all active tab items back into NodePool. |
| [`_resetBetDetailView`](_resetBetDetailView.md) | `public` | None | `void` | Resets child sub-views and clears labels. |
| [`_reset`](_reset.md) | `public` | None | `void` | Full reset of tabs, views, and session group. |
| [`hideCloseButton`](hideCloseButton.md) | `public` | `isFromHistoryScene: boolean` | `void` | Conditionally hides closeButton. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Releases all observer bindings. |
