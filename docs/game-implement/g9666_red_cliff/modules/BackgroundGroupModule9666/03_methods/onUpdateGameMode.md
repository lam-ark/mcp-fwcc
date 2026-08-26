---
id: "game-implement:9666:module:BackgroundGroupModule9666:methods:onUpdateGameMode"
title: "BackgroundGroupModule9666.onUpdateGameMode Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "BackgroundGroupModule9666", "background_group_module9666", "methods", "onUpdateGameMode"]
---

# 📖 `BackgroundGroupModule9666.onUpdateGameMode()`

---

## 1. Method Signature & Overview

```typescript
public onUpdateGameMode(mode: number): void
```

- **Declaring Class**: `BackgroundGroupModule9666` ([`BackgroundGroupModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/BackgroundGroupModule9666.ts))
- **Source Range**: Lines 26 to 29
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	onUpdateGameMode(mode: number): void {
		const animName = this.isFreeGameMode(mode) ? this.freeGameAnim : this.normalGameAnim;
		this.playBackground(animName);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **26** | `onUpdateGameMode(mode: number): void {` | Method entry signature declaring `onUpdateGameMode(mode: number)` returning `void`. |
| **27** | `const animName = this.isFreeGameMode(mode) ? this.freeGameAnim : this.normalGameAnim;` | Allocates local variable `animName`. |
| **28** | `this.playBackground(animName);` | Executes core logic. |
| **29** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as BackgroundGroupModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call onUpdateGameMode(mode: number)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
