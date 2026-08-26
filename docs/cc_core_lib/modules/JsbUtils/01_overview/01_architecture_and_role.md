---
id: "cc_core_lib:JsbUtils:overview:architecture"
title: "JsbUtils Architectural Role & Runtime Integration"
category: "cc_core_lib"
tags: ["JsbUtils", "jsb_utils", "cc_core_lib", "overview", "eno", "cc-wrap-func", "architecture"]
---

# 🏛️ `JsbUtils` Architectural Role & Runtime Integration

- **Package Source**: `assets/cc-common/cc-core-lib/cc-wrap-func`
- **Global Namespace Anchor**: `eno.JsbUtils` / `globalThis.eno.JsbUtils`
- **Inheritance Hierarchy**: `JsbUtils` ➔ `Object`

---

## 1. Architectural Mission

`JsbUtils` is an essential logic component within **`cc-wrap-func`**. It encapsulates dedicated business rules, lifecycle hooks, and optimized runtime performance tailored for high-framerate ($60\text{ FPS}$) Cocos Creator 2.4 slot games.

```mermaid
graph TD
    SuperClass[Object] --> TargetClass[JsbUtils]
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
