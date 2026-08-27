---
id: "game-implement:9666:architecture:directors_and_writers"
title: "Red Cliff (g9666) Game Directors & Writers Pipeline"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "FreeGameDirectorModule9666", "NormalGameWriterModule9666", "FreeGameWriterModule9666", "pipeline"]
---

# 🎬 Red Cliff (g9666) Game Directors & Writers Pipeline

---

## 1. Architecture Overview

Red Cliff 9666 follows the **Director-Writer Command Pattern**:
- **Writer Modules** ([`NormalGameWriterModule9666`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameWriterModule9666.ts), [`FreeGameWriterModule9666`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameWriterModule9666.ts)): Construct ordered arrays of command objects (`{ command: string, data?: any }`) defining the exact animation and logic execution sequence.
- **Director Modules** ([`NormalGameDirectorModule9666`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts), [`FreeGameDirectorModule9666`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts)): Execute commands asynchronously, coordinating between Table, Reel, HUD, Payline, and Cutscene modules.

```mermaid
graph TD
    A[Director.runAction: 'NormalSpinTrigger'] --> B[Writer.makeScriptNormalSpinTrigger]
    B --> C[Array of Command Objects]
    C --> D[Director executes command by command sequentially via Promises]
    D --> E[Table / Multiplier / Payline / Jackpot Modules]
```

---

## 2. Key Command Pipeline Comparison

| Step / Scenario | Normal Game Sequence (`NormalGameWriterModule9666`) | Free Game Sequence (`FreeGameWriterModule9666`) |
| :--- | :--- | :--- |
| **Pre-Resume / Resume** | `_pauseWallet` $\rightarrow$ `_resumeNormalTable` $\rightarrow$ `_collectWildMultiplier` $\rightarrow$ `_setUpPaylines` $\rightarrow$ `_resumeWinAmount` | `_resumeFreeTable` $\rightarrow$ `_setUpPaylines` $\rightarrow$ `_resumeWinAmount` $\rightarrow$ `_initJackpotCollection` $\rightarrow$ `_showAllPaylines` |
| **Stop Table** | `_stopSpinningTopTable` $\rightarrow$ `_stopSpinningTable` $\rightarrow$ `_syncStackWild` $\rightarrow$ `_collectWildMultiplier` $\rightarrow$ `_setUpPaylines` | `_stopSpinningTopTable` $\rightarrow$ `_stopSpinningTable` $\rightarrow$ `_syncStackWild` $\rightarrow$ `_collectWildMultiplier` $\rightarrow$ `_setUpPaylines` |
| **Stop Respin (Cascade)** | `_showRespinResultEntry` $\rightarrow$ `_stopRespinningTable` $\rightarrow$ `_syncStackWild` $\rightarrow$ `_collectWildMultiplier` $\rightarrow$ `_setUpPaylines` $\rightarrow$ `_showRespinResultFinal` | `_showRespinResultEntry` $\rightarrow$ `_stopRespinningTable` $\rightarrow$ `_syncStackWild` $\rightarrow$ `_collectWildMultiplier` $\rightarrow$ `_setUpPaylines` $\rightarrow$ `_showRespinResultFinal` |

---

## 3. Custom Director Method Overrides

### 1. `_collectScatter()` & Parallel Respin
In both Normal and Free Game Directors, Scatters are collected concurrently with table cascades:
```typescript
override async _startRespinningTable(data: any): Promise<void> {
    await Promise.all([
        this.moduleEvent.emit("TABLE_START_RESPIN", data),
        this._collectScatter(),
    ]);
}
```

### 2. `_showStartRespinEffect()` & Multiplier Application
```typescript
async _showStartRespinEffect(): Promise<void> {
    if (this.dataStore.playSession.payLines || this.dataStore.playSession.freeGamePayLines) {
        this._blinkAllPaylines();
        this._showPaylineAmount(this.dataStore.playSession.respinGameTotal === 1);
        const speed = (this.gameSettings.isFastToResult || this.gameSettings.isTurboActive) ? 2 : 1;
        await this.delayAction(1 / speed);
        await this.eventManager.emit("APPLY_MULTIPLIER_TO_WIN_AMOUNT", this.dataStore.playSession.respinGameTotal === 1);
        this.eventManager.emit(COMMIT_RESPIN_WIN_AMOUNT);
        await this._clearPaylines();
    }
}
```
