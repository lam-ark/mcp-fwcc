---
id: "game-implement:9666:multiplier:reload_reconnect"
title: "Red Cliff (g9666) Reload & Reconnect Flow for Multiplier Wilds"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "reload", "reconnect", "resume", "multiplier_wild", "specification"]
---

# 🔄 Red Cliff (g9666) Reload & Reconnect Flow for Multiplier Wilds

---

## 1. Design Specification Matrix

When a player **Reloads (F5) / Reconnects** to the game at the state where:
- Data has been received from the server (Received data).
- The Multiplier Wild animation is currently playing (or about to play).

### Specification Decision Table:

| Condition | Standard Rule (Spec / Docs) | UX Rationale |
| :--- | :--- | :--- |
| **If there is NO combine** | **SKIP Multiplier Animation** | Avoids redundant animations when no winning payline benefits from the multiplier. |
| **If there IS a combine** | **1. SKIP Multiplier WILD Animation**<br>**2. Display updated Global Multiplier UI** *(After adding multiplier from Multiplier WILD)*<br>**3. Replay Combine Animation** | Fast-forwards the Multiplier HUD directly to its post-addition value so the user clearly sees the active multiplier while viewing the replayed winning combine animation. |

```mermaid
flowchart TD
    Start([User Reloads / Reconnects]) --> GetData[Receive PlaySession / DataResume from Server]
    GetData --> CheckCombine{Is there a winning Combine with K1?}
    
    CheckCombine -- No Combine --> SkipAll[SKIP all Multiplier Animations & Keep base multiplier]
    
    CheckCombine -- Has Combine --> Step1[1. SKIP Multiplier Wild fly animation]
    Step1 --> Step2[2. Immediately show UPDATED Global Multiplier on UI]
    Step2 --> Step3[3. Hide Multiplier Badge on K1 Symbol node]
    Step3 --> Step4[4. Replay Payline Combine Animation with updated multiplier]
```

---

## 2. Codebase Compliance Audit (Code vs. Spec)

### Detailed Comparison:

| Scenario / Module | Spec Requirement | Current Code Behavior | Status |
| :--- | :--- | :--- | :---: |
| **Normal Game Resume** (`NormalGameWriterModule9666.ts`) | Skip fly animation on reload | In `makeScriptPreResumeGameMode`, command `_collectWildMultiplier` is executed as usual, running full particle tween animations instead of skipping. | ❌ **NON-COMPLIANT** |
| **Free Game Resume** (`FreeGameWriterModule9666.ts`) | Display updated Global Multiplier UI + Replay combine | Command `_collectWildMultiplier` is **commented out** (`// command: "_collectWildMultiplier"`). Consequently, no animation plays, but `MultiplierModule9666` only displays `previousMultiplierFreeGame` (`pMulF`) because `ADD_MULTIPLIER` is never emitted $\rightarrow$ **UI displays outdated multiplier**. | ❌ **NON-COMPLIANT** |
| **K1 Symbol Badge on Reload with Combine** | Hide badge on K1 symbol because it is already added to Global UI | Without a fast-forward synchronization handler on resume, the `x8` badge remains visible on the symbol, causing duplicated text info. | ❌ **NON-COMPLIANT** |

---

## 3. Recommended Implementation Architecture

To achieve 100% compliance with the design specification:

### In `CollectMultiModule9666.ts` / Resume Handlers:
When `isResume === true`:
- **If `hasCombine`**:
  1. Do NOT execute the flying Tween `collectSymbols` (SKIP Anim).
  2. Instantly hide all `K1` symbol multiplier labels via `hideMultiplierLabel()`.
  3. Emit `SYNC_MULTIPLIER` with the target value `freeGameMultiplier || multiplier`.
  4. Ensure `MultiplierModule9666` renders the updated multiplier label before `_showAllPaylines` starts the combine win playback.
- **If `!hasCombine`**:
  1. Skip completely and retain the base multiplier.
