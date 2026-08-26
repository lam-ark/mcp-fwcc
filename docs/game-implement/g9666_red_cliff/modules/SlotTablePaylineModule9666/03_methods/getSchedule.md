---
id: "game-implement:9666:module:SlotTablePaylineModule9666:methods:getSchedule"
title: "SlotTablePaylineModule9666.getSchedule Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotTablePaylineModule9666", "slot_table_payline_module9666", "methods", "getSchedule"]
---

# 📖 `SlotTablePaylineModule9666.getSchedule()`

---

## 1. Method Signature & Overview

```typescript
public getSchedule(): any
```

- **Declaring Class**: `SlotTablePaylineModule9666` ([`SlotTablePaylineModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Payline/SlotTablePaylineModule9666.ts))
- **Source Range**: Lines 9 to 11
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	protected getSchedule(): any {
		return this.getComponent(SlotPaylineSchedule9666) || this.addComponent(SlotPaylineSchedule9666);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **9** | `protected getSchedule(): any {` | Method entry signature declaring `getSchedule()` returning `any`. |
| **10** | `return this.getComponent(SlotPaylineSchedule9666) \|\| this.addComponent(SlotPaylineSchedule9666);` | Returns value or promise to calling sequence. |
| **11** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as SlotTablePaylineModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call getSchedule()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return any
```
