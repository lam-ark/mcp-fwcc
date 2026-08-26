---
id: "cc_core_lib:SpinButtonManager:recipes:usage"
title: "Recipe: Practical SpinButtonManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["SpinButtonManager", "spin_button_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `SpinButtonManager` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { SpinButtonManager } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new SpinButtonManager();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `SpinButtonManager` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
