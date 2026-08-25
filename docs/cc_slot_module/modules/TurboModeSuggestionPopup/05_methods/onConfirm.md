---
id: "cc_slot_module:TurboModeSuggestionPopup:methods:onConfirm"
title: "TurboModeSuggestionPopup.onConfirm Method"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "methods", "onConfirm"]
---

# 📖 `TurboModeSuggestionPopup.onConfirm()`

---

## 1. Method Overview & Signature

Confirms Turbo mode activation, suppresses repetitive prompts, and dispatches activation event.

```typescript
public onConfirm(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Trigger**: Player taps "Enable Turbo" / "OK" button.

---

## 3. Detailed Algorithmic Breakdown

1. Plays click SFX via `this.playSfxClick()`.
2. Suppresses further popups: `this.uiManagerData.setCanShowTurboIntro(false)`.
3. Emits `GameLogicUIEvents.ON_ACTIVE_FROM_TURBO_INTRO` to activate Turbo mode in game logic.
4. Hides modal: `this.node.active = false`.

---

## 4. Caller & Callee Execution Graph

```mermaid
graph TD
  A[Confirm Click] --> B[onConfirm]
  B --> C[playSfxClick]
  B --> D[setCanShowTurboIntro false]
  B --> E[emit ON_ACTIVE_FROM_TURBO_INTRO]
  B --> F[node.active = false]
```

---

## 5. Parameters & Return Value Specification

| Parameter | Type | Description |
| :--- | :--- | :--- |
| None | `void` | Button handler. |

---

## 6. Complete Source Code Implementation

```typescript
onConfirm(): void {
	this.playSfxClick();
	this.uiManagerData.setCanShowTurboIntro(false);
	this.gameLogic.emit(GameLogicUIEvents.ON_ACTIVE_FROM_TURBO_INTRO);
	this.node.active = false;
}
```
