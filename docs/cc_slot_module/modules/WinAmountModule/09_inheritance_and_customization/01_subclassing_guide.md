---
id: "cc_slot_module:WinAmountModule:inheritance:subclassing_guide"
title: "WinAmountModule Subclassing Guide"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ WinAmountModule Subclassing Guide

---

## 1. Subclassing Strategy

- Override `playWinEffect()` and `stopWinEffect()` to trigger custom Spine auras or coin fountains.
- Override `_updateLabelWinAmount()` to add custom prefixes, suffixes, or currency symbols.
