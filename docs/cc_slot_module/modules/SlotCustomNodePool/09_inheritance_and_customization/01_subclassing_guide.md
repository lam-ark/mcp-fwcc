---
id: "cc_slot_module:SlotCustomNodePool:customization:subclassing_guide"
title: "SlotCustomNodePool Subclassing & Extension Guide"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ SlotCustomNodePool Subclassing & Extension Guide

---

## 1. Extension Principles & Guidelines

* 🟢 **Subclass for Custom Dynamic Key Formats**: Override `getSpecialPoolName` if special symbols use size suffixes (e.g. `WILD_2_2`).
* 🛑 **Preserve Metadata Tagging**: Never bypass `setNodeMetadata()` when instantiating new pool nodes.
