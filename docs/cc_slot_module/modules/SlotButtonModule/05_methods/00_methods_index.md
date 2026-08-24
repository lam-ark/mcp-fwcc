---
id: "cc_slot_module:SlotButtonModule:methods:index"
title: "SlotButton Ecosystem Methods Catalog Index"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "SlotButtonSpine", "SlotButtonSprite", "cc_slot_module", "methods", "index"]
---

# 📚 SlotButton Ecosystem Methods Catalog Index

---

## 1. Declared Methods Index (All 29 Methods Across Ecosystem)

| Method Name | Scope Class | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `SlotButtonModule` | `void` | Registers button node with Director and triggers `setup()`. |
| **[`setup`](./setup.md)** | `SlotButtonModule` | `void` | Resolves touch node reference and initializes data model observer. |
| **[`onEnable`](./onEnable.md)** | `SlotButtonModule` | `void` | Binds keyboard event listeners. |
| **[`onDisable`](./onDisable.md)** | `SlotButtonModule` | `void` | Removes keyboard event listeners. |
| **[`setupObserver`](./setupObserver.md)** | `SlotButtonModule` | `void` | Virtual hook for observing reactive state streams. |
| **[`addEventListeners`](./addEventListeners.md)** | `SlotButtonModule` | `void` | Binds `SystemEvent.EventType.KEY_UP` handler. |
| **[`removeEventListeners`](./removeEventListeners.md)**| `SlotButtonModule` | `void` | Unbinds `SystemEvent.EventType.KEY_UP` handler. |
| **[`onKeyUp`](./onKeyUp.md)** | `SlotButtonModule` | `void` | Dispatches `TRIGGER_SPACE_BUTTON` when Spacebar is tapped. |
| **[`onSpinClick`](./onSpinClick.md)** | `SlotButtonNormal` | `void` | Dispatches `NORMAL_SPIN_CLICKED` on tap. |
| **[`onStopClick`](./onStopClick.md)** | `SlotButtonNormal` | `void` | Dispatches `STOP_BUTTON_NORMAL_CLICKED` for fast stop. |
| **[`onTouchStart`](./onTouchStart.md)** | `SlotButtonNormal` | `void` | Arms $0.7\text{s}$ `holdAction` timer for auto spin. |
| **[`onTouchCancel`](./onTouchCancel.md)** | `SlotButtonNormal` | `void` | Cancels scheduled `holdAction` timer. |
| **[`onSpinHover`](./onSpinHover.md)** | `SlotButtonNormal` | `void` | Emits `NORMAL_SPIN_HOVERED`. |
| **[`onSpinExitHover`](./onSpinExitHover.md)** | `SlotButtonNormal` | `void` | Emits `NORMAL_SPIN_CANCEL_HOVERED`. |
| **[`playSfxSpin`](./playSfxSpin.md)** | `SlotButtonNormal` | `void` | Plays spin click sound effect. |
| **[`onChangeButtonState`](./onChangeButtonState.md)**| `SlotButtonNormal` | `void` | Swaps text sprites between Hold to Auto and Press to Stop. |
| **[`onChangeSpinState`](./onChangeSpinState.md)** | `SlotButtonNormal` | `void` | Synchronizes auto spin flag in GameSettings. |
| **[`onChangeTextHoldToAuto`](./onChangeTextHoldToAuto.md)**| `SlotButtonNormal` | `void` | Displays `textHoldToAuto` sprite. |
| **[`onChangeTextPressToStop`](./onChangeTextPressToStop.md)**| `SlotButtonNormal` | `void` | Displays `textPressToStop` sprite. |
| **[`onChangeDisplayState`](./onChangeDisplayState.md)**| `SlotButtonNormal` | `void` | Emits `SPIN_BUTTON_STATE_CHANGE` to display node. |
| **[`cancelButtonEvents`](./cancelButtonEvents.md)**| `SlotButtonNormal` | `void` | Aborts touch events and unschedules timers. |
| **[`showPromotionUI`](./showPromotionUI.md)** | `SlotButtonNormal` | `void` | Manages promotion badge visibility and disables auto spin. |
| **[`onSwitchingMode`](./onSwitchingMode.md)** | `SlotButtonNormal` | `void` | Manages input disabling during mode switches. |
| **[`playAnimIdle`](./playAnimIdle.md)** | `SlotButtonSpine` | `void` | Plays looping idle animation. |
| **[`playAnimHover`](./playAnimHover.md)** | `SlotButtonSpine` | `void` | Plays hover overlay animation. |
| **[`stopAnimHover`](./stopAnimHover.md)** | `SlotButtonSpine` | `void` | Stops hover overlay animation. |
| **[`playAnimSpinToStop`](./playAnimSpinToStop.md)** | `SlotButtonSpine` | `void` | Plays spin-to-stop transition animation. |
| **[`onStateChange`](./onStateChange.md)** | `SlotButtonSpine` | `void` | State event dispatcher for view renderers. |
| **[`onDestroy`](./onDestroy.md)** | `SlotButtonModule` | `void` | Cleans up observer subscriptions. |
