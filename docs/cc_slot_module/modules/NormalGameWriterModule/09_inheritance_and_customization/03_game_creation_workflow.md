---
id: "cc_slot_module:NormalGameWriterModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Writing Custom Base Game Script Queues"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Writing Custom Base Game Script Queues

Follow this 4-step checklist when modifying base game spin queues:

---

## Step 1: Create Custom Writer Subclass
Create `scripts/GameMode/NormalGameWriterModule[GameId].ts`:
```typescript
@ccclass("NormalGameWriterModule9666")
export default class NormalGameWriterModule9666 extends NormalGameWriterModule {
    // Custom makeScript definitions
}
```

---

## Step 2: Define New Action Methods
Prefix your method name with `makeScript`:
```typescript
makeScriptShowExpandingWilds(data: any): Object[] {
    return [
        { command: "PLAY_EXPAND_WILD_SFX" },
        { command: "EXPAND_WILD_COLUMNS", data },
        { command: "CALCULATE_WAY_PAYS", data }
    ];
}
```

---

## Step 3: Implement Command Handlers on Companion Director
On `NormalGameDirectorModule[GameId]`:
```typescript
async EXPAND_WILD_COLUMNS(data: any): Promise<void> {
    await this.wildModule.expandWild(data.wildColumns);
}
```

---

## Step 4: Dispatch Action via `runAction`
Inside the director spin sequence:
```typescript
await this.runAction("ShowExpandingWilds", spinData);
```
