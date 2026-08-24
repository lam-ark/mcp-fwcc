---
id: "cc_slot_module:BaseGameDirector:recipe:custom_spin_action_pipeline"
title: "Recipe: Adding Custom Action Steps to Director Spin Loop"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "recipes", "pipeline", "custom_spin", "runAction"]
---

# 💡 Recipe: Adding Custom Action Steps to Director Spin Loop

## 1. Concrete Production Use-Case

When creating a game with custom feature animations (e.g. Red Cliff expanding Wilds or near-win refills), add dedicated action scripts:

```typescript
// 1. In CustomWriterModule:
makeScriptCustomSpinResult(data: any): script[] {
    return [
        { command: "STOP_REEL_SPIN", data },
        { command: "PLAY_EXPANDING_WILD", data },
        { command: "COLLECT_MULTIPLIER", data },
        { command: "SHOW_WIN_LINES", data }
    ];
}

// 2. In CustomDirectorModule (extends BaseGameDirector):
async onSpinResultReceived(data: any): Promise<void> {
    await this.runAction("CustomSpinResult", data);
}

// Step Implementations on Director:
async PLAY_EXPANDING_WILD(data: any): Promise<void> {
    await this.stackWildModule.playExpandWildAnimation();
}

async COLLECT_MULTIPLIER(data: any): Promise<void> {
    await this.multiplierModule.collectMultiplierAnimation();
}
```
