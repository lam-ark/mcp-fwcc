---
id: "cc_core_lib:GameInfoManager:recipes:usage"
title: "Recipe: Practical GameInfoManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["GameInfoManager", "game_info_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `GameInfoManager` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { GameInfoManager } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new GameInfoManager();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `GameInfoManager` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
