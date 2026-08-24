---
id: "cc_slot_module:BonusGameWriterModule:events:scoped_module_events"
title: "BonusGameWriterModule Scoped Module Events"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "events", "scoped_events"]
---

# 📡 BonusGameWriterModule Scoped Module Events

## 1. Scoped Events Summary

As a pure script generator, `BonusGameWriterModule` does not emit or listen directly to `moduleEvent` buses. Instead, it emits script commands which cause `BonusGameDirectorModule` to dispatch scoped events to `BonusGameTableModule`.
