---
id: "game-implement:9666:module:OfflineMockTransport:methods:encodeQueryData"
title: "OfflineMockTransport.encodeQueryData Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "OfflineMockTransport", "offline_mock_transport", "methods", "encodeQueryData"]
---

# 📖 `OfflineMockTransport.encodeQueryData()`

---

## 1. Method Signature & Overview

```typescript
public encodeQueryData(data: Record<string, any>): string
```

- **Declaring Class**: `OfflineMockTransport` ([`OfflineMockTransport.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Mock/Framework/OfflineMockTransport.ts))
- **Source Range**: Lines 267 to 269
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
		encodeQueryData(data: Record<string, any>): string {
			return Object.keys(data || {}).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join("&");
		}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **267** | `encodeQueryData(data: Record<string, any>): string {` | Method entry signature declaring `encodeQueryData(data: Record<string, any>)` returning `string`. |
| **268** | `return Object.keys(data \|\| {}).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join("&");` | Returns value or promise to calling sequence. |
| **269** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as OfflineMockTransport
    participant Target as Engine / UI

    Caller->>Mod: Call encodeQueryData(data: Record<string, any>)
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return string
```
