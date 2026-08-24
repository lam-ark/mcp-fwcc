---
id: "cc_slot_module:PaylineLineModule:methods:showLineNumber"
title: "PaylineLineModule.showLineNumber Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "showLineNumber"]
---

# 📖 `PaylineLineModule.showLineNumber()`

---

## 1. Method Overview & Signature

Retrieves or spawns a line instance node for `lineID`, parents it to `container`, and emits `"INIT"` and `"SHOW"`.

```typescript
protected showLineNumber(lineID: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showLineNumber(lineID: any): void {
    let line = this.lines[lineID];
    if (!line) {
        line = this.getLine();
        line.setParent(this.container);
        line.emit("INIT", lineID);
        this.lines[lineID] = line;
    }
    line.emit("SHOW");
}
```
