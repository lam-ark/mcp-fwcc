---
id: "cc_slot_module:SlotGameSettings:director_writer:pipeline_orchestration"
title: "SlotGameSettings Pipeline Orchestration Across Directors"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "director", "writer", "integration", "ScriptExecutor"]
---

# 🎼 SlotGameSettings Pipeline Orchestration Across Directors

## 1. Director Integration Architecture

Every mode director (`BaseGameDirector`, `FreeGameDirectorModule`, `BonusGameDirectorModule`) injects `SlotGameSettings` to govern the spin sequence pipeline:

```mermaid
graph TD
    Director[BaseGameDirector] -->|Reads currentGameState| StateCheck{Is IDLE 0?}
    StateCheck -->|Yes| RequestSpin[Send Spin Packet to Server]
    RequestSpin -->|Set currentGameState = WAIT_FOR_RESULT 2| SGS[SlotGameSettings]
    
    Director -->|Reads gameSpeed & isFastToResult| ScriptExec[ScriptExecutor]
    ScriptExec -->|Compresses step durations| Pipeline[Visual Action Steps Pipeline]
```

---

## 2. Dynamic Delay Scaling in `ScriptExecutor`

When `ScriptExecutor` runs action steps, delay durations are mathematically adjusted by `SlotGameSettings.gameSpeed`:
* If `isFastToResult === true` ➔ Delays evaluate to `0ms`.
* If `isTurboActive === true` ➔ Delays are scaled by `0.5x`.
* Otherwise ➔ Delays run at normal `1.0x` speed.
