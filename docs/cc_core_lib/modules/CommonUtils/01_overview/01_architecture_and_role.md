---
id: "cc_core_lib:CommonUtils:overview:architecture"
title: "CommonUtils Architectural Role & Runtime Integration"
category: "cc_core_lib"
tags: ["CommonUtils", "common_utils", "cc_core_lib", "overview", "eno", "share-lib", "architecture"]
---

# 🏛️ `CommonUtils` Architectural Role & Runtime Integration

- **Package Source**: `assets/cc-common/cc-core-lib/share-lib`
- **Global Namespace Anchor**: `eno.CommonUtils` / `globalThis.eno.CommonUtils`
- **Inheritance Hierarchy**: `CommonUtils` ➔ `Object`

---

## 1. Architectural Mission

`CommonUtils` is an essential logic component within **`share-lib`**. It encapsulates dedicated business rules, lifecycle hooks, and optimized runtime performance tailored for high-framerate ($60\text{ FPS}$) Cocos Creator 2.4 slot games.

```mermaid
graph TD
    SuperClass[Object] --> TargetClass[CommonUtils]
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
