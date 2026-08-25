---
id: "cc_slot_module:BetHistoryModule:methods:index"
title: "BetHistoryModule Methods Index"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "index"]
---

# 📑 BetHistoryModule Methods Index

---

## 1. Master Method Summary Table

| Method Name | Visibility | Parameters | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Initializes component and binds observers. |
| [`init`](init.md) | `public` | None | `void` | Hides page node and subscribes to OPEN_BET_DETAIL event. |
| [`start`](start.md) | `public` | None | `void` | Configures initial view visibilities and resets buttons. |
| [`localizeText`](localizeText.md) | `public` | None | `void` | Translates page header label. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Binds observers to BetHistoryData fields. |
| [`showContent`](showContent.md) | `public` | `isActive: boolean` | `void` | Dispatches open popup or standalone view. |
| [`showBetHistory`](showBetHistory.md) | `public` | `isActive: boolean` | `void` | Toggles popup animation and triggers INIT_BET_HISTORY. |
| [`openPopup`](openPopup.md) | `public` | None | `void` | Emits INIT_BET_HISTORY payload. |
| [`resetBetHistory`](resetBetHistory.md) | `public` | None | `void` | Resets buttons, badges, and message labels. |
| [`showRecordView`](showRecordView.md) | `public` | `isActive: boolean` | `void` | Toggles active state of recordView. |
| [`enableNextBtn`](enableNextBtn.md) | `public` | `isEnableNext: boolean` | `void` | Sets interactable state of nextBtn. |
| [`enablePreviousBtn`](enablePreviousBtn.md) | `public` | `isEnablePrev: boolean` | `void` | Sets interactable state of backBtn. |
| [`onNextPage`](onNextPage.md) | `public` | None | `void` | Handles click on Next Page button. |
| [`onPrevPage`](onPrevPage.md) | `public` | None | `void` | Handles click on Prev Page button. |
| [`onClose`](onClose.md) | `public` | None | `void` | Handles click on Close button. |
| [`openBetDetail`](openBetDetail.md) | `public` | `data: any` | `void` | Forwards detail open request to gameLogic. |
| [`hideCloseButton`](hideCloseButton.md) | `public` | `isFromHistoryScene: boolean` | `void` | Toggles closeBtn visibility based on scene mode. |
| [`onEnableLoading`](onEnableLoading.md) | `public` | `isActive: boolean` | `void` | Toggles loading spinner overlay. |
| [`onUpdateMessage`](onUpdateMessage.md) | `public` | `value: string` | `void` | Updates message label text. |
| [`onRecordDataChange`](onRecordDataChange.md) | `public` | `value: any` | `void` | Updates recordView with newly fetched row data. |
| [`onShowingDetail`](onShowingDetail.md) | `public` | `isOpen: boolean` | `void` | Toggles detailView active state and passes detailData. |
| [`onShowMessage`](onShowMessage.md) | `public` | `isActive: boolean` | `void` | Toggles error/empty message display node. |
| [`onPageIndexChange`](onPageIndexChange.md) | `public` | `index: number` | `void` | Updates page index label and badge visibility. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Releases all observer bindings. |
