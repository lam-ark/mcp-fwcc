---
id: "cc_slot_module:PortraitBetModule:methods:onMinBetClick"
title: "PortraitBetModule.onMinBetClick Method"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "methods", "onMinBetClick"]
---

# 📖 `PortraitBetModule.onMinBetClick()`

---

## 1. Method Overview & Signature

Emits a toast notification when player taps the Min Bet shortcut button.

```typescript
public onMinBetClick(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Trigger**: Player taps `minBetBtn`.

---

## 3. Detailed Algorithmic Breakdown

1. Emits `GameUIEvents.UI_TOAST.HIT_MIN_BET` to `eventManager` to display toast banner.

---

## 4. Caller & Callee Execution Graph

```mermaid
graph TD
  A[minBetBtn Click] --> B[onMinBetClick]
  B --> C[eventManager.emit HIT_MIN_BET]
```

---

## 5. Parameters & Return Value Specification

| Parameter | Type | Description |
| :--- | :--- | :--- |
| None | `void` | Button event handler. |

---

## 6. Complete Source Code Implementation

```typescript
onMinBetClick(): void {
	this.eventManager.emit(GameUIEvents.UI_TOAST.HIT_MIN_BET);
}
```
