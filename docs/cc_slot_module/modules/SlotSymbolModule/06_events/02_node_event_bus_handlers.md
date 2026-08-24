---
id: "cc_slot_module:SlotSymbolModule:events:node_event_handlers"
title: "SlotSymbolModule Local Node Event Handlers"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "events", "node_events", "emit"]
---

# 🔔 SlotSymbolModule Local Node Event Handlers

---

## 1. Registered Local Node Events (`registerEvents`)

`SlotSymbolModule` binds local events to `this.node` for decoupled trigger orchestration:

| Event Name | Handler Method | Trigger Source |
| :--- | :--- | :--- |
| `INIT` | `init()` | `SlotSymbolManager.createSymbol()` |
| `PLAY_ANIMATION` | `playAnimation()` | Custom director animations |
| `STOP_ANIMATION` | `stopAnimation()` | Table reset / payline cycle stop |
| `PLAY_ANIMATION_APPEAR` | `playAnimationAppear()` | `SlotReelModule.playStopAnimation()` on bounce landing |
| `PLAY_ANIMATION_IDLE` | `playAnimationIdle()` | Mode entrance |
| `PLAY_ANIMATION_WIN` | `playAnimationWin()` | `PaylineSymbolModule` win presentation |
| `ENABLE_HIGHLIGHT` | `enableHighlight()` | Payline drawer |
| `DISABLE_HIGHLIGHT` | `disableHighlight()` | Payline dimming filter |
| `RESET` | `reset()` | Scene reset |
| `SHOW_STATIC` | `showStatic()` | Reel stop |
| `HIDE_STATIC` | `hideStatic()` | Spine start |
| `CHANGE_TO_SYMBOL` | `changeToSymbol()` | Target symbol assignment |
| `CHANGE_TO_BLUR_SYMBOL` | `changeToBlurSymbol()` | Reel roll start |
