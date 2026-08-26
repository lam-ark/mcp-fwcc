---
id: "cc_core_lib:NodeUtils:overview:architecture"
title: "NodeUtils Architectural Role & Runtime Integration"
category: "cc_core_lib"
tags: ["NodeUtils", "node_utils", "cc_core_lib", "overview", "eno", "cc-wrap-func", "architecture"]
---

# 🏛️ `NodeUtils` Architectural Role & Runtime Integration

- **Package Source**: `assets/cc-common/cc-core-lib/cc-wrap-func`
- **Global Namespace Anchor**: `eno.NodeUtils` / `globalThis.eno.NodeUtils`
- **Inheritance Hierarchy**: `NodeUtils` ➔ `Object`

---

## 1. Architectural Mission

`NodeUtils` is an essential logic component within **`cc-wrap-func`**. It encapsulates dedicated business rules, lifecycle hooks, and optimized runtime performance tailored for high-framerate ($60\text{ FPS}$) Cocos Creator 2.4 slot games.

```mermaid
graph TD
    SuperClass[Object] --> TargetClass[NodeUtils]
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
