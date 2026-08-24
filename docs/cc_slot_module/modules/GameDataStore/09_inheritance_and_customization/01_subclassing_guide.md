---
id: "cc_slot_module:GameDataStore:customization:subclassing_guide"
title: "GameDataStore Subclassing & Data Ingestion Guide"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "customization", "subclassing", "parseDataPS", "mapDataPS", "key_mapping"]
---

# 🏗️ GameDataStore Subclassing & Data Ingestion Guide

## 1. Class Inheritance Declaration

When creating a new slot game (e.g. Red Cliff `g9666L`), inherit from `GameDataStore` and attach it to the root **`Canvas/Director`** node:

```typescript
const { _decorator } = cc;
import { GameDataStore } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("GameDataStore9666")
export class GameDataStore9666 extends GameDataStore {
    // Override points here
}
```

---

## 2. Where & How Data Is Parsed (`parseDataPS`)

The primary data ingestion entry point is **`parseDataPS(data: any): void`**:

```mermaid
graph TD
    WS[WebSocket Spin Packet] -->|GL calls parseDataPS| GDS[GameDataStore9666]
    
    subgraph Data Pipeline
        GDS --> Step1[1. super.parseDataPS data<br/>Stores raw this.playSession]
        Step1 --> Step2[2. this.mapDataPS playSession<br/>Remaps shorthand backend keys]
        Step2 --> Step3[3. Custom Payload Calculations<br/>Computes multipliers, cascades]
        Step3 --> Step4[4. updateDataModules<br/>Auto-broadcasts to child BaseDataModules]
    end
```

### The 3-Step Ingestion Pattern:
1. **Call `super.parseDataPS(data)`**: Ensures base caching and console debug logging.
2. **Execute `this.mapDataPS(data)`**: Remap backend shorthand keys (e.g. `pMul`, `cna`) to readable SDK keys using `this.mapNewKeys()`.
3. **Compute Derivative State**: Calculate extra game-specific metrics (e.g. total multiplier step) before `updateDataModules()` fires.
