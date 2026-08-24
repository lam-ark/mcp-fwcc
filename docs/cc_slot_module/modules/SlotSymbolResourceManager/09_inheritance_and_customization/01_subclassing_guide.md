---
id: "cc_slot_module:SlotSymbolResourceManager:customization:subclassing_guide"
title: "SlotSymbolResourceManager Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ SlotSymbolResourceManager Subclassing & Customization Guide

---

## 1. Extension Principles & Guidelines

* 🟢 **Override `getBlurSymbolFrame`**: To customize blur algorithm or return static frame if motion blur assets are omitted.
* 🟢 **Subclass for Remote Asset Bundles**: Implement asynchronous asset preloading for live-ops game skins.
* 🛑 **Preserve `initAssets()`**: Ensure dictionary conversion occurs in `onLoad()`.
