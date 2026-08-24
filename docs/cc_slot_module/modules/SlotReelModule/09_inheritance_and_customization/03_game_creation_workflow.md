---
id: "cc_slot_module:SlotReelModule:customization:game_creation_workflow"
title: "SlotReelModule Game Creation Workflow Checklist"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "customization", "game_creation", "workflow"]
---

# 🚀 SlotReelModule Game Creation Workflow Checklist

---

## 1. Step-by-Step Integration Checklist

1. **Reel Prefab Setup**: Wire `SlotReelModule` onto the column prefab under `Table/ReelContainer`.
2. **Buffer Dimensions**: Verify `BUFFER_TOP >= 2` and `BUFFER_BOT >= 2` in `TableModuleConfig`.
3. **Symbol Manager Linkage**: Ensure `SlotTableModule` injects `SlotSymbolManager` via `initReel({ pool })`.
4. **Coordinate Math**: Check cell width and height match art assets exactly.
5. **QA Spin Testing**: Verify continuous roll, Turbo skip, and FTR bounce-stops in browser and mobile emulator.
