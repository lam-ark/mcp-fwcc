---
id: "cc_slot_module:WinAmountTooltipModule:methods:index"
title: "WinAmountTooltipModule Methods Index"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "index"]
---

# 📑 WinAmountTooltipModule Methods Index

---

## 1. Master Methods Overview

`WinAmountTooltipModule` is the dual-purpose status ticker and rolling win presentation component in portrait layouts.

---

## 2. Methods Table

| Method | Visibility | Parameters | Return | Summary Description |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Subscribes to global tooltip events, game mode join events, and hides initial labels. |
| [`onJoinGameSuccess`](onJoinGameSuccess.md) | `public` | `data: any` | `void` | Displays unsettled win amounts upon session reconnection or starts feature hint ticker. |
| [`showWinAmount`](showWinAmount.md) | `public` | `payload: any` | `void` | Swaps to `WIN_AMOUNT` mode, displays "WIN" sprite, and executes rolling count-up. |
| [`showTotalWinAmount`](showTotalWinAmount.md) | `public` | `payload: any` | `void` | Swaps to `WIN_AMOUNT` mode, displays "TOTAL WIN" sprite, and executes rolling count-up. |
| [`hideWinAmount`](hideWinAmount.md) | `public` | None | `void` | Clears win count-up numbers and hides header sprites. |
| [`showText`](showText.md) | `public` | None | `void` | Runs self-chaining infinite sliding tween loop cycling through promotional feature tip banners. |
| [`showWinText`](showWinText.md) | `public` | `isTotalWin: boolean` | `void` | Swaps header sprite between "WIN" and "TOTAL WIN" sprite frames. |
| [`hideText`](hideText.md) | `public` | None | `void` | Hides feature hint sprite nodes. |
| [`hideTooltip`](hideTooltip.md) | `public` | None | `void` | Clears win presentation and returns to idle text ticker state. |
| [`stopAllTweens`](stopAllTweens.md) | `public` | None | `void` | Cancels all active sliding and fade tweens to prevent memory leaks and glitching. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Halts all active tweens and invokes superclass cleanup. |
