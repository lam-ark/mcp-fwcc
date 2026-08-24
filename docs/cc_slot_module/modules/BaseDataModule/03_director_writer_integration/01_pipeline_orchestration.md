---
id: "cc_slot_module:BaseDataModule:director_writer:pipeline_orchestration"
title: "BaseDataModule Director & Writer Pipeline Orchestration"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 BaseDataModule Director & Writer Pipeline Orchestration

## 1. State Ingestion Pipeline

1. **Server Ingestion Step**: When `Director.onStateUpdate(data)` executes, it delegates parsing to `this.dataStore.parseDataPS(data)`.
2. **Module Data Trigger**: `this.dataStore.updateDataModules()` iterates over every active `BaseDataModule`, matching keys in `playSession` with `module.registeredKeys`.
3. **Action Execution**: When Writers run action scripts (`_showWinPayline`, `_stopSpinningTable`), UI components query their local `BaseDataModule` instance to obtain sanitized, parsed domain objects.
