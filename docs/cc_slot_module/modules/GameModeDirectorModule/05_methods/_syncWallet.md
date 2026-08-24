---
id: "cc_slot_module:GameModeDirectorModule:method:syncWallet"
title: "GameModeDirectorModule._syncWallet() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_syncWallet"]
---

# `GameModeDirectorModule._syncWallet(): Promise<void>`

---

## 1. Method Signature
```typescript
_syncWallet(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits global UI event `this.eventManager.emit(GameUIEvents.WALLET.SYNC_WALLET)` to synchronize the wallet balance display.

---

## 3. Un-truncated Source Code Implementation
```typescript
_syncWallet(): Promise<void> {
    return this.eventManager.emit(GameUIEvents.WALLET.SYNC_WALLET);
}
```
