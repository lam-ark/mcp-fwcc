---
id: "cc_slot_module:BaseGameDirector:events:scoped_module_events"
title: "BaseGameDirector Scoped Module Events"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "events", "scoped_events"]
---

# 📡 BaseGameDirector Scoped Module Events

## 1. Scoped Events Overview

`BaseGameDirector` inherits from `SlotBaseModule`. Mode director subclasses emit local events onto their node bus (`this.node.emit`) to coordinate companion UI and VFX modules mounted on the same game mode node hierarchy (e.g. `SHOW_MODE_BACKGROUND`, `HIDE_MODE_BACKGROUND`).
