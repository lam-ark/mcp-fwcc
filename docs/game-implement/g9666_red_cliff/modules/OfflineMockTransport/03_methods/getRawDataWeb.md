---
id: "game-implement:9666:module:OfflineMockTransport:methods:getRawDataWeb"
title: "OfflineMockTransport.getRawDataWeb Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "OfflineMockTransport", "offline_mock_transport", "methods", "getRawDataWeb"]
---

# 📖 `OfflineMockTransport.getRawDataWeb()`

---

## 1. Method Signature & Overview

```typescript
public getRawDataWeb({ callback }: { callback?: Function } = {}): void
```

- **Declaring Class**: `OfflineMockTransport` ([`OfflineMockTransport.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Mock/Framework/OfflineMockTransport.ts))
- **Source Range**: Lines 263 to 265
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
		getRawDataWeb({ callback }: { callback?: Function } = {}): void {
			callback?.({ status: 200, data: {} });
		}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **263** | `getRawDataWeb({ callback }: { callback?: Function } = {}): void {` | Method entry signature declaring `getRawDataWeb({ callback }: { callback?: Function } = {})` returning `void`. |
| **264** | `callback?.({ status: 200, data: {} });` | Executes core logic. |
| **265** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as OfflineMockTransport
    participant Target as Engine / UI

    Caller->>Mod: Call getRawDataWeb({ callback }: { callback?: Function } = {})
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
