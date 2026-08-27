---
id: "game-implement:9666:stack_wild:edge_cases_and_gotchas"
title: "Red Cliff (g9666) Stack Wild Edge Cases & Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModule", "gotchas", "edge_cases", "fast_stop"]
---

# ⚠️ Red Cliff (g9666) Stack Wild Edge Cases & Gotchas

---

## 1. Gotcha: Spine 'in' CompleteListener Interrupted During Fast Stop
- **Symptom**: Fast stopping or spamming spin locks the expansion sequence, preventing the table from resolving win evaluations.
- **Root Cause**: `playColumnEffect()` awaits a Promise tied to the Spine `'in'` complete listener. If interrupted, the callback never fired.
- **Fix**: In `resetAllEffectAndTasks()`, drain and execute all pending resolver callbacks stored in `this._pendingInResolvers`:
```typescript
if (this._pendingInResolvers.length > 0) {
    const resolvers = this._pendingInResolvers.splice(0);
    resolvers.forEach((resolve) => resolve());
}
```

---

## 2. Gotcha: Sibling Layer Inversion During Multi-Row Reveal
- **Symptom**: Newly spawned Wild symbols appear above the fire/flame column effect, breaking visual immersion.
- **Root Cause**: New symbol instances are appended as later children of `symbolLayer`.
- **Fix**: Call `raiseColumnEffectsToTop(stackReelIndexes)` after each row iteration so column effect skeletons retain the highest sibling index.

---

## 3. Gotcha: Orphaned Stack Wild Symbol Nodes on Abrupt State Exit
- **Symptom**: When switching game modes or on table reset, expanded Wild nodes remain floating on the table.
- **Fix**: In `onDestroyExtend()` and `onDisableExtend()`, always call `clearAllStackWilds()` to return all nodes in `_stackWildReels` to `symbolManager`.
