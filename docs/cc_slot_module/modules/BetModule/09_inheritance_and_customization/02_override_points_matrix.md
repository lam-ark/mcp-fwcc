---
id: "cc_slot_module:BetModule:inheritance:override_points_matrix"
title: "BetModule Override Points Matrix"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 BetModule Override Points Matrix

---

## 1. Extension Matrix

| Method | Scope | Super Required | Purpose |
| :--- | :--- | :--- | :--- |
| `start` | `public` | Recommended | Model binding and initial disable state. |
| `setupObserver` | `public` | Optional | Custom data field subscriptions. |
| `onIncreaseBet` / `onDecreaseBet` | `public` | Recommended | Stepper action overrides. |
| `playSfxIncreaseBet` / `playSfxDecreaseBet` | `public` | Optional | Audio cue custom routing. |
