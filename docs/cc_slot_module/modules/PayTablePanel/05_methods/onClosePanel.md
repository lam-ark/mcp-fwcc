---
id: "cc_slot_module:PayTablePanel:methods:onClosePanel"
title: "PayTablePanel.onClosePanel Method"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "methods", "onClosePanel"]
---

# 📖 `PayTablePanel.onClosePanel()`

---

## 1. Method Overview & Signature

Handles the close button click, validating animation states and dispatching dismissal events.

```typescript
public onClosePanel(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Trigger**: Player taps the close button on the paytable header.

---

## 3. Detailed Algorithmic Breakdown

1. Checks `if (this.popupBehavior && this.popupBehavior.isPlaying()) return;` to prevent animation collisions.
2. Plays click SFX via `this.playSfxClick()`.
3. Emits `GameLogicUIEvents.CLOSE_PAY_TABLE_PANEL` to `gameLogic`.

---

## 4. Caller & Callee Execution Graph

```mermaid
graph TD
  A[CloseBtn Click] --> B[onClosePanel]
  B --> C[Check isPlaying]
  B --> D[playSfxClick]
  B --> E[emit CLOSE_PAY_TABLE_PANEL]
```

---

## 5. Parameters & Return Value Specification

| Parameter | Type | Description |
| :--- | :--- | :--- |
| None | `void` | Button click handler. |

---

## 6. Complete Source Code Implementation

```typescript
onClosePanel(): void {
	if (this.popupBehavior && this.popupBehavior.isPlaying()) {
		return;
	}
	this.playSfxClick();
	this.gameLogic.emit(GameLogicUIEvents.CLOSE_PAY_TABLE_PANEL);
}
```
