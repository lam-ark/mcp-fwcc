---
id: "cc_slot_module:GameModeDirectorModule:method:syncPlaySessionData"
title: "GameModeDirectorModule._syncPlaySessionData() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_syncPlaySessionData"]
---

# `GameModeDirectorModule._syncPlaySessionData(): Promise<void>`

---

## 1. Method Signature
```typescript
_syncPlaySessionData(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"SyncPlaySessionData"`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_syncPlaySessionData(): Promise<void> {
    return this.runAction("SyncPlaySessionData");
}
```
