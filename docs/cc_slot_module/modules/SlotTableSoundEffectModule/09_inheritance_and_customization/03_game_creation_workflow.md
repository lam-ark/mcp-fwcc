---
id: "cc_slot_module:SlotTableSoundEffectModule:inheritance:game_creation_workflow"
title: "SlotTableSoundEffectModule Game Creation Workflow"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "inheritance", "workflow"]
---

# 📋 SlotTableSoundEffectModule Game Creation Workflow

---

## 1. Step-by-Step Integration Checklist

1. **Mount to Table**: Add `SlotTableSoundEffectModule` to the `Table` node.
2. **Configure Sound IDs**: In the Inspector, specify `sfxReelStopId`, `sfxScatterIds`, and `sfxBonusIds`.
3. **Bind Audio Clips**: In `SlotSoundPlayerModule`, ensure all specified sound keys correspond to valid `AudioClip` assets.
4. **Test Sound Ladders**: Run test spins and verify that Scatters on reels 1, 2, 3 trigger ascending audio cues (`SCATTER_1`, `SCATTER_2`, `SCATTER_3`).
5. **Verify Turbo Silence**: Activate Turbo mode and verify that intermediate reel stop sounds are suppressed.
