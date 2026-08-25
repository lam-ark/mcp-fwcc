---
id: "cc_slot_module:BetSelectionPanel:methods:calculateOffsetY"
title: "BetSelectionPanel.calculateOffsetY Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "calculateOffsetY", "coordinate_math"]
---

# 📖 `BetSelectionPanel.calculateOffsetY()`

---

## 1. Method Overview & Signature

Calculates the exact vertical ScrollView pixel scroll offset required to align a specific bet option row with the central selection window.

```typescript
public calculateOffsetY(index: number): number
```

---

## 2. Mathematical Formula

Given:
- $i = \text{index}$ (target bet option zero-based index)
- $H = \text{scrollItemHeight}$ (height of each BetSelectionItem node)
- $B = \text{bufferTop}$ (count of top buffer padding rows, typically 1)

The vertical scroll offset is calculated by:
$$\text{offsetY} = i \times H + (B - 1) \times H$$

---

## 3. Parameters & Return Value Specification

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | Zero-based index of the target bet option in `totalBetItems`. |

| Return Type | Description |
| :--- | :--- |
| `number` | Exact Y-axis pixel offset for `scrollToOffset()`. |

---

## 4. Complete Source Code Implementation

```typescript
calculateOffsetY(index: number): number {
	const scrollItem = this.totalBetItems[index];
	const scrollItemHeight = scrollItem.node.height;
	return index * scrollItemHeight + (this.bufferTop - 1) * scrollItemHeight;
}
```
