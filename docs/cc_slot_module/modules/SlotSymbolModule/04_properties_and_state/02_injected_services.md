---
id: "cc_slot_module:SlotSymbolModule:properties:injected_services"
title: "SlotSymbolModule Injected Services & Managers"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "properties", "injected_services", "resource_manager"]
---

# 💉 SlotSymbolModule Injected Services & Managers

---

## 1. Injected Resource Manager Dependency

| Service / Interface | Concrete Type | Resolution Hook | Role in Module |
| :--- | :--- | :--- | :--- |
| `resourceManager` | `ISlotSymbolResource` (`SlotSymbolResourceManager`) | `setResourceManager()` | Provides `getSymbolFrame()`, `getBlurSymbolFrame()`, and `getSymbolSkeleton()`. |
