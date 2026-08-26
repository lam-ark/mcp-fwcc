---
id: "game-implement:9666:module:NormalGameDirectorModule9666:methods:getScatterCollectData"
title: "NormalGameDirectorModule9666.getScatterCollectData Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "normal_game_director_module9666", "methods", "getScatterCollectData"]
---

# 📖 `NormalGameDirectorModule9666.getScatterCollectData()`

---

## 1. Method Signature & Overview

```typescript
public getScatterCollectData(): 
```

- **Declaring Class**: `NormalGameDirectorModule9666` ([`NormalGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts))
- **Source Range**: Lines 86 to 99
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	private getScatterCollectData(): { count: number, matrixIndexes: number[], formatMatrix: string[] } {
		const SCATTER_SYMBOL = 'A';
		const rawMatrix: string[] = this.dataStore.playSession.respinGameMatrix || this.dataStore.playSession.matrix || [];
		const formatMatrix: string[] = this.dataStore.playSession.normalFormatMatrix || this.dataStore.playSession.formatMatrix || [];

		const matrixIndexes: number[] = [];
		rawMatrix.forEach((symbol, index) => {
			if (symbol === SCATTER_SYMBOL) {
				matrixIndexes.push(index);
			}
		});

		return { count: matrixIndexes.length, matrixIndexes, formatMatrix };
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **86** | `private getScatterCollectData(): { count: number, matrixIndexes: number[], formatMatrix: string[] } {` | Method entry signature declaring `getScatterCollectData()` returning ``. |
| **87** | `const SCATTER_SYMBOL = 'A';` | Allocates local variable `SCATTER_SYMBOL`. |
| **88** | `const rawMatrix: string[] = this.dataStore.playSession.respinGameMatrix \|\| this.dataStore.playSession.matrix \|\| [];` | Allocates local variable `rawMatrix: string[]`. |
| **89** | `const formatMatrix: string[] = this.dataStore.playSession.normalFormatMatrix \|\| this.dataStore.playSession.formatMatrix \|\| [];` | Allocates local variable `formatMatrix: string[]`. |
| **90** | `` | Executes core logic. |
| **91** | `const matrixIndexes: number[] = [];` | Allocates local variable `matrixIndexes: number[]`. |
| **92** | `rawMatrix.forEach((symbol, index) => {` | Executes core logic. |
| **93** | `if (symbol === SCATTER_SYMBOL) {` | Conditional guard evaluating branching prerequisite. |
| **94** | `matrixIndexes.push(index);` | Executes core logic. |
| **95** | `}` | Scope boundary closing block. |
| **96** | `});` | Executes core logic. |
| **97** | `` | Executes core logic. |
| **98** | `return { count: matrixIndexes.length, matrixIndexes, formatMatrix };` | Returns value or promise to calling sequence. |
| **99** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameDirectorModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call getScatterCollectData()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return 
```
