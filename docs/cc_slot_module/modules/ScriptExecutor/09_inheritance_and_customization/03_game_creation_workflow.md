---
id: "cc_slot_module:ScriptExecutor:customization:game_creation_workflow"
title: "Game Creation Workflow: Building Action Queues with ScriptExecutor"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Building Action Queues with ScriptExecutor

Follow this 4-step checklist when constructing custom action queues:

---

## Step 1: Declare Method on Companion Writer
On `CustomWriterModule`:
```typescript
makeScriptShowBonusBanner(data: any): script[] {
    return [
        { command: "PLAY_BANNER_INTRO", data },
        { command: "AWAIT_BANNER_CLICK", data },
        { command: "PLAY_BANNER_OUTRO", data }
    ];
}
```

---

## Step 2: Implement Handlers on Companion Director
On `CustomDirectorModule`:
```typescript
async PLAY_BANNER_INTRO(data: any): Promise<void> {
    await this.bannerSpine.playIntro();
}

async AWAIT_BANNER_CLICK(data: any): Promise<void> {
    await this.bannerSpine.waitForUserClick();
}

async PLAY_BANNER_OUTRO(data: any): Promise<void> {
    await this.bannerSpine.playOutro();
}
```

---

## Step 3: Trigger via `runAction`
Inside director game loop:
```typescript
await this.runAction("ShowBonusBanner", payload);
```

---

## Step 4: Validate Error Recovery & Skips
Test skipping during `AWAIT_BANNER_CLICK` ➔ Verify `onResetScript()` interrupts cleanly without locking subsequent spins.
