---
id: "cc_slot_module:GameModeWriterModule:recipe:custom_writer_pipeline"
title: "Recipe: Adding a Custom VFX Step into the Reel Stop Sequence"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "recipe", "custom_step", "VFX"]
---

# 🍳 Recipe: Adding a Custom VFX Step into the Reel Stop Sequence

## 1. Problem Statement
You need to trigger an expanding wild animation (`_expandWildColumns`) immediately after the reels stop but before paylines calculate.

---

## 2. Step-by-Step Implementation

### Step 1: Subclass `GameModeWriterModule`
```typescript
makeScriptStopSpinningTable(data: any): Object[] {
    let listScript = [];
    listScript.push({ command: "_stopSpinningTable", data });
    listScript.push({ command: "_expandWildColumns", data });
    listScript.push({ command: "_setUpPaylines", data });
    return listScript;
}
```

### Step 2: Implement Step Handler on Companion Director
```typescript
async _expandWildColumns(data: any): Promise<void> {
    await this.wildSpineManager.playExpansionAnimations();
}
```
