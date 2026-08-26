---
id: "cc_core_lib:WaitingSceneData:recipes:usage"
title: "Recipe: Practical WaitingSceneData Integration in Slot Games"
category: "cc_core_lib"
tags: ["WaitingSceneData", "waiting_scene_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `WaitingSceneData` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { WaitingSceneData } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new WaitingSceneData();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `WaitingSceneData` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
