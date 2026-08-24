---
id: "cc_slot_module:FreeOptionDirectorModule:methods:index"
title: "FreeOptionDirectorModule Methods Index"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "methods", "index"]
---

# 📋 FreeOptionDirectorModule Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`enter(): void`](./enter.md)** | `public` | Resets countdown, updates timer label, starts tween, and enables buttons. |
| **[`optionClick(ev: any, optionId: number): void`](./optionClick.md)** | `public` | Disables buttons, stops timer, and emits `SEND_FREE_OPTION_REQUEST`. |
| **[`startCountDown(): void`](./startCountDown.md)** | `public` | Runs 1s repeating tween; triggers `_runAutoTrigger()` on 0. |
| **[`onEnableOptions(isEnable?: boolean): void`](./onEnableOptions.md)** | `public` | Sets `Button.interactable` for all options in `this.options`. |
| **[`updateCountdownText(timerCount: number): void`](./updateCountdownText.md)** | `public` | Formats countdown string into `countDownText` label. |
