---
id: "game-implement:9666:module:MockRuntime:methods:once"
title: "MockRuntime.once Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "MockRuntime", "mock_runtime", "methods", "once"]
---

# 📖 `MockRuntime.once()`

---

## 1. Method Signature & Overview

```typescript
public once(event: string, listener: OfflineListener): void
```

- **Declaring Class**: `MockRuntime` ([`MockRuntime.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Mock/Framework/MockRuntime.ts))
- **Source Range**: Lines 12 to 18
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	once(event: string, listener: OfflineListener): void {
		const wrapped = (...args: any[]) => {
			this.off(event, wrapped);
			listener(...args);
		};
		this.on(event, wrapped);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **12** | `once(event: string, listener: OfflineListener): void {` | Method entry signature declaring `once(event: string, listener: OfflineListener)` returning `void`. |
| **13** | `const wrapped = (...args: any[]) => {` | Allocates local variable `wrapped`. |
| **14** | `this.off(event, wrapped);` | Executes core logic. |
| **15** | `listener(...args);` | Executes core logic. |
| **16** | `};` | Executes core logic. |
| **17** | `this.on(event, wrapped);` | Executes core logic. |
| **18** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as MockRuntime
    participant Target as Engine / UI

    Caller->>Mod: Call once(event: string, listener: OfflineListener)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
