---
id: "cc_slot_module:TurboModeSuggestionPopup:methods:index"
title: "TurboModeSuggestionPopup Methods Index"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "methods", "index"]
---

# 📑 TurboModeSuggestionPopup Methods Index

---

## 1. Master Methods Overview

`TurboModeSuggestionPopup` prompts players to enable fast-play Turbo mode after consecutive normal spins.

---

## 2. Methods Table

| Method | Visibility | Parameters | Return | Summary Description |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Emits check event, binds observer to `canShowTurboIntro`, and sets initial inactive state. |
| [`start`](start.md) | `protected`| None | `void` | Localizes suggestion message text from game dictionary (`SUGGEST_TURBO`). |
| [`setupObserver`](setupObserver.md) | `public` | None | `void` | Observes `UIManagerData.canShowTurboIntro` to toggle modal visibility. |
| [`showTurboIntro`](showTurboIntro.md) | `public` | `canShowTurboIntro: boolean` | `void` | Sets node active flag according to suggestion eligibility. |
| [`onConfirm`](onConfirm.md) | `public` | None | `void` | Plays SFX, suppresses future suggestion popups, and emits `ON_ACTIVE_FROM_TURBO_INTRO`. |
| [`onCancel`](onCancel.md) | `public` | None | `void` | Plays SFX, suppresses future suggestion popups, and hides modal without enabling Turbo. |
| [`onDestroy`](onDestroy.md) | `public` | None | `void` | Unbinds observers on `UIManagerData`. |
