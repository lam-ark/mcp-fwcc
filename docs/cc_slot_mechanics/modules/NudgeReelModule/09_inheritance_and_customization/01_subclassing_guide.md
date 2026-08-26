---
id: "cc_slot_mechanics:NudgeReelModule:inheritance:subclassing_guide"
title: "NudgeReelModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ NudgeReelModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
