---
id: "cc_slot_module:IntroFreeGameModule:overview:architecture_and_role"
title: "IntroFreeGameModule Architectural Role & Free Spin Transition"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "overview", "architecture", "free_spins"]
---

# 🏛️ IntroFreeGameModule Architectural Role & Free Spin Transition

---

## 1. Architectural Mission

`IntroFreeGameModule` handles the celebratory introductory banner displayed when a player triggers Free Spins. Extending `BaseCutscene`, it schedules a timed display over `timeShow` ($2.0\text{s}$) before automatically calling `exit()`, signaling the game director to switch modes from `NormalGame` to `FreeGame`.

```mermaid
graph TD
    Writer[Mode Writer / ScriptExecutor] -->|PLAY_CUTSCENE: INTRO_FREE_GAME| CC[CutsceneController]
    CC --> IFG[IntroFreeGameModule]
    IFG -->|enter()| Timer[scheduleOnce(this.exit, timeShow)]
    Timer -->|2.0s elapses| Exit[this.exit()]
    Exit -->|callback()| CC
    CC --> Director[BaseGameDirector switches to FreeGameMode]
```
