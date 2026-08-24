---
id: "cc_slot_module:UIManagerModule:inheritance:subclassing_guide"
title: "UIManagerModule Subclassing Guide"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ UIManagerModule Subclassing Guide

---

## 1. Extension Strategy

- Subclass `UIManagerModule`.
- Override `showUIForGameMode(gameMode)` to inject custom mode HUD arrangements.
- Override `showBonusGameUI()` for pick-and-click mini-game HUD screens.
