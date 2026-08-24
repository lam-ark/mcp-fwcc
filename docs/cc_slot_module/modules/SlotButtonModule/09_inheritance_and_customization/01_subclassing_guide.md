---
id: "cc_slot_module:SlotButtonModule:inheritance:subclassing_guide"
title: "SlotButtonModule Subclassing Guide"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotButtonModule Subclassing Guide

---

## 1. Extension Strategy

- Subclass `SlotButtonModule` for mode-specific variants (`SlotButtonNormal`, `SlotButtonFree`, `SlotButtonLightning`).
- Override `onTouchStart()` or `onSpinClick()` to dispatch appropriate `GameLogicUIEvents`.
- Override `setupObserver()` to watch custom data model properties.
