---
id: "cc_core_lib:JackpotTrialManager:recipes:usage"
title: "Recipe: Practical JackpotTrialManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["JackpotTrialManager", "jackpot_trial_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `JackpotTrialManager` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { JackpotTrialManager } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new JackpotTrialManager();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `JackpotTrialManager` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
