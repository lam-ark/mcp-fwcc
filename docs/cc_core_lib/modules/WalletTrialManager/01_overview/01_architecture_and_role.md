---
id: "cc_core_lib:WalletTrialManager:overview:architecture"
title: "WalletTrialManager Architectural Role & Runtime Integration"
category: "cc_core_lib"
tags: ["WalletTrialManager", "wallet_trial_manager", "cc_core_lib", "overview", "eno", "slot-base-logic", "architecture"]
---

# 🏛️ `WalletTrialManager` Architectural Role & Runtime Integration

- **Package Source**: `assets/cc-common/cc-core-lib/slot-base-logic`
- **Global Namespace Anchor**: `eno.WalletTrialManager` / `globalThis.eno.WalletTrialManager`
- **Inheritance Hierarchy**: `WalletTrialManager` ➔ `WalletManager`

---

## 1. Architectural Mission

`WalletTrialManager` is an essential logic component within **`slot-base-logic`**. It encapsulates dedicated business rules, lifecycle hooks, and optimized runtime performance tailored for high-framerate ($60\text{ FPS}$) Cocos Creator 2.4 slot games.

```mermaid
graph TD
    SuperClass[WalletManager] --> TargetClass[WalletTrialManager]
    TargetClass --> InternalState[State & Properties]
    TargetClass --> Consumers[GameDirector / Table / UI Consumers]
```

---

## 2. Core Responsibilities

1. **Deterministic Lifecycle Orchestration**:
   - Manages state machine transitions with zero uncontrolled side-effects.
2. **Memory & Performance Optimization**:
   - Zero-allocation design preventing Garbage Collection (GC) spikes during high-frequency spin loops.
3. **Cross-Platform Resilience**:
   - Normalizes engine quirks between iOS WebAudio, Android touch dispatchers, and desktop WebGL canvas adapters.
