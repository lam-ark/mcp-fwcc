---
id: "cc_slot_module:BetHistoryDetailModule:properties:inspector_properties"
title: "BetHistoryDetailModule Inspector Properties"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BetHistoryDetailModule Inspector Properties

---

## 1. Inspector Property Schema

| Property Name | Type | Default | When Set | Where Read | Impact If Desynced |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `scrollItem` | `cc.Prefab` | `null` | Inspector Drag & Drop | `_getScrollItem()` | Cannot instantiate tab buttons; crash on detail view open. |
| `scrollView` | `cc.ScrollView` | `null` | Inspector Drag & Drop | `enableTabHighlight()` | Cannot scroll tab list horizontally. |
| `scrollContent` | `cc.Node` | `null` | Inspector Drag & Drop | `initScrollItem()` | Tab buttons cannot be mounted. |
| `summaryView` | `cc.Node` | `null` | Inspector Drag & Drop | `onRenderDataView()` | Summary step view cannot be rendered. |
| `gameModeView` | `cc.Node` | `null` | Inspector Drag & Drop | `onRenderDataView()` | Matrix step snapshot view cannot be rendered. |
| `btnNext` | `cc.Button` | `null` | Inspector Drag & Drop | `enableNextBtn()` | Next step navigation button disabled. |
| `btnPrev` | `cc.Button` | `null` | Inspector Drag & Drop | `enablePreviousBtn()` | Previous step navigation button disabled. |
| `closeButton` | `cc.Button` | `null` | Inspector Drag & Drop | `hideCloseButton()` | Cannot close or return to list view. |
| `infoLabel` | `cc.Label` | `null` | Inspector Drag & Drop | `updateGameModeInfo()` | Step payout and jackpot label blank. |
| `payableView` | `cc.Node` | `null` | Inspector Drag & Drop | `onRenderDataView()` | Line win breakdown list missing. |
| `currentModeLabel`| `cc.Label` | `null` | Inspector Drag & Drop | `updateCurrentModeLabel()`| Mode name header blank. |
| `sessionGroup` | `cc.Node` | `null` | Inspector Drag & Drop | `updateSessionGroup()` | Session ID footer text missing. |
