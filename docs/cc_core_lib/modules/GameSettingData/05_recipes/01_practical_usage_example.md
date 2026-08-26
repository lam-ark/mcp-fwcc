---
id: "cc_core_lib:GameSettingData:recipes:usage"
title: "Recipe: Practical GameSettingData Integration in Slot Games"
category: "cc_core_lib"
tags: ["GameSettingData", "game_setting_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `GameSettingData` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { GameSettingData } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new GameSettingData();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `GameSettingData` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
