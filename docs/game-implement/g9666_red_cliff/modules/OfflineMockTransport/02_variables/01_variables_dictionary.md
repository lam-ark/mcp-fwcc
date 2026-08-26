---
id: "game-implement:9666:module:OfflineMockTransport:variables"
title: "OfflineMockTransport Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "OfflineMockTransport", "offline_mock_transport", "variables", "fields", "properties"]
---

# 📋 `OfflineMockTransport` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **130** | `commandHandlers` | `private` | `any` | `{}` | Runtime state tracking `commandHandlers` in `OfflineMockTransport`. |
| **131** | `socketHandlers` | `private` | `any` | `{}` | Runtime state tracking `socketHandlers` in `OfflineMockTransport`. |
| **167** | `commandPayloadById` | `private` | `Record<string, any>` | `{}` | Runtime state tracking `commandPayloadById` in `OfflineMockTransport`. |
| **169** | `serviceId` | `public` | `string` | `undefined` | Runtime state tracking `serviceId` in `OfflineMockTransport`. |

---

## 2. State Mutation Guardrails

All variables in `OfflineMockTransport` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
