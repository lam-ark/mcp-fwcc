---
id: "cc_core_lib:BetHistoryManager:recipes:usage"
title: "Recipe: Practical BetHistoryManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetHistoryManager", "bet_history_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetHistoryManager` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { BetHistoryManager } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new BetHistoryManager();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `BetHistoryManager` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
