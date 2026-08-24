---
id: "cc_slot_module:overview:index"
title: "Slot Module Architecture Master Index & Navigation"
category: "cc_slot_module"
tags: ["cc_slot_module", "SlotBaseModule", "index", "overview", "navigation", "architecture"]
---

# 📚 Slot Module (`SlotBaseModule`) Architecture Master Overview

Welcome to the comprehensive, deep-atomic documentation on the **Module System** in the Cocos Creator 2.4 Cocos Common (`cc-common`) Slot Framework SDK.

---

## 📑 Documentation Structure & Navigation

| File | Topic & Deep-Dive Coverage | Key Concepts |
| :--- | :--- | :--- |
| **[01. Architecture & Philosophy](./01_module_architecture_and_philosophy.md)** | Core purpose, OOP hierarchy, loose coupling, and complete annotated `SlotBaseModule.ts` source code. | `SlotBaseModule`, `cc.Component`, IoC, 4-Pillar Pattern |
| **[02. Dependency Injection & IoC](./02_dependency_injection_ioc.md)** | Inversion of Control mechanism, `eno.inject`, `eno.applyInjections`, and the 4 Injected Services (`gameLogic`, `eventManager`, `observer`, `soundPlayer`). | `@inject`, `applyInjections`, `gameId` Scope, `onLoadExtend` |
| **[03. Dual Event Bus System](./03_dual_event_bus_system.md)** | Global Bus (`this.eventManager`) vs Scoped Bus (`this.moduleEvent`), GameMode isolation, and memory leak prevention. | `GameEventManager`, `GameModuleEvent`, `targetOff`, Pub/Sub |
| **[04. Lifecycle & Registration](./04_module_lifecycle_and_registration.md)** | End-to-end 7-phase lifecycle diagram, `setupModule()` registration, multi-mode guards, and fast-play interruption handling. | `onLoad`, `setupModule`, `resetAllEffectAndTasks`, `onDestroy` |
| **[05. Ecosystem & Taxonomy](./05_module_ecosystem_and_classification.md)** | Complete classification of all 6 module clusters (Core, Table, GUI, Cutscenes, Popups, Mechanics) and canonical scene node paths. | Taxonomy, Scene Graph, Companion Quad |
| **[06. Best Practices & Gotchas](./06_module_best_practices_and_gotchas.md)** | Top 5 engine pitfalls, root-cause breakdowns, code comparisons, and a production-hardened subclassing template (Red Cliff `g9666L`). | Antipatterns, Memory Leaks, FTR Turbo Cleanup |

---

## 🎯 Quick Start: Standard Module Implementation Pattern

```typescript
const { _decorator } = cc;
import { SlotBaseModule } from "SlotBaseModule";
const { ccclass, property } = _decorator;

@ccclass
export default class MyCustomSlotModule extends SlotBaseModule {
    /**
     * 1. Safe Initialization (Invoked immediately after IoC injections finish)
     */
    onLoadExtend(): void {
        // Dependencies this.gameLogic, this.eventManager, this.soundPlayer are guaranteed non-null
    }

    /**
     * 2. Event Binding Hook
     */
    protected registerEvents(): void {
        if (this.moduleEvent) {
            this.moduleEvent.on("TABLE_STOPPED", this.onTableStopped, this);
        }
        if (this.eventManager) {
            this.eventManager.on("UPDATE_WALLET", this.onUpdateWallet, this);
        }
    }

    /**
     * 3. Interruption / Fast-Play Reset Hook
     */
    protected resetAllEffectAndTasks(): void {
        cc.Tween.stopAllByTarget(this.node);
    }

    /**
     * 4. Teardown & Event Cleanup Hook
     */
    onDestroy(): void {
        if (this.eventManager) {
            this.eventManager.targetOff(this);
        }
    }
}
```
