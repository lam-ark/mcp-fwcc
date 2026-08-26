---
id: "cc_slot_mechanics:TumblingReelModule:inheritance:subclassing_guide"
title: "TumblingReelModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TumblingReelModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
