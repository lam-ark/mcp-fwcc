---
id: "cc_slot_module:BonusGameTableModule:customization:production_game_case_study"
title: "Production Case Study: Pick Grid Table Configuration"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "customization", "case_study"]
---

# 📖 Production Case Study: Pick Grid Table Configuration

## 1. Context & Grid Math

In pick games with 12 treasure chests (4 columns × 3 rows), `BonusGameTableModule` calculates layout coordinates:

```typescript
const { ROW_NUMBER, WIDTH_STEP, HEIGHT_STEP } = this._config;
let x = this.startX + WIDTH_STEP * Math.floor(index / ROW_NUMBER);
let y = this.startY - HEIGHT_STEP * (index % ROW_NUMBER);
```
Each box receives an `INIT` event with its index and dimensions, enabling click responses.
