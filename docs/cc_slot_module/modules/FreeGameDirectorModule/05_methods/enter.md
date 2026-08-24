---
id: "cc_slot_module:FreeGameDirectorModule:method:enter"
title: "FreeGameDirectorModule.enter() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "enter", "lifecycle"]
---

# `FreeGameDirectorModule.enter(): void`

---

## 1. Method Signature
```typescript
enter(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Starts mode audio: `this.playGameModeBGM()`.
2. Syncs remaining spins count badge: `this.syncSpinTimes()`.
3. If not reconnecting (`!this.dataStore.playSession.isResume`), renders the normal transition landing table via `this.syncNormalTable()`.
4. Sets initial auto-spin bypass flag: `this.isFirstAutoSpin = true`.

---

## 3. Un-truncated Source Code Implementation
```typescript
enter(): void {
    this.playGameModeBGM();
    this.syncSpinTimes();

    if (!this.dataStore.playSession.isResume) {
        this.syncNormalTable();
    }
    this.isFirstAutoSpin = true;
}
```
