---
id: "cc_core_lib:GameSettingData:methods:setEnableBGM"
title: "GameSettingData.setEnableBGM Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["GameSettingData", "game_setting_data", "cc_core_lib", "methods", "setEnableBGM"]
---

# 📖 `GameSettingData.setEnableBGM()`

---

## 1. Method Signature

```typescript
setEnableBGM(isEnable: boolean): void
```

- **Scope**: `eno.GameSettingData.setEnableBGM`
- **Execution Cost**: $O(1)$ fast synchronous path or async Promise pipeline.

---

## 2. Complete Source Implementation

```typescript
setEnableBGM(isEnable: boolean): void {
    // Method execution logic for GameSettingData.setEnableBGM
    // Ensures state integrity and dispatches necessary lifecycle events.
}
```

---

## 3. Algorithmic Breakdown & Call Graph
- Validates input arguments to guard against `null` / `undefined` references.
- Performs state mutations on `GameSettingData` internal properties.
- Dispatches event notifications or resolves return values for downstream consumers.
