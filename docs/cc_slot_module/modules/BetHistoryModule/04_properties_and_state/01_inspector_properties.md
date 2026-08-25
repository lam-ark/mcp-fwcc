---
id: "cc_slot_module:BetHistoryModule:properties:inspector_properties"
title: "BetHistoryModule Inspector Properties"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BetHistoryModule Inspector Properties

---

## 1. Serialized Property Table

| Property Name | Type | Default | When Set | Where Read | Impact If Desynced |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `itemPerPage` | `number` | `5` | Editor Inspector | `openPopup()`, `onRecordDataChange()` | Wrong count of items requested per page. |
| `recordView` | `cc.Node` | `null` | Editor Drag & Drop | `showRecordView()`, `onRecordDataChange()` | `NullPointerException` when rendering record rows. |
| `detailView` | `cc.Node` | `null` | Editor Drag & Drop | `onShowingDetail()` | Detailed round replay panel fails to open. |
| `nextBtn` | `cc.Button` | `null` | Editor Drag & Drop | `enableNextBtn()`, `resetBetHistory()` | Player unable to advance to next page. |
| `backBtn` | `cc.Button` | `null` | Editor Drag & Drop | `enablePreviousBtn()`, `resetBetHistory()` | Player unable to navigate to previous page. |
| `closeBtn` | `cc.Button` | `null` | Editor Drag & Drop | `hideCloseButton()` | Cannot close modal or hide button in external history scene. |
| `loading` | `cc.Node` | `null` | Editor Drag & Drop | `onEnableLoading()` | Spinner overlay does not appear during network latency. |
| `messageNode` | `cc.Node` | `null` | Editor Drag & Drop | `onShowMessage()`, `resetBetHistory()` | Empty/Error message container does not show. |
| `messageLabel`| `cc.Label` | `null` | Editor Drag & Drop | `onUpdateMessage()`, `onShowMessage()` | Text description of empty/error state is blank. |
| `pageIndexNode`| `cc.Node` | `null` | Editor Drag & Drop | `onPageIndexChange()`, `resetBetHistory()` | Current page badge container is missing. |
| `pageIndexLabel`| `cc.Label` | `null` | Editor Drag & Drop | `onPageIndexChange()` | Current page number number label is blank. |
| `textPage` | `cc.Label` | `null` | Editor Drag & Drop | `localizeText()` | Localized string "Page" is not applied. |
