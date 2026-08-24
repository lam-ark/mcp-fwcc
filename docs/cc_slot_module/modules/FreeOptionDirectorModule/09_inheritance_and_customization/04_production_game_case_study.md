---
id: "cc_slot_module:FreeOptionDirectorModule:customization:production_game_case_study"
title: "Production Case Study: Multi-Option Free Spins Modal"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "customization", "case_study"]
---

# 📖 Production Case Study: Multi-Option Free Spins Modal

## 1. Context & Volatility Configuration

In games providing player choices upon 3-Scatter triggers (e.g. 5 Spins / 10 Spins / 20 Spins), `FreeOptionDirectorModule` locks player inputs:

```typescript
optionClick(ev: any, optionId: number): void {
    const selectedOption = Number(optionId ? optionId : ev.target.optionId);
    this.options.forEach((option) => {
        option.optionNode.getComponent(Button).interactable = false;
    });
    this.gameLogic.emit(GameLogicUIEvents.SEND_FREE_OPTION_REQUEST, selectedOption);
    this.stopCountDown();
}
```
