---
id: "cc_slot_module:PaylineInfoModule:methods:shouldWorkInCurrentGameMode"
title: "PaylineInfoModule.shouldWorkInCurrentGameMode Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "shouldWorkInCurrentGameMode"]
---

# 📖 `PaylineInfoModule.shouldWorkInCurrentGameMode()`

---

## 1. Method Overview & Signature

Checks whether the component is authorized to display in the active game mode.

```typescript
protected shouldWorkInCurrentGameMode(): boolean
```

---

## 2. Complete Source Code Implementation

```typescript
protected shouldWorkInCurrentGameMode(): boolean {
    if (this.useAcrossAllGameModes) {
        return true;
    }
    
    return this.dataStore.currentGameMode === this.gameMode;
}
```
