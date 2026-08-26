---
id: "cc_core_lib:NetworkBridge:recipes:usage"
title: "Recipe: Practical NetworkBridge Integration in Slot Games"
category: "cc_core_lib"
tags: ["NetworkBridge", "network_bridge", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `NetworkBridge` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { NetworkBridge } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new NetworkBridge();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `NetworkBridge` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
