---
id: "cc_slot_module:GameEventManager:customization:subclassing_guide"
title: "GameEventManager Customization & Custom Event Strategy"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "customization", "custom_events", "design_pattern", "pubsub"]
---

# 🏗️ GameEventManager Customization & Custom Event Strategy

## 1. Architectural Philosophy: Closed Singleton Service

`GameEventManager` is designed as a **Closed Singleton Infrastructure Service**.

> [!IMPORTANT]
> **Do NOT subclass `GameEventManager`** (i.e., do not create `class GameEventManager9666 extends GameEventManager`).
> In the `cc-common` architecture, customization does **NOT** happen by subclassing `GameEventManager`, but by **defining Game-Specific Custom Event Topics** and wiring publisher/subscriber pairs.

```mermaid
graph LR
    subgraph Publisher Module
        Director[FreeGameDirectorModule9666]
    end

    subgraph Standard Global Bus
        GEM[GameEventManager Singleton<br/>Unmodified Core Instance]
    end

    subgraph Subscriber Module
        Multiplier[MultiplierModule9666]
    end

    Director -->|await emit('RESET_MULTIPLIER', false)| GEM
    GEM -->|Triggers registered listener| Multiplier
```

---

## 2. How Games Customize Global Event Communication

When building a new slot game:
1. **Define a Custom Event Dictionary** (e.g. `GameUIEvents9666.ts`).
2. **Subscribe** inside custom UI modules via `this.eventManager.on()`.
3. **Emit** asynchronously from directors via `await this.eventManager.emit()`.
4. **Clean up** inside `onDestroy()` using `this.eventManager.targetOff(this)`.
