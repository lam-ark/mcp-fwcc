---
id: "cc_slot_module:PortraitBetModule:methods:onMaxBetEnable"
title: "PortraitBetModule.onMaxBetEnable Method"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "methods", "onMaxBetEnable"]
---

# 📖 `PortraitBetModule.onMaxBetEnable()`

---

## 1. Method Overview & Signature

Updates the visibility of the Max Bet button based on whether the bet can still be increased.

```typescript
public onMaxBetEnable(maxBetEnable: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Invoker**: Called when active bet level changes.

---

## 3. Detailed Algorithmic Breakdown

1. Calls `super.onMaxBetEnable(maxBetEnable)`.
2. Sets `this.maxBetBtn.node.active = !maxBetEnable` (inverted logic so button disappears when maximum boundary is reached).

---

## 4. Caller & Callee Execution Graph

```mermaid
graph TD
  A[Bet Update] --> B[onMaxBetEnable]
  B --> C[super.onMaxBetEnable]
  B --> D[maxBetBtn.node.active = !maxBetEnable]
```

---

## 5. Parameters & Return Value Specification

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `maxBetEnable` | `boolean` | `true` if already at max bet limit. |

---

## 6. Complete Source Code Implementation

```typescript
onMaxBetEnable(maxBetEnable: boolean): void {
	super.onMaxBetEnable(maxBetEnable);
	this.maxBetBtn.node.active = !maxBetEnable;
}
```
