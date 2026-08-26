---
id: "cc_core_lib:overview:architecture"
title: "cc-core-lib Architecture & Global Runtime Kernel"
category: "cc_core_lib"
tags: ["cc_core_lib", "overview", "architecture", "kernel", "eno"]
---

# 🏛️ `cc-core-lib` Architecture & Global Runtime Kernel

---

## 1. Global Plugin Injection (`window.eno` / `globalThis.eno`)

`cc-core-lib` compiles into self-executing UMD/IIFE bundles loaded as Cocos Creator **Plugin Scripts**:
```typescript
// Global access across all game scripts
const { MoneyTween, HowlerSoundPlayer, FloatUtils, NodeUtils, inject, provide } = globalThis.eno;
```
