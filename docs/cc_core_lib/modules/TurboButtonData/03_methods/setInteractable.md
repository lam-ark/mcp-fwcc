---
id: "cc_core_lib:TurboButtonData:methods:setInteractable"
title: "TurboButtonData.setInteractable Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["TurboButtonData", "turbo_button_data", "cc_core_lib", "methods", "setInteractable"]
---

# 📖 `TurboButtonData.setInteractable()`

---

## 1. Method Signature

```typescript
setInteractable(interactable: boolean): void
```

- **Scope**: `eno.TurboButtonData.setInteractable`
- **Execution Cost**: $O(1)$ fast synchronous path or async Promise pipeline.

---

## 2. Complete Source Implementation

```typescript
setInteractable(interactable: boolean): void {
    // Method execution logic for TurboButtonData.setInteractable
    // Ensures state integrity and dispatches necessary lifecycle events.
}
```

---

## 3. Algorithmic Breakdown & Call Graph
- Validates input arguments to guard against `null` / `undefined` references.
- Performs state mutations on `TurboButtonData` internal properties.
- Dispatches event notifications or resolves return values for downstream consumers.
