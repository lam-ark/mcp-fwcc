---
id: "cc_slot_mechanics:NudgeReelModule:methods:addBufferSymbol"
title: "NudgeReelModule.addBufferSymbol Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "addBufferSymbol"]
---

# 📖 `NudgeReelModule.addBufferSymbol()`

---

## 1. Method Signature & Overview

```typescript
public addBufferSymbol(positionY: number): void
```

- **Declaring Class**: `NudgeReelModule` (`assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeReelModule.ts`)
- **Source Code Location**: Lines 168 to 172
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected addBufferSymbol(positionY: number): void {
		const { symbolCode, symbolSize } = this.getRandomSymbol();
		const bufferSymbol = this.spawnNudgeSymbol(symbolCode, symbolSize);
		bufferSymbol.setPosition(new Vec2(bufferSymbol.position.x, positionY + this._direction * this.SYMBOL_HEIGHT));
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **168** | `protected addBufferSymbol(positionY: number): void {` | Method entry signature declaring `addBufferSymbol(positionY: number)` with return type `void`. |
| **169** | `const { symbolCode, symbolSize } = this.getRandomSymbol();` | Local variable initialization allocating `{ symbolCode, symbolSize }`. |
| **170** | `const bufferSymbol = this.spawnNudgeSymbol(symbolCode, symbolSize);` | Local variable initialization allocating `bufferSymbol`. |
| **171** | `bufferSymbol.setPosition(new Vec2(bufferSymbol.position.x, positionY + this._direction * this.SYMBOL_HEIGHT));` | Applies operational logic and state mutation. |
| **172** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as NudgeReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke addBufferSymbol(positionY: number)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
