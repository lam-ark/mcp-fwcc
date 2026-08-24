---
id: "cc_slot_module:GameDataStore:method:parseDataPS"
title: "GameDataStore.parseDataPS() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "parseDataPS", "playSession", "payload"]
---

# `GameDataStore.parseDataPS(data: any): void`

---

## 1. Method Signature
```typescript
public parseDataPS(data: any): void
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: `eno.Game` network packet router.
* **Moment**: Immediately upon receiving the spin response packet from WebSocket.

---

## 3. Detailed Algorithmic Execution Logic
1. Stores the raw server dictionary in `this.playSession`.
2. Emits formatted debug console message with `%c data-update`.

---

## 4. Subclassing Override Pattern
Subclasses can override `parseDataPS` to mutate or remap custom backend keys:
```typescript
parseDataPS(data: any): void {
    let updatedData = { ...data };
    updatedData.customMultiplier = data.extraMult || 1;
    super.parseDataPS(updatedData);
}
```

---

## 5. Un-truncated Source Code Implementation
```typescript
parseDataPS(data): void {
    this.playSession = data;
    warn("%c data-update ", "color: red", data);
}
```
