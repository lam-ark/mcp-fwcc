---
id: "game-implement:9666:overview:fsm_lifecycle"
title: "Red Cliff (g9666) Finite State Machine & Round Lifecycle"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "fsm", "lifecycle", "state_machine", "round"]
---

# 🔄 Red Cliff (g9666) Finite State Machine & Round Lifecycle

---

## 1. Master FSM Transition Graph

```mermaid
stateDiagram-v2
    [*] --> READY
    READY --> SPINNING: onSpinClick() / onAutoSpin()
    SPINNING --> STOPPING: OnSpinResultReceived
    STOPPING --> WIN_EVALUATION: TABLE_STOP_SPIN
    
    state WIN_EVALUATION {
        [*] --> EvaluatePaylines
        EvaluatePaylines --> HighlightWins: Win Count > 0
        HighlightWins --> CollectMultipliers: Has Multiplier Wilds
        CollectMultipliers --> TriggerDualCascade: CompositeCascade9666.startRespin()
        TriggerDualCascade --> SettleCascade: CompositeCascade9666.stopRespin()
        SettleCascade --> EvaluatePaylines: Loop Next Cascade
        EvaluatePaylines --> CheckFeatureTriggers: Win Count == 0
    }

    WIN_EVALUATION --> FREE_GAME_OPTION: 4+ Scatters Landed
    FREE_GAME_OPTION --> FREE_GAME_LOOP: Mode Selected
    FREE_GAME_LOOP --> SETTLED: Free Spins Exhausted
    WIN_EVALUATION --> SETTLED: Zero Wins & No Feature
    SETTLED --> READY: Round Concluded
```
