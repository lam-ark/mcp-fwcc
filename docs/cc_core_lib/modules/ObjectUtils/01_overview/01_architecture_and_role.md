---
id: "cc_core_lib:ObjectUtils:overview:architecture"
title: "ObjectUtils Architectural Role & Runtime Integration"
category: "cc_core_lib"
tags: ["ObjectUtils", "object_utils", "cc_core_lib", "overview", "eno", "share-lib", "architecture"]
---

# 🏛️ `ObjectUtils` Architectural Role & Runtime Integration

- **Package Source**: `assets/cc-common/cc-core-lib/share-lib`
- **Global Namespace Anchor**: `eno.ObjectUtils` / `globalThis.eno.ObjectUtils`
- **Inheritance Hierarchy**: `ObjectUtils` ➔ `Object`

---

## 1. Architectural Mission

`ObjectUtils` is an essential logic component within **`share-lib`**. It encapsulates dedicated business rules, lifecycle hooks, and optimized runtime performance tailored for high-framerate ($60\text{ FPS}$) Cocos Creator 2.4 slot games.

```mermaid
graph TD
    SuperClass[Object] --> TargetClass[ObjectUtils]
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
