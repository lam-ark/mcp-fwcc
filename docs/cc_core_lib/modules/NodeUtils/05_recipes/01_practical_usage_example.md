---
id: "cc_core_lib:NodeUtils:recipes:usage"
title: "Recipe: Practical NodeUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["NodeUtils", "node_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `NodeUtils` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { NodeUtils } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new NodeUtils();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `NodeUtils` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
