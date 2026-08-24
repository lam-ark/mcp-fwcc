---
id: "cc_slot_module:VerticalCascadeModule:inheritance:subclassing_guide"
title: "VerticalCascadeModule Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ VerticalCascadeModule Subclassing & Customization Guide

---

## 1. Subclassing Guidelines

- Extend `VerticalCascadeModule`.
- Key overrides:
  - `playFalling()`: Custom easing curves (e.g. bounce elastic vs linear).
  - `removeSymbolAt()`: Custom disappearing animation.
  - `stopRespinWithNearwin()`: Custom column suspense mechanics.
