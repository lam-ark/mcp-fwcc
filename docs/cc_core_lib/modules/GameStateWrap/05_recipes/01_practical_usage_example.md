---
id: "cc_core_lib:GameStateWrap:recipes:usage"
title: "Recipe: Practical GameStateWrap Integration in Slot Games"
category: "cc_core_lib"
tags: ["GameStateWrap", "game_state_wrap", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `GameStateWrap` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { GameStateWrap } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new GameStateWrap();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `GameStateWrap` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
