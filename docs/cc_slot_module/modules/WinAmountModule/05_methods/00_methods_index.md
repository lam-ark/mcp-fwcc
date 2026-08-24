---
id: "cc_slot_module:WinAmountModule:methods:index"
title: "WinAmountModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "index"]
---

# 📚 WinAmountModule Methods Catalog Index

---

## 1. Declared Methods Index (All 16 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Binds update, fast-update, clear, fade-out, and sync events. |
| **[`updateWinAmount`](./updateWinAmount.md)** | `public` | `Promise<void>`| Initiates animated win count-up and returns an awaitable Promise. |
| **[`fastUpdateWinAmount`](./fastUpdateWinAmount.md)**| `public` | `void` | Accelerates active count-up tween on player skip. |
| **[`syncWinAmount`](./syncWinAmount.md)** | `public` | `void` | Hydrates win amount instantly from session data. |
| **[`clearWinAmount`](./clearWinAmount.md)** | `public` | `void` | Resets labels and cached values to 0. |
| **[`fadeOutNumber`](./fadeOutNumber.md)** | `public` | `void` | Fades out label opacity over specified duration. |
| **[`playWinEffect`](./playWinEffect.md)** | `public` | `void` | Virtual hook to play win tier particle/Spine effects. |
| **[`stopWinEffect`](./stopWinEffect.md)** | `public` | `void` | Virtual hook to stop win tier effects. |
| **[`_tweenWinAmount`](./_tweenWinAmount.md)** | `private` | `void` | Drives `moneyTween.runNumber()` count-up loop. |
| **[`_updateLabelWinAmount`](./_updateLabelWinAmount.md)**| `private`| `void` | Formats and assigns string to `labelWinAmount`. |
| **[`_resetLabel`](./_resetLabel.md)** | `private` | `void` | Stops tweens and restores label opacity to 255. |
| **[`resetCallBack`](./resetCallBack.md)** | `public` | `void` | Resolves and clears active completion Promise callback. |
| **[`stopTweenFade`](./stopTweenFade.md)** | `public` | `void` | Stops active `_tweenFade` animation handle. |
| **[`stopTweenValue`](./stopTweenValue.md)** | `public` | `void` | Stops active `_tweenValue` animation handle. |
| **[`resetAllEffectAndTasks`](./resetAllEffectAndTasks.md)**| `protected`| `void`| Clears win score during scene resets. |
| **[`onDestroy`](./onDestroy.md)** | `public` | `void` | Stops tweens upon component destruction. |
