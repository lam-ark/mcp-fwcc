import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import express from "express";
import cors from "cors";
import { CONFIG } from "./config/constants.js";
import { globalToolRegistry } from "./core/tool_registry.js";
import { DocsSearchEngine } from "./engines/docs_search_engine.js";
import { GraphEngine } from "./engines/graph_engine.js";
import { initAllTools } from "./tools/index.js";

// Initialize Engines and Register Tools
const docsEngine = new DocsSearchEngine(CONFIG.DOCS_DIR);
docsEngine.init();

const graphEngine = new GraphEngine();
graphEngine.init();

initAllTools(globalToolRegistry, { docsEngine, graphEngine });

function createServerInstance() {
  const server = new Server(
    {
      name: CONFIG.SERVER_NAME,
      version: CONFIG.SERVER_VERSION,
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: globalToolRegistry.getMCPToolList(),
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    return await globalToolRegistry.executeTool(name, args);
  });

  return server;
}

async function bootstrap() {
  const isStdio = process.argv.includes("--stdio");

  if (isStdio) {
    const server = createServerInstance();
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error(`[${CONFIG.SERVER_NAME}] Running over Stdio Transport.`);
  } else {
    const app = express();
    app.use(cors());
    app.use(express.json({ limit: "50mb" }));

    const transports = new Map<string, SSEServerTransport>();

    // SSE endpoint
    app.get("/sse", async (req, res) => {
      console.log(`[SSE] Client connected from ${req.ip}`);
      const server = createServerInstance();
      const transport = new SSEServerTransport("/messages", res);

      const sessionId = transport.sessionId;
      transports.set(sessionId, transport);

      req.on("close", () => {
        console.log(`[SSE] Session ${sessionId} closed.`);
        transports.delete(sessionId);
      });

      await server.connect(transport);
    });

    app.post("/messages", async (req, res) => {
      const sessionId = String(req.query.sessionId || "");
      let transport = transports.get(sessionId);

      if (!transport && transports.size > 0) {
        transport = transports.values().next().value;
      }

      if (transport) {
        await transport.handlePostMessage(req, res);
      } else {
        res.status(400).json({ error: "No active SSE session found." });
      }
    });

    // HTTP JSON-RPC 2.0 Endpoint
    app.post("/", async (req, res) => {
      const { jsonrpc, id, method, params } = req.body;
      if (jsonrpc !== "2.0") {
        return res.status(400).json({ jsonrpc: "2.0", id: id || null, error: { code: -32600, message: "Invalid Request" } });
      }

      if (method === "tools/list") {
        return res.json({
          jsonrpc: "2.0",
          id,
          result: { tools: globalToolRegistry.getMCPToolList() },
        });
      }

      if (method === "tools/call") {
        const { name, arguments: args } = params || {};
        const result = await globalToolRegistry.executeTool(name, args);
        return res.json({
          jsonrpc: "2.0",
          id,
          result,
        });
      }

      return res.status(404).json({ jsonrpc: "2.0", id, error: { code: -32601, message: "Method not found" } });
    });

    // Health check
    app.get("/health", (req, res) => {
      res.json({
        status: "ok",
        server: CONFIG.SERVER_NAME,
        version: CONFIG.SERVER_VERSION,
        port: CONFIG.PORT,
        sseEndpoint: `http://localhost:${CONFIG.PORT}/sse`,
        toolsCount: globalToolRegistry.getAllTools().length,
        tools: globalToolRegistry.getAllTools().map((t) => t.name),
      });
    });

    app.listen(CONFIG.PORT, () => {
      console.log(`=======================================================`);
      console.log(`🚀 Cocos Common (cc-common) Knowledge MCP Server Started!`);
      console.log(`📡 SSE Endpoint: http://localhost:${CONFIG.PORT}/sse`);
      console.log(`📡 HTTP Endpoint: http://localhost:${CONFIG.PORT}/`);
      console.log(`🩺 Health Check: http://localhost:${CONFIG.PORT}/health`);
      console.log(`🛠️  Total Tools: ${globalToolRegistry.getAllTools().length}`);
      console.log(`📚 Indexed Docs: ${CONFIG.DOCS_DIR}`);
      console.log(`=======================================================`);
    });
  }
}

bootstrap().catch((err) => {
  console.error("[Fatal Error] Unable to start MCP Server:", err);
  process.exit(1);
});
