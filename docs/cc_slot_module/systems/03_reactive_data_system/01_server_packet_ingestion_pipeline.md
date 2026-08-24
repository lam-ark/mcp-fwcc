---
id: "cc_slot_module:systems:reactive_data:server_packet_ingestion_pipeline"
title: "Server Packet Ingestion & Data Pipeline"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "reactive_data", "packet_ingestion", "pipeline", "gamedatastore", "websocket", "flow"]
---

# 📥 Server Packet Ingestion & Data Pipeline

---

## 1. End-to-End Packet Ingestion Trajectory

When the game server sends a spin response packet over the WebSocket connection, data flows through an atomic 5-stage transformation pipeline:

```mermaid
sequenceDiagram
    autonumber
    participant Net as WebSocket Server
    participant Logic as GameLogic Service
    participant GDS as GameDataStore (Single Store)
    participant BDM as BaseDataModule Observers
    participant View as UI View Modules (Reels, HUD)

    Net->>Logic: Raw JSON Socket Frame
    Logic->>Logic: Decrypts & unpacks packet envelope
    Logic->>GDS: parseDataPS(rawPayload)
    Note over GDS: 1. mapNewKeys() schema normalization<br/>2. Mutations applied to playSession<br/>3. Deep-clones reactive slices
    GDS->>BDM: updateDataModules(changedKeys)
    BDM->>BDM: Filters for registeredKeys (e.g. ['matrix'])
    BDM->>View: onDataUpdate(clonedData)
    View->>View: Renders updated UI state
```

---

## 2. Ingestion Stages Breakdown

1. **Stage 1: WebSocket Transport**: The WebSocket client receives the network frame and passes raw JSON to `GameLogic`.
2. **Stage 2: Schema Normalization (`mapNewKeys`)**: `GameDataStore` maps obfuscated short keys (e.g. `cna`, `pMul`) to canonical SDK properties.
3. **Stage 3: Central Store Mutation**: `GameDataStore.playSession` is updated with fresh round numbers, wallet credits, active bet, win lines, and matrix.
4. **Stage 4: Observer Broadcast (`updateDataModules`)**: `GameDataStore` loops through `_dataModules: Set<BaseDataModule>` and invokes `onDataUpdate()`.
5. **Stage 5: Local Reactive Consumption**: `SlotTableData`, `SlotTablePaylineData`, and `WalletData` receive isolated data slices and trigger local visual redraws.
