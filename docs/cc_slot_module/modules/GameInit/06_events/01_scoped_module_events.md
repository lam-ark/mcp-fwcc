---
id: "cc_slot_module:GameInit:events:scoped_module_events"
title: "GameInit Scoped Module Events"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "events", "scoped_events", "moduleEvent"]
---

# 📡 GameInit Scoped Module Events

## 1. Overview

`GameInit` is a bootstrap container component mounted at the scene root level and does not participate in mode-scoped `moduleEvent` buses.

It delegates mode-scoped coordination to `GameModeDirectorModule` instances in child nodes (`Canvas/Director/GameMode`).
