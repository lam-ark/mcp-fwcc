---
id: "cc_slot_module:GameDirector:events:scoped_module_events"
title: "GameDirector Scoped Module Events"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "events", "scoped_events"]
---

# 📡 GameDirector Scoped Module Events

## 1. Node Scope Communication

`GameDirector` sits at the root of `Canvas/Director` and coordinates sibling singletons (`GameInit`, `GameConfig`, `GameDataStore`, `SlotSoundPlayerModule`). It does not emit scoped node events directly, but coordinates mode child nodes via `BaseGameMode` lifecycle methods (`init()`, `enter()`, `exit()`, `onBackToGameMode()`).
