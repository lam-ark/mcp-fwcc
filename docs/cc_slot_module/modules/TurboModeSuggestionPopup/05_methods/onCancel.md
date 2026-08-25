---
id: "cc_slot_module:TurboModeSuggestionPopup:methods:onCancel"
title: "TurboModeSuggestionPopup.onCancel Method"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "methods", "onCancel"]
---

# 📖 `TurboModeSuggestionPopup.onCancel()`

---

## 1. Method Overview & Signature

Dismisses Turbo mode suggestion and suppresses future popups for the current session.

```typescript
public onCancel(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Trigger**: Player taps "Cancel" / "X" button.

---

## 3. Detailed Algorithmic Breakdown

1. Plays click SFX via `this.playSfxClick()`.
2. Suppresses further popups: `this.uiManagerData.setCanShowTurboIntro(false)`.
3. Hides modal: `this.node.active = false`.

---

## 4. Caller & Callee Execution Graph

```mermaid
graph TD
  A[Cancel Click] --> B[onCancel]
  B --> C[playSfxClick]
  B --> D[setCanShowTurboIntro false]
  B --> E[node.active = false]
```

---

## 5. Parameters & Return Value Specification

| Parameter | Type | Description |
| :--- | :--- | :--- |
| None | `void` | Button handler. |

---

## 6. Complete Source Code Implementation

```typescript
onCancel(): void {
	this.playSfxClick();
	this.uiManagerData.setCanShowTurboIntro(false);
	this.node.active = false;
}
```
