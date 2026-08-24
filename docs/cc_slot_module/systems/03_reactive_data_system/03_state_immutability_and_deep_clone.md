---
id: "cc_slot_module:systems:reactive_data:state_immutability_and_deep_clone"
title: "State Immutability & Deep-Clone Broadcast Mechanism"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "reactive_data", "immutability", "deep_clone", "state_safety", "flow"]
---

# 🛡️ State Immutability & Deep-Clone Broadcast Mechanism

---

## 1. Why State Immutability is Enforced

In complex slot games, multiple UI modules concurrently consume the same server payload (e.g. `SlotTableModule` reads `matrix` to display symbols, while `SlotTablePaylineModule` highlights win lines, and `CutsceneController` computes big win tiers).

If a UI component modifies its received object reference in-place (e.g., sorting paylines or mutating symbol codes), it could corrupt the single source of truth in `GameDataStore`, leading to desynchronized state and hard-to-trace bugs.

```mermaid
graph TD
    GDS[GameDataStore Single Source of Truth] -->|Deep Clone: JSON.parse JSON.stringify| S1[Safe Isolated Slice 1: SlotTableData]
    GDS -->|Deep Clone: JSON.parse JSON.stringify| S2[Safe Isolated Slice 2: PaylineData]
    GDS -->|Deep Clone: JSON.parse JSON.stringify| S3[Safe Isolated Slice 3: WinEffectData]

    S1 -.->|Local mutations have NO effect on central store| GDS
```

---

## 2. Deep-Clone Broadcasting Implementation

When `GameDataStore` notifies observers via `updateDataModules()`, it creates isolated object clones:

```typescript
// In GameDataStore.ts
updateDataModules(changedKeys: string[]): void {
    this._dataModules.forEach((module: BaseDataModule) => {
        const relevantKeys = module.registeredKeys.filter(key => changedKeys.includes(key));
        if (relevantKeys.length > 0) {
            const dataSlice: any = {};
            relevantKeys.forEach(key => {
                const val = this.playSession[key];
                // Deep-clone slice to enforce strict immutability
                dataSlice[key] = (val !== null && typeof val === "object") 
                    ? JSON.parse(JSON.stringify(val)) 
                    : val;
            });
            module.onDataUpdate(dataSlice);
        }
    });
}
```

---

## 3. Best Practices for Developers

1. **Never Mutate Received Props In-Place**: Always treat data passed to `onDataUpdate()` as read-only.
2. **Use Structured Clones for Complex Nested Arrays**: When transforming 2D matrices locally inside a custom module, create local copies to preserve component isolation.
