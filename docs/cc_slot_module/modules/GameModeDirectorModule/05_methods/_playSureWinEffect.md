---
id: "cc_slot_module:GameModeDirectorModule:method:playSureWinEffect"
title: "GameModeDirectorModule._playSureWinEffect() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_playSureWinEffect"]
---

# `GameModeDirectorModule._playSureWinEffect(_data: any): Promise<void>`

---

## 1. Method Signature
```typescript
_playSureWinEffect(_data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Virtual hook for triggering guaranteed win visual animations (e.g. glowing frames, lightning overlays).

---

## 3. Un-truncated Source Code Implementation
```typescript
_playSureWinEffect(_data): Promise<void> {
    return Promise.resolve();
}
```
