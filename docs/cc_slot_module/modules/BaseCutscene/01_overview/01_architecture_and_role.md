---
id: "cc_slot_module:BaseCutscene:overview:architecture_and_role"
title: "BaseCutscene Architectural Role & Abstract Contract"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "overview", "architecture", "modal_contract"]
---

# 🏛️ BaseCutscene Architectural Role & Abstract Contract

---

## 1. Architectural Mission

`BaseCutscene` is the abstract base class for all modal dialogs, victory celebrations, and transition animations in the slot framework. Extending `SlotBaseModule`, it defines the standardized entry/exit lifecycle, binds local node events (`PLAY`, `HIDE`, `INIT`, `SKIP`), and manages global full-display input blocking signals.

```mermaid
graph TD
    CC[CutsceneController] -->|play(content, callback)| BC[BaseCutscene]
    BC -->|show() -> active = true| Node[cc.Node]
    BC -->|enter() -> subclass hook| Sub[Subclass Logic]
    BC -->|SHOW_FULL_DISPLAY_CUTSCENE| EventManager[GameEventManager]
    
    Sub -->|exit()| BC
    BC -->|HIDE_FULL_DISPLAY_CUTSCENE| EventManager
    BC -->|ON_CUTSCENE_CLOSE| GameLogic[GameLogic]
    BC -->|callback()| CC
```

---

## 2. Key Responsibilities

1. **Standardized Lifecycle Invariants**:
   - `init()`: Binds node events and deactivates node (`active = false`).
   - `play()`: Stores content, delays one frame to emit `SHOW_FULL_DISPLAY_CUTSCENE`, activates node, and calls `enter()`.
   - `exit()`: Executes completion callback, emits `HIDE_FULL_DISPLAY_CUTSCENE`, fires `ON_CUTSCENE_CLOSE`, and deactivates node.
2. **IoC Service Injections**:
   - Automatically injects `GameDataStore`, `eno.MoneyFormatter`, `eno.MoneyTween`, and `SlotGameSettings`.
3. **Debug / Preview Exposure**:
   - Exposes `globalThis[this.node.name] = this` under `CC_PREVIEW` for browser console debugging.
