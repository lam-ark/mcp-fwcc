---
id: "cc_slot_module:GameModeDirectorModule:method:transitionToGameModeWhenResume"
title: "GameModeDirectorModule.transitionToGameModeWhenResume() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "transitionToGameModeWhenResume", "reconnection"]
---

# `GameModeDirectorModule.transitionToGameModeWhenResume(mode: number): Promise<void>`

---

## 1. Method Signature
```typescript
transitionToGameModeWhenResume(_mode: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Default behavior resolves immediately (`Promise.resolve()`) to skip cutscenes and accelerate loading upon reconnection. Subclasses can override for custom resume transitions.

---

## 3. Un-truncated Source Code Implementation
```typescript
transitionToGameModeWhenResume(_mode: number): Promise<void> {
    return Promise.resolve();
}
```
