---
id: "cc_core_lib:HowlerSoundPlayer:recipes:usage"
title: "Recipe: Practical HowlerSoundPlayer Integration in Slot Games"
category: "cc_core_lib"
tags: ["HowlerSoundPlayer", "howler_sound_player", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `HowlerSoundPlayer` Integration

---

## 1. Standard Initialization & Usage

```typescript
import { HowlerSoundPlayer } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new HowlerSoundPlayer();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `HowlerSoundPlayer` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
