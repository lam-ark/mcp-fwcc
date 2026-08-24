---
id: "cc_slot_module:GameModeDirectorModule:method:playPreStopSpinningEffect"
title: "GameModeDirectorModule._playPreStopSpinningEffect() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_playPreStopSpinningEffect"]
---

# `GameModeDirectorModule._playPreStopSpinningEffect(_data: any): Promise<void>`

---

## 1. Method Signature
```typescript
_playPreStopSpinningEffect(_data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"PlayPreStopSpinningEffect"`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_playPreStopSpinningEffect(_data): Promise<void> {
    return this.runAction("PlayPreStopSpinningEffect");
}
```
