---
id: "cc_slot_module:JackpotWinNoticePopup:methods:index"
title: "JackpotWinNoticePopup Methods Index"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "index"]
---

# 📑 JackpotWinNoticePopup Methods Index

---

## 1. Methods Table

| Method | Visibility | Parameters | Return | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Binds observers and hides node. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Watches JackpotData.notifyJackpotInfo. |
| [`showWinNotice`](showWinNotice.md) | `public` | `data: { jpInfo, isMe }` | `void` | Filters local user and initiates winner display. |
| [`showNextWinner`](showNextWinner.md) | `public` | None | `void` | Schedules showCurrentWinner after delay. |
| [`showCurrentWinner`](showCurrentWinner.md) | `public` | None | `void` | Pops winner from queue and triggers fade-in sequence. |
| [`showInfo`](showInfo.md) | `public` | None | `void` | Populates name, win text, and currency labels. |
| [`hideCurrentWinner`](hideCurrentWinner.md) | `public` | None | `void` | Fades out banner and schedules next winner. |
| [`onClosePopup`](onClosePopup.md) | `public` | None | `void` | Dismisses current banner if in IDLE state. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Clears callbacks, tweens, and observer bindings. |
