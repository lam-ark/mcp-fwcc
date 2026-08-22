# 🧠 MCP-FWCC: Cocos Common Slot Framework Knowledge Server

**Model Context Protocol (MCP)** Server providing rich semantic search, AST class exploration, architectural relationship graphs, and step-by-step guides for the **`cc-common`** Slot Framework SDK in Cocos Creator 2.4.

---

## 🌟 Features

- **📚 307+ Indexed SDK Modules**: Full coverage of `cc-core-lib`, `cc-network`, `cc-slot-module`, `cc-slot-mechanics`, and `cc-slot-features`.
- **⚡ High-Speed MiniSearch Engine**: Instant fuzzy full-text search across class definitions, properties, methods, decorators, and implementation sources.
- **🕸️ Conceptual Graph Engine**: Maps relationships between Directors, Table Modules, Symbol Managers, Payline Info, GameDataStore, and Event Buses.
- **🔌 Multi-Transport Support**:
  - HTTP JSON-RPC 2.0 (`POST http://localhost:8925/`)
  - Server-Sent Events SSE (`http://localhost:8925/sse` & `/messages`)
  - Stdio Transport (`--stdio`)
- **🩺 Live Health Check**: `http://localhost:8925/health`

---

## 🛠️ MCP Tools

| Tool | Description |
| :--- | :--- |
| **`fwcc_search_docs`** | Fuzzy search across 307+ cc-common SDK articles, classes, methods, and mechanics |
| **`fwcc_get_doc`** | Retrieve full Markdown documentation and source code excerpt for any module |
| **`fwcc_list_topics`** | List available categories & topics in cc-common with exported classes |
| **`fwcc_get_class_api`** | Get detailed class signature, properties, methods, and inheritance hierarchy |
| **`fwcc_get_related_topics`** | Graph traversal to find related classes, mechanics, and event flows |

---

## 🚀 Quick Start

### 1. Build & Run
```bash
npm install
npm run build
npm start
```

### 2. Client Configurations

#### Antigravity / Gemini IDE (`.agents/mcp_config.json`)
```json
{
  "mcpServers": {
    "mcp-fwcc": {
      "command": "node",
      "args": ["c:/Users/ADMIN/lamnino/cc20-new-all-in-one/mcp/mcp-fwcc/dist/index.js"]
    }
  }
}
```

#### Cursor (`.cursor/mcp.json`)
```json
{
  "mcpServers": {
    "mcp-fwcc": {
      "url": "http://localhost:8925/sse"
    }
  }
}
```
