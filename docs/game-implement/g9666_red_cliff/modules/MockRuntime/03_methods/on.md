---
id: "game-implement:9666:module:MockRuntime:methods:on"
title: "MockRuntime.on Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "MockRuntime", "mock_runtime", "methods", "on"]
---

# 📖 `MockRuntime.on()`

---

## 1. Method Signature & Overview

```typescript
public on(event: string, listener: OfflineListener): void
```

- **Declaring Class**: `MockRuntime` ([`MockRuntime.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Mock/Framework/MockRuntime.ts))
- **Source Range**: Lines 5 to 10
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	on(event: string, listener: OfflineListener): void {
		if (!this.listeners.has(event)) {
			this.listeners.set(event, new Set());
		}
		this.listeners.get(event).add(listener);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **5** | `on(event: string, listener: OfflineListener): void {` | Method entry signature declaring `on(event: string, listener: OfflineListener)` returning `void`. |
| **6** | `if (!this.listeners.has(event)) {` | Conditional guard evaluating branching prerequisite. |
| **7** | `this.listeners.set(event, new Set());` | Executes core logic. |
| **8** | `}` | Scope boundary closing block. |
| **9** | `this.listeners.get(event).add(listener);` | Executes core logic. |
| **10** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as MockRuntime
    participant Target as Engine / UI

    Caller->>Mod: Call on(event: string, listener: OfflineListener)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
