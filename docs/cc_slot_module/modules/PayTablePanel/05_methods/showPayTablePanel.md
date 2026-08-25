---
id: "cc_slot_module:PayTablePanel:methods:showPayTablePanel"
title: "PayTablePanel.showPayTablePanel Method"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "methods", "showPayTablePanel"]
---

# 📖 `PayTablePanel.showPayTablePanel()`

---

## 1. Method Overview & Signature

Toggles popup modal visibility and resets the scroll position to the top header when opened.

```typescript
public showPayTablePanel(isActive: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Invoker**: Reactively triggered when `UIManagerData.isPayTablePanelOpen` changes.

---

## 3. Detailed Algorithmic Breakdown

1. Calls `this.togglePopup(isActive)` to run fade/slide popup behavior.
2. If `isActive` is `true`, executes `this.scrollView.scrollToTop(0)` to reset scroll offset.

---

## 4. Caller & Callee Execution Graph

```mermaid
graph TD
  A[UIManagerData: isPayTablePanelOpen] --> B[showPayTablePanel]
  B --> C[togglePopup]
  B --> D[scrollView.scrollToTop]
```

---

## 5. Parameters & Return Value Specification

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `isActive` | `boolean` | `true` to display paytable; `false` to dismiss. |

---

## 6. Complete Source Code Implementation

```typescript
showPayTablePanel(isActive: boolean): void {
	this.togglePopup(isActive);
	if (isActive) {
		if (this.scrollView) {
			this.scrollView.scrollToTop(0);
		}
	}
}
```
