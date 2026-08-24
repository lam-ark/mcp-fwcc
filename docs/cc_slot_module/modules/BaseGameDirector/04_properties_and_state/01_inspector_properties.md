---
id: "cc_slot_module:BaseGameDirector:properties:inspector_properties"
title: "BaseGameDirector Inspector Properties"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BaseGameDirector Inspector Properties

## 1. Inspector Properties Schema

`BaseGameDirector` is an abstract base class and defines no raw serialized `@property` fields by default. Specialized subclasses (such as `NormalGameDirectorModule` and `FreeGameDirectorModule`) declare mode-specific nodes (e.g. background sprite nodes, transition spine references).
