---
id: "cc_slot_module:SlotGameSettings:customization:game_creation_workflow"
title: "Game Creation Workflow: Integrating Speed Controls"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "customization", "workflow", "speed_control", "checklist"]
---

# 🚀 Game Creation Workflow: Integrating Speed Controls

Follow this 4-step checklist when integrating `SlotGameSettings` speed modes into a new game:

---

## Step 1: Inject `SlotGameSettings` into UI Components
In your custom HUD and button components:
```typescript
@inject(SlotGameSettings)
gameSettings: SlotGameSettings;
```

---

## Step 2: Bind Turbo Button Toggle
Wire the Turbo button click event to mutate `isTurboActive`:
```typescript
onTurboButtonClicked(): void {
    this.gameSettings.isTurboActive = !this.gameSettings.isTurboActive;
    this.gameSettings.gameSpeed = this.gameSettings.isTurboActive 
        ? GAME_SPEED_ENUM.TURBO 
        : GAME_SPEED_ENUM.NORMAL;
}
```

---

## Step 3: Implement Speed-Aware Animation Handlers
Ensure visual modules check `isFastToResult` to bypass unnecessary delays during instant spins:
```typescript
async playCoinShower(): Promise<void> {
    if (this.gameSettings.isFastToResult) {
        this.applyFinalBalanceImmediate();
        return;
    }
    await this.runRollingTweenAsync();
}
```

---

## Step 4: Validate Speed Modes via Testing
1. **Normal Mode**: Verify full animations, payline cycling, and sound playback.
2. **Turbo Mode**: Verify compressed reel spin durations and accelerated win count-ups.
3. **FTR (Instant Spin)**: Verify zero animation lag and seamless consecutive spin triggers.
