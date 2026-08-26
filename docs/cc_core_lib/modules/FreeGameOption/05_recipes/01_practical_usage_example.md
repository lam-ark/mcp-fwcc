---
id: "cc_core_lib:FreeGameOption:recipes:usage"
title: "Recipe: Practical FreeGameOption Integration in Slot Games"
category: "cc_core_lib"
tags: ["FreeGameOption", "free_game_option", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `FreeGameOption` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { FreeGameOption } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new FreeGameOption();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `FreeGameOption` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
