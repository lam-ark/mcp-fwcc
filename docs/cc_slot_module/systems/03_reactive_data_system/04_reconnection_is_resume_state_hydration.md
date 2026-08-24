---
id: "cc_slot_module:systems:reactive_data:reconnection_is_resume_state_hydration"
title: "Network Reconnection & State Hydration (isResume)"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "reactive_data", "reconnection", "hydration", "isResume", "network", "flow"]
---

# 🔌 Network Reconnection & State Hydration (`isResume`)

---

## 1. Reconnection Lifecycle & Hydration Flow

When a player loses mobile connection or refreshes their browser during an active Free Spin or Bonus feature, the game server transmits an initial state packet with `isResume = true`.

The client framework initiates an atomic **State Hydration Sequence**:

```mermaid
sequenceDiagram
    autonumber
    participant Browser as Client Browser
    participant Socket as Network Socket
    participant GDS as GameDataStore
    participant Director as GameDirector / GameModeDirector
    participant View as SlotTableModule & HUD

    Browser->>Socket: Connects & Authenticates Session
    Socket-->>GDS: Returns Session Payload with isResume = true
    Note over GDS: Sets isResume = true<br/>Hydrates freeGameRemain, winAmountPS, matrix
    GDS->>Director: Dispatches Mode Hydration (e.g. FreeGame)
    Director->>Director: onResumeGameMode() & sets node.active = true
    Director->>View: emit("SYNC_TABLE", matrix)
    Note over View: Instantly renders static matrix without spin animation
    Director->>Director: Resumes Free Spin Loop from saved step
```

---

## 2. Key State Variables Hydrated on Reconnection

| Property Key | Type | Description | Restored Subsystem Behavior |
| :--- | :--- | :--- | :--- |
| `isResume` | `boolean` | Flag indicating reconnected session. | Skips intro splash screens and transitions directly to active mode. |
| `currentGameMode` | `string` | Active mode ID (e.g. `"freeGame"`). | Director activates corresponding game mode subtree immediately. |
| `freeGameRemain` | `number` | Remaining free spins counter. | Hydrates `SpinTimesModule` badge without playing intro animations. |
| `winAmountPS` | `number` | Cumulative feature win total. | Sets HUD win label to accumulated winnings without money rolling tween. |
| `matrix` | `string[][]` | Last active table matrix. | Emits `"SYNC_TABLE"` to render symbols immediately without spinning reels. |

---

## 3. Developer Guidelines for Custom Modes

1. **Always Check `isResume` in `enter()` / `onEnterGameMode()`**:
   ```typescript
   startBonusGame(): void {
       const { isResume } = this.dataStore.playSession;
       if (isResume) {
           this.resumeBonusGameState();
           return;
       }
       this.playIntroCutscene();
   }
   ```
2. **Never Play Deducting Animations on Resume**: Do not deduct wallet credits or re-trigger intro animations for already ongoing bonus rounds.
