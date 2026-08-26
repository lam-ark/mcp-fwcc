---
id: "cc_core_lib:BaseManager:recipes:usage"
title: "Recipe: Practical BaseManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["BaseManager", "base_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BaseManager` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { BaseManager } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new BaseManager();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `BaseManager` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
