---
id: "game-implement:9666:module:HorizontalCascadeModule9666:methods:calculatePosition"
title: "HorizontalCascadeModule9666.calculatePosition Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "HorizontalCascadeModule9666", "horizontal_cascade_module9666", "methods", "calculatePosition"]
---

# 📖 `HorizontalCascadeModule9666.calculatePosition()`

---

## 1. Method Signature & Overview

```typescript
public calculatePosition(posX: number, posY: number): 
```

- **Declaring Class**: `HorizontalCascadeModule9666` ([`HorizontalCascadeModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/HorizontalCascadeModule9666.ts))
- **Source Range**: Lines 69 to 75
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	protected calculatePosition(posX: number, posY: number): { targetPos: cc.Vec2, targetBouncePos: cc.Vec2 } {
		const targetPos = new cc.Vec2(posX, posY);
		const DELTA_BOUNCING = 0;
		const targetBouncePos = new cc.Vec2(posX + DELTA_BOUNCING, posY);

		return { targetPos, targetBouncePos };
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **69** | `protected calculatePosition(posX: number, posY: number): { targetPos: cc.Vec2, targetBouncePos: cc.Vec2 } {` | Method entry signature declaring `calculatePosition(posX: number, posY: number)` returning ``. |
| **70** | `const targetPos = new cc.Vec2(posX, posY);` | Allocates local variable `targetPos`. |
| **71** | `const DELTA_BOUNCING = 0;` | Allocates local variable `DELTA_BOUNCING`. |
| **72** | `const targetBouncePos = new cc.Vec2(posX + DELTA_BOUNCING, posY);` | Allocates local variable `targetBouncePos`. |
| **73** | `` | Executes core logic. |
| **74** | `return { targetPos, targetBouncePos };` | Returns value or promise to calling sequence. |
| **75** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as HorizontalCascadeModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call calculatePosition(posX: number, posY: number)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return 
```
