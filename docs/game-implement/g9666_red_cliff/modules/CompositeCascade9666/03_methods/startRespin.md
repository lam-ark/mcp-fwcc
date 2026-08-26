---
id: "game-implement:9666:module:CompositeCascade9666:methods:startRespin"
title: "CompositeCascade9666.startRespin Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CompositeCascade9666", "composite_cascade9666", "methods", "startRespin"]
---

# 📖 `CompositeCascade9666.startRespin()`

---

## 1. Method Signature & Overview

```typescript
public startRespin(): Promise<void>
```

- **Declaring Class**: `CompositeCascade9666` ([`CompositeCascade9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/CompositeCascade9666.ts))
- **Source Range**: Lines 8 to 13
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	async startRespin(): Promise<void> {
		const { verticalMatrix, horizonMatrix, listTraceWayVertical, listTraceWayHorizontal } = this._compositeCascadeData.formatData();
		const p1 = this.verticalCascadeModule.startRespin(verticalMatrix, listTraceWayVertical);
		const p2 = this.horizontalCascadeModule.startRespin(horizonMatrix, listTraceWayHorizontal);
		await Promise.all([p1, p2]);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **8** | `async startRespin(): Promise<void> {` | Method entry signature declaring `startRespin()` returning `Promise<void>`. |
| **9** | `const { verticalMatrix, horizonMatrix, listTraceWayVertical, listTraceWayHorizontal } = this._compositeCascadeData.formatData();` | Allocates local variable `{ verticalMatrix, horizonMatrix, listTraceWayVertical, listTraceWayHorizontal }`. |
| **10** | `const p1 = this.verticalCascadeModule.startRespin(verticalMatrix, listTraceWayVertical);` | Allocates local variable `p1`. |
| **11** | `const p2 = this.horizontalCascadeModule.startRespin(horizonMatrix, listTraceWayHorizontal);` | Allocates local variable `p2`. |
| **12** | `await Promise.all([p1, p2]);` | Executes core logic. |
| **13** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as CompositeCascade9666
    participant Target as Engine / UI

    Caller->>Mod: Call startRespin()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Promise<void>
```
