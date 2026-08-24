---
id: "cc_slot_module:SlotSymbolManager:director_writer:pipeline_orchestration"
title: "SlotSymbolManager Director & Writer Pipeline Orchestration"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 SlotSymbolManager Director & Writer Pipeline Orchestration

## 1. Interaction with Table & Paylines

1. **Table Configuration Ingestion**: During `onLoadExtend`, `SlotTableModule` calls `symbolManager.setGameConfig(this.gameConfig)`, mapping `gameConfig.SYMBOL_CONFIG[key].Priority` into `layerConfig`.
2. **Reel Column Symbol Borrowing**: As `SlotReelModule` instantiates or scrolls, it requests static and blur symbols through `createSymbol()` and `createBlurSymbol()`.
3. **Payline Z-Order Normalization**: When `SlotTablePaylineModule` highlights a winning combination, it calls `updateSymbolSiblingIndex()` so high-value symbols render cleanly above lower-tier pay symbols.
