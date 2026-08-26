---
id: "cc_core_lib:BonusGameData:recipes:usage"
title: "Recipe: Practical BonusGameData Integration in Slot Games"
category: "cc_core_lib"
tags: ["BonusGameData", "bonus_game_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BonusGameData` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { BonusGameData } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new BonusGameData();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `BonusGameData` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
