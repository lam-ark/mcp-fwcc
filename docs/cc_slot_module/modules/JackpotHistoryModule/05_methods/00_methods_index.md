---
id: "cc_slot_module:JackpotHistoryModule:methods:index"
title: "JackpotHistoryModule Methods Index"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "index"]
---

# 📑 JackpotHistoryModule Methods Index

---

## 1. Methods Table

| Method | Visibility | Parameters | Return | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Obtains model reference and sets up observers. |
| [`start`](start.md) | `public` | None | `void` | Localizes text and resets history state. |
| [`localizeText`](localizeText.md) | `public` | None | `void` | Updates textPage label string. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Binds observers to JackpotHistoryData. |
| [`onShowJackpotHistory`](onShowJackpotHistory.md) | `public` | `isActive: boolean` | `void` | Toggles popup visibility and triggers INIT_JACKPOT_HISTORY. |
| [`openPopup`](openPopup.md) | `public` | None | `void` | Dispatches INIT_JACKPOT_HISTORY payload. |
| [`resetJackpotHistory`](resetJackpotHistory.md) | `public` | None | `void` | Resets buttons, badges, and messages. |
| [`onShowRecordView`](onShowRecordView.md) | `public` | `data: any` | `void` | Populates recordView with winner list. |
| [`enableNextBtn`](enableNextBtn.md) | `public` | `isEnableNext: boolean` | `void` | Sets nextBtn interactable state. |
| [`enablePreviousBtn`](enablePreviousBtn.md) | `public` | `isEnablePrev: boolean` | `void` | Sets backBtn interactable state. |
| [`onShowLoading`](onShowLoading.md) | `public` | `isActive: boolean` | `void` | Toggles loading spinner. |
| [`onShowMessage`](onShowMessage.md) | `public` | `value: boolean` | `void` | Toggles error message node. |
| [`onUpdatePageIndex`](onUpdatePageIndex.md) | `public` | `index: number` | `void` | Updates page index label. |
| [`onNextPage`](onNextPage.md) | `public` | None | `void` | Emits REQUEST_JACKPOT_NEXT_PAGE. |
| [`onPrevPage`](onPrevPage.md) | `public` | None | `void` | Emits REQUEST_JACKPOT_PREVIOUS_PAGE. |
| [`onClose`](onClose.md) | `public` | None | `void` | Emits CLOSE_JACKPOT_HISTORY_PANEL. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Releases all observer subscriptions. |
