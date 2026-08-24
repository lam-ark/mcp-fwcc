---
id: "cc_slot_module:GameModeDirectorModule:method:onStateResume"
title: "GameModeDirectorModule.onStateResume() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onStateResume", "reconnection"]
---

# `GameModeDirectorModule.onStateResume(data: any): void`

---

## 1. Method Signature
```typescript
onStateResume(data: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Parses incoming session state into `GameDataStore` via `this.dataStore.parseDataPS(data)`.
2. Updates and synchronizes all registered data modules via `this.dataStore.updateDataModules()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onStateResume(data): void {
    this.dataStore.parseDataPS(data);
    this.dataStore.updateDataModules();
}
```
