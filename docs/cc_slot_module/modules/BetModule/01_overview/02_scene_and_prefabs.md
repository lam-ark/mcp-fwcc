---
id: "cc_slot_module:BetModule:overview:scene_and_prefabs"
title: "BetModule Scene Node Hierarchy"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ BetModule Scene Node Hierarchy

---

## 1. Canonical Hierarchy Placement

Mounted at `Canvas/Director/UIManager/Bet`:

```text
Canvas/Director/UIManager/Bet [Component: BetModule]
├── BtnDecrease [cc.Button, Component: Button]
├── BtnIncrease [cc.Button, Component: Button]
├── DenomLabel [Component: DenomLabel, cc.Label]
├── TotalBetLabel [Component: TotalBetLabel, cc.Label]
├── TotalLineLabel [cc.Label]
└── TotalCreditLabel [cc.Label]
```
