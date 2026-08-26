---
id: "cc_core_lib:LightningGame:recipes:usage"
title: "Recipe: Practical LightningGame Integration in Slot Games"
category: "cc_core_lib"
tags: ["LightningGame", "lightning_game", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `LightningGame` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { LightningGame } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new LightningGame();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `LightningGame` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
