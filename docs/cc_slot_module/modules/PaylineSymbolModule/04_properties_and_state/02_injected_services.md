---
id: "cc_slot_module:PaylineSymbolModule:properties:injected_services"
title: "PaylineSymbolModule Injected Services"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 PaylineSymbolModule Injected Services

---

## 1. Injected Parameters (via `init(params)`)

| Parameter | Type | Purpose |
| :--- | :--- | :--- |
| `payLineEmitter` | `cc.EventTarget` | Event channel for receiving payline triggers (`PAYLINE_BLINK_ALL`, etc.). |
| `config` | `PaylineConfig` | Provides `IS_DEBUG` and `PLAY_ANIMATION_LOOP`. |
| `moduleEvent` | `GameModuleEvent` | Inter-module event bus. |
| `eventManager` | `GameEventManager` | Global event bus. |
