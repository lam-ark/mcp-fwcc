---
id: "cc_core_lib:NormalGameWriter:recipes:usage"
title: "Recipe: Practical NormalGameWriter Integration in Slot Games"
category: "cc_core_lib"
tags: ["NormalGameWriter", "normal_game_writer", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `NormalGameWriter` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { NormalGameWriter } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new NormalGameWriter();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `NormalGameWriter` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
