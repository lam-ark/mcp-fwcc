---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:index"
title: "BetHistoryDetailPortrait Methods Index"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "index"]
---

# 📑 BetHistoryDetailPortrait Methods Index

---

## 1. Master Methods Overview

`BetHistoryDetailPortrait` manages compact spin history replays and step-by-step respin navigation for mobile portrait layouts.

---

## 2. Methods Table

| Method | Visibility | Parameters | Return | Summary Description |
| :--- | :--- | :--- | :--- | :--- |
| [`initDetailView`](initDetailView.md) | `public` | `data: any` | `void` | Emits `INIT_BET_DETAIL` with `RESPIN_PORTAIT` history type or delegates to superclass. |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Watches next/previous respin enabled and active flags on `BetHistoryDetailData`. |
| [`activeNextRespinBtn`](activeNextRespinBtn.md) | `public` | `isActiveNextRespin: boolean` | `void` | Controls node visibility of `nextRespinBtn`. |
| [`activePreviousRespinBtn`](activePreviousRespinBtn.md)| `public` | `isActivePrevRespin: boolean` | `void` | Controls node visibility of `prevRespinBtn`. |
| [`enableNextRespinBtn`](enableNextRespinBtn.md) | `public` | `isEnableNextRespin: boolean` | `void` | Sets interactability of `nextRespinBtn`. |
| [`enablePreviousRespinBtn`](enablePreviousRespinBtn.md)| `public` | `isEnablePrevRespin: boolean` | `void` | Sets interactability of `prevRespinBtn`. |
| [`onPreviousRespinBtnClick`](onPreviousRespinBtnClick.md)| `public` | None | `void` | Plays audio, resets respin view, and emits `BET_DETAIL_RESPIN_PREVIOUS_PAGE`. |
| [`onNextRespinBtnClick`](onNextRespinBtnClick.md) | `public` | None | `void` | Plays audio, resets respin view, and emits `BET_DETAIL_RESPIN_NEXT_PAGE`. |
| [`resetGameModeRespin`](resetGameModeRespin.md) | `public` | None | `void` | Emits `RESET_GAME_MODE_VIEW` and clears round info label text. |
| [`updateGameModeInfo`](updateGameModeInfo.md) | `public` | `data: any` | `void` | Formats respin mode title and total win or jackpot payout string. |
