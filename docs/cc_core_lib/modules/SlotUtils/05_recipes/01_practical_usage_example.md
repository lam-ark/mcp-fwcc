---
id: "cc_core_lib:SlotUtils:recipes:usage"
title: "Recipe: Practical SlotUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["SlotUtils", "slot_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `SlotUtils` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { SlotUtils } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new SlotUtils();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `SlotUtils` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
