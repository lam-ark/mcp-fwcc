---
id: "cc_slot_module:BetSelectionPanel:properties:inspector_properties"
title: "BetSelectionPanel Inspector Properties"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BetSelectionPanel Inspector Properties

---

## 1. Properties Table

| Property | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `betSelectionItem` | `cc.Prefab` | `null` | Row item prefab with label and highlight. |
| `scrollViewDenom` | `cc.ScrollView`| `null` | Denomination scroll view. |
| `scrollViewTotal` | `cc.ScrollView`| `null` | Total bet scroll view. |
| `scrollContentDenom`| `cc.Node` | `null` | Denomination content parent with Layout. |
| `scrollContentTotal`| `cc.Node` | `null` | Total bet content parent with Layout. |
| `totalCreditLabel` | `cc.Label` | `null` | Player total credit label. |
| `maxBetBtn` | `cc.Button` | `null` | Shortcut to select highest wager. |
| `scrollTime` | `number` | `0.15` | Tween snap duration in seconds. |
| `bufferTop` | `number` | `1` | Top empty buffer rows. |
| `bufferBot` | `number` | `1` | Bottom empty buffer rows. |
