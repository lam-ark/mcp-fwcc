---
id: "game-implement:9666:module:MockRuntime:methods:off"
title: "MockRuntime.off Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "MockRuntime", "mock_runtime", "methods", "off"]
---

# 📖 `MockRuntime.off()`

---

## 1. Method Signature & Overview

```typescript
public off(event: string, listener?: OfflineListener): void
```

- **Declaring Class**: `MockRuntime` ([`MockRuntime.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Mock/Framework/MockRuntime.ts))
- **Source Range**: Lines 20 to 26
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	off(event: string, listener?: OfflineListener): void {
		if (!listener) {
			this.listeners.delete(event);
			return;
		}
		this.listeners.get(event)?.delete(listener);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **20** | `off(event: string, listener?: OfflineListener): void {` | Method entry signature declaring `off(event: string, listener?: OfflineListener)` returning `void`. |
| **21** | `if (!listener) {` | Conditional guard evaluating branching prerequisite. |
| **22** | `this.listeners.delete(event);` | Executes core logic. |
| **23** | `return;` | Returns value or promise to calling sequence. |
| **24** | `}` | Scope boundary closing block. |
| **25** | `this.listeners.get(event)?.delete(listener);` | Executes core logic. |
| **26** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as MockRuntime
    participant Target as Engine / UI

    Caller->>Mod: Call off(event: string, listener?: OfflineListener)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
