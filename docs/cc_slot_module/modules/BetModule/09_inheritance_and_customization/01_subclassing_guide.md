---
id: "cc_slot_module:BetModule:inheritance:subclassing_guide"
title: "BetModule Subclassing Guide"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ BetModule Subclassing Guide

---

## 1. Extension Strategy

- Override `setupObserver()` to watch custom multipliers or denomination formats.
- Override `playSfxIncreaseBet()` / `playSfxDecreaseBet()` for specialized audio triggers.
- Subclass `BetLabelModule` or `DenomLabel` to customize number formatting and currency symbols.
