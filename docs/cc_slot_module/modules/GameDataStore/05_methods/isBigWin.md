---
id: "cc_slot_module:GameDataStore:method:isBigWin"
title: "GameDataStore.isBigWin() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "isBigWin"]
---

# `GameDataStore.isBigWin(): boolean`

---

## 1. Method Signature
```typescript
isBigWin(): boolean
```

---

## 2. Detailed Algorithmic Execution Logic
Tests `!!this.playSession.bigWinAmount && !!this.playSession.winType`. Returns `true` if Big Win dialog should be presented.

---

## 3. Un-truncated Source Code Implementation
```typescript
isBigWin(): boolean {
    let { bigWinAmount, winType } = this.playSession;
    return !!bigWinAmount && !!winType;
}
```
