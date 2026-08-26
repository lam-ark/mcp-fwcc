---
id: "cc_core_lib:TurboButtonManager:recipes:usage"
title: "Recipe: Practical TurboButtonManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["TurboButtonManager", "turbo_button_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `TurboButtonManager` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { TurboButtonManager } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new TurboButtonManager();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `TurboButtonManager` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
