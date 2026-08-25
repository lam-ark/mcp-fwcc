---
id: "cc_slot_module:WalletModule:events:global_event_bus"
title: "WalletModule Global Event Bus (GameEventManager) Deep Specification"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "events", "global_bus", "eventManager", "GameUIEvents"]
---

# 🌐 WalletModule Global Event Bus Specification

---

## 1. Global Event Subscriptions Roster

`WalletModule` subscribes to the framework-level global event bus (`this.eventManager`) inside `onLoadExtend()`:

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.WALLET.PAUSE_WALLET, this.pauseWallet, this);
    this.eventManager.on(GameUIEvents.WALLET.RESUME_WALLET, this.resumeWallet, this);
    this.eventManager.on(GameUIEvents.WALLET.SYNC_WALLET, this.syncWallet, this);
}
```

---

## 2. Event Specification & Execution Lifecycle

| Event Constant | Channel | Dispatched By | Payload | Handled By | Engine & UI Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GameUIEvents.WALLET.PAUSE_WALLET` | `this.eventManager` | `GameModeDirectorModule` | None | `this.pauseWallet()` | Emits `"PAUSE_WALLET"` to active wallet node (`realWallet` or `trialWallet`) to freeze balance incrementing during spin / big win presentations. |
| `GameUIEvents.WALLET.RESUME_WALLET` | `this.eventManager` | `GameModeDirectorModule` | `isForce?: boolean` | `this.resumeWallet()` | Verifies `currentGameMode === NORMAL_GAME` (unless forced) and emits `"RESUME_WALLET"` to unfreeze and synchronize credited round win balance. |
| `GameUIEvents.WALLET.SYNC_WALLET` | `this.eventManager` | `GameModeDirectorModule` / `GameLogic` | None | `this.syncWallet()` | Proxies directly to `this.resumeWallet()` to re-render the latest balance from `WalletData` upon session restoration or network reconnect. |

---

## 3. Sequence Flow: Balance Lock during Spin & Celebration

```mermaid
sequenceDiagram
    autonumber
    participant D as GameModeDirectorModule
    participant EM as eventManager (GameEventManager)
    participant WM as WalletModule
    participant Node as realWallet / trialWallet (cc.Node)

    Note over D,Node: Spin Initiated
    D->>EM: emit(GameUIEvents.WALLET.PAUSE_WALLET)
    EM->>WM: pauseWallet()
    WM->>Node: emit("PAUSE_WALLET")
    Note over Node: Balance rolling frozen

    Note over D,Node: Round Finished & Wins Counted Up
    D->>EM: emit(GameUIEvents.WALLET.RESUME_WALLET)
    EM->>WM: resumeWallet()
    WM->>Node: emit("RESUME_WALLET")
    Note over Node: Balance unfrozen & synced to final value
```

---

## 4. Teardown & Context Disposal

To prevent memory leaks and dangling callback executions, `WalletModule.onDestroy()` unbinds reactive observers:
```typescript
onDestroy(): void {
    if (this.eventManager) {
        this.eventManager.targetOff(this);
    }
    if (this.observer) {
        this.observer.releaseAll(this.walletModel, this);
        this.observer.releaseAll(this.uiManagerData, this);
    }
    super.onDestroy && super.onDestroy();
}
```
