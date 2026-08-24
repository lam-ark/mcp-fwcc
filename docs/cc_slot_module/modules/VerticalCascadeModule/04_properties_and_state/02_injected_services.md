---
id: "cc_slot_module:VerticalCascadeModule:properties_and_state:injected_services"
title: "VerticalCascadeModule Injected Services"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 VerticalCascadeModule Injected Services

---

## 1. Injected Dependencies

| Service | Type | Ingestion Mechanism | Purpose |
| :--- | :--- | :--- | :--- |
| `gameSettings` | `SlotGameSettings` | `@inject(SlotGameSettings)` | Ingests Turbo / Fast-to-Result state (`isTurboActive`). |
| `moduleEvent` | `cc.EventTarget` | `setupModule()` | Scoped director event bus. |
| `eventManager` | `GameEventManager` | Inherited from `SlotBaseModule` | Global event manager. |
