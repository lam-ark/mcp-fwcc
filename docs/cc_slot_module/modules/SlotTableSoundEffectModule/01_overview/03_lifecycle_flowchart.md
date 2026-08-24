---
id: "cc_slot_module:SlotTableSoundEffectModule:overview:lifecycle_flowchart"
title: "SlotTableSoundEffectModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 SlotTableSoundEffectModule Lifecycle Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant Table as SlotTableModule
    participant SoundMod as SlotTableSoundEffectModule
    participant SoundPlayer as SlotSoundPlayerModule

    Note over Table,SoundPlayer: 1. Spin Start
    Table->>SoundMod: emit("REEL_START_SOUND")
    SoundMod->>SoundMod: countBonus = 0, countScatter = 0, countJackpot = 0

    Note over Table,SoundPlayer: 2. Reel Landing Sequence
    loop For each reel column 0..N-1
        Table->>SoundMod: emit("REEL_STOP_SOUND", { reelIndex, context, matrix })
        alt Fast-To-Result or Turbo Mode
            alt reelIndex === lastReel
                SoundMod->>SoundPlayer: playSfx("REEL_STOP")
            end
        else Has Special Scatter / Bonus / JP
            SoundMod->>SoundPlayer: playSfx(sfxScatterIds[countScatter - 1])
        else Standard Stop
            SoundMod->>SoundPlayer: playSfx("REEL_STOP")
        end
    end
```
