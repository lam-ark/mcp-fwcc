---
id: "cc_slot_module:SlotBaseModule:gotchas:premature_service_access_in_constructor"
title: "Gotcha: Accessing Injected Fields in Constructor"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "gotchas", "injection_timing"]
---

# ⚠️ Gotcha: Accessing Injected Fields in Constructor

---

## 1. Problem Description

`@inject` properties are not yet bound when the JavaScript constructor executes. Accessing `this.gameLogic` or `this.eventManager` in property initializers or constructors resolves to `undefined`.

---

## 2. Prevention

Perform all initializations in `onLoadExtend()` or `start()`, where `applyInjections()` has already completed.
