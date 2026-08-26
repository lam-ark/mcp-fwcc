---
id: "cc_slot_module:LoadingScreenModule:inheritance:subclassing_guide"
title: "LoadingScreenModule Subclassing Guide"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ LoadingScreenModule Subclassing Guide

---

## 1. Subclassing Rules
- Override `updateLabelProgress()` to customize font styling or localized percentage messages.
- Always call `super.onDestroy()` to release Howler listeners and clear running tweens.
