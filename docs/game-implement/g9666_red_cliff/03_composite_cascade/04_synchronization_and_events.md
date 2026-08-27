---
id: "game-implement:9666:cascade:sync_and_events"
title: "Red Cliff (g9666) Cascade Synchronization & Event Bus Pipeline"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "events", "synchronization", "event_bus", "near_win", "fast_stop"]
---

# 🔄 Red Cliff (g9666) Cascade Synchronization & Event Bus Pipeline

---

## 1. Event Pipeline Map

The Composite Cascade relies on two levels of event brokers:
- **`moduleEvent`** (Local to Table Module): Inter-reel and inter-grid communication.
- **`eventManager`** (Global Scene Event Manager): System-wide coordination (Director, HUD, Audio, Win Presentation).

```mermaid
graph TD
    subgraph Global Event Bus (eventManager)
        A[JOIN_GAME_SUCCESS] --> B[syncTable on startup]
        C[TABLE_FAST_STOP] --> D[Force Stop and Speed-up Active Tweens]
        E[SETUP_NEARWIN_REFILL] --> F[SlotTableNearWinRefillModule9666]
        G[DROP_NEARWIN_REFILL] --> F
        H[RESET_NEARWIN_REFILL] --> F
    end

    subgraph Module Event Bus (moduleEvent)
        I[RESET_MEGAWAY] --> J[Clear previous megaway counter]
        K[TABLE_STOP_SPIN_TOP] --> L[Stop Top Horizontal Reel]
        M[STACK_WILD_LANDED] --> N[Trigger Stack Wild Check]
        O[REEL_BEGIN_STOP] --> P[Notify reel anticipation audio]
        Q[SYNC_STACK_WILD_TO_TABLE] --> R[SlotTableModule9666 Replace Stack Wild Nodes]
    end
```

---

## 2. Event Execution Timing & Contract Reference

| Event Name | Sender | Receiver | Payload | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`TABLE_STOP_SPIN_TOP`** | `WriterModule9666` | `HorizontalTableModule9666` | `None` | Triggers phased stop on the top 4-symbol reel. |
| **`STACK_WILD_LANDED`** | `HorizontalTableModule9666` | `StackWildModule9666` | `None` | Signals top reel has landed; verifies if `K2` Wild is active. |
| **`SETUP_NEARWIN_REFILL`** | `VerticalCascadeModule9666` | `SlotTableNearWinRefillModule9666` | `{ matrix, dropColumns, context }` | Calculates per-column delays if Near-Win conditions are met during cascade refill. |
| **`DROP_NEARWIN_REFILL`** | `VerticalCascadeModule9666` | `SlotTableNearWinRefillModule9666` | `{ col: number }` | Emitted when a specific delayed column finishes landing bounce. |
| **`RESET_NEARWIN_REFILL`**| `VerticalCascadeModule9666` | `SlotTableNearWinRefillModule9666` | `None` | Cleans up camera shaking and particle effects upon cascade completion. |
| **`TABLE_FAST_STOP`** | `SlotTableModule9666` | `All Modules & Decorators` | `None` | Fast-forwards all active speeds to Turbo / x2 / x3 multiplier. |
| **`SYNC_STACK_WILD_TO_TABLE`** | `DirectorModule9666` | `SlotTableModule9666` | `{ mainReelIndex, symbolNodes }` | Injects expanded full-reel Wild Spine into main table column. |
