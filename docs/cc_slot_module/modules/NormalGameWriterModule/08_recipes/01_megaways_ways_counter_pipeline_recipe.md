---
id: "cc_slot_module:NormalGameWriterModule:recipe:megaways_ways_counter_pipeline"
title: "Recipe: Megaways Ways Counter Pipeline Integration"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "recipe", "megaways", "pipeline"]
---

# 🍳 Recipe: Megaways Ways Counter Pipeline Integration

## 1. Problem Statement
You need to calculate and animate total Megaways combinations on the top banner as each reel comes to a stop.

---

## 2. Step-by-Step Implementation

### Step 1: Subclass `NormalGameWriterModule`
```typescript
makeScriptStopSpinningTable(data: any): Object[] {
    let listScript = [];
    listScript.push({ command: "_stopSpinningTable", data });
    listScript.push({ command: "_calculateMegawaysWays", data });
    listScript.push({ command: "_setUpPaylines", data });
    return listScript;
}
```

### Step 2: Implement Handler on Companion Director
```typescript
async _calculateMegawaysWays(data: any): Promise<void> {
    await this.megawaysHUD.updateWaysCount(data.formatMatrix);
}
```
