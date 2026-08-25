---
id: "cc_slot_module:PortraitBetModule:methods:onMinBetEnable"
title: "PortraitBetModule.onMinBetEnable Method"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "methods", "onMinBetEnable"]
---

# 📖 `PortraitBetModule.onMinBetEnable()`

---

## 1. Method Overview & Signature

Updates the visibility of the Min Bet button based on whether the bet can still be decreased.

```typescript
public onMinBetEnable(minBetEnable: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Invoker**: Called when active bet level changes.

---

## 3. Detailed Algorithmic Breakdown

1. Calls `super.onMinBetEnable(minBetEnable)`.
2. Sets `this.minBetBtn.node.active = !minBetEnable` (inverted logic so button disappears when minimum boundary is reached).

---

## 4. Caller & Callee Execution Graph

```mermaid
graph TD
  A[Bet Update] --> B[onMinBetEnable]
  B --> C[super.onMinBetEnable]
  B --> D[minBetBtn.node.active = !minBetEnable]
```

---

## 5. Parameters & Return Value Specification

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `minBetEnable` | `boolean` | `true` if already at min bet limit. |

---

## 6. Complete Source Code Implementation

```typescript
onMinBetEnable(minBetEnable: boolean): void {
	super.onMinBetEnable(minBetEnable);
	this.minBetBtn.node.active = !minBetEnable;
}
```
