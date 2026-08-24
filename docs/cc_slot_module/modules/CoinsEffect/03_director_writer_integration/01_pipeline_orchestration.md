---
id: "cc_slot_module:CoinsEffect:director_writer:pipeline_orchestration"
title: "CoinsEffect Pipeline Role & Visual Coordination"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 CoinsEffect Pipeline Role & Visual Coordination

---

## 1. Local Event Coordination

Receives direct node events from parent cutscenes (`WinEffectModule`, `TotalWinModule`):
```text
WinEffectModule.startParticle() ➔ emits "SHOW_COINS_EFFECT" ➔ CoinsEffect
WinEffectModule.stopParticle()  ➔ emits "HIDE_COINS_EFFECT" ➔ CoinsEffect
```
