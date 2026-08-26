---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:_disableNormalSpinButton"
title: "NormalGameDirectorModule9666._disableNormalSpinButton Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "_disableNormalSpinButton"]
---

# 📖 `NormalGameDirectorModule9666._disableNormalSpinButton()`

---

## 1. Method Signature & Overview

```typescript
public _disableNormalSpinButton(): void
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 176 to 183
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	protected _disableNormalSpinButton(): void {
		if (this.slotButton) {
			const buttons = this.slotButton.getComponentsInChildren(cc.Button);
			buttons.forEach((btn: cc.Button) => {
				btn.interactable = false;
			});
		}
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **176** | `protected _disableNormalSpinButton(): void {` | Method entry signature declaring `_disableNormalSpinButton()` returning `void`. |
| **177** | `if (this.slotButton) {` | Conditional guard evaluating branching prerequisite. |
| **178** | `const buttons = this.slotButton.getComponentsInChildren(cc.Button);` | Allocates local variable `buttons`. |
| **179** | `buttons.forEach((btn: cc.Button) => {` | Executes core logic. |
| **180** | `btn.interactable = false;` | Executes core logic. |
| **181** | `});` | Executes core logic. |
| **182** | `}` | Scope boundary closing block. |
| **183** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call _disableNormalSpinButton()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
