---
id: "cc_slot_module:TurboModeSuggestionPopup:gotchas:01_repetitive_prompt_nagging_gotcha"
title: "Repetitive Prompt Nagging Gotcha"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "gotchas", "retention"]
---

# ⚠️ Repetitive Prompt Nagging Gotcha

---

## 1. Solution

Always invoke `this.uiManagerData.setCanShowTurboIntro(false)` on both Confirm and Cancel button clicks.
