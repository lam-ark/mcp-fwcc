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

// ANSI Color Helpers
const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  cyan: "\x1b[36m",
  brightCyan: "\x1b[96m",
  green: "\x1b[32m",
  brightGreen: "\x1b[92m",
  yellow: "\x1b[33m",
  brightYellow: "\x1b[93m",
  blue: "\x1b[34m",
  gray: "\x1b[90m",
  white: "\x1b[37m",
};

function printBanner() {
  console.log(`${C.brightCyan}+------------------------------------------------------------------+${C.reset}`);
  console.log(`${C.brightCyan}|                                                                  |${C.reset}`);
  console.log(`${C.brightCyan}|   ______ _    _  _____ _____     _   _  ______ _____ _____       |${C.reset}`);
  console.log(`${C.brightCyan}|   |  ___| |  | |/  __ \\  __ \\   | | / / |  _  \\  _  /  ___|      |${C.reset}`);
  console.log(`${C.brightCyan}|   | |_  | |  | || /  \\/ /  \\/   | |/ /  | | | | | | \\ \`--.       |${C.reset}`);
  console.log(`${C.brightCyan}|   |  _| | |/\\| || |   | |       |    \\  | | | | | | |\`--. \\      |${C.reset}`);
  console.log(`${C.brightCyan}|   | |   \\  /\\  /| \\__/\\ \\__/\\   | |\\  \\ | |/ /\\ \\_/ /\\__/ /      |${C.reset}`);
  console.log(`${C.brightCyan}|   \\_|    \\/  \\/  \\____/\\____/   \\_| \\_/ |___/  \\___/\\____/       |${C.reset}`);
  console.log(`${C.brightCyan}|                                                                  |${C.reset}`);
  console.log(`${C.brightCyan}|             Cocos Common Slot Framework Knowledge Hub            |${C.reset}`);
  console.log(`${C.brightCyan}|                                                                  |${C.reset}`);
  console.log(`${C.brightCyan}+------------------------------------------------------------------+${C.reset}`);
  console.log("");
}

// Print Initial Banner
printBanner();

console.log(`${C.green}[INFO]${C.reset} Initializing FWCC Slot Framework Knowledge Engine...`);

// Step 1: Initialize Docs Search Engine
console.log(`${C.yellow}[1/3]${C.reset} Indexing markdown documentation chunks...`);
const docsEngine = new DocsSearchEngine(CONFIG.DOCS_DIR);
docsEngine.init();
const topicsCount = docsEngine.listTopics().length;
console.log(`      ${C.gray}-> Indexed topics and chunk vectors (${topicsCount} topics ready)${C.reset}`);

// Step 2: Initialize Conceptual Graph Engine
console.log(`${C.yellow}[2/3]${C.reset} Building conceptual relationship graph & backlinks...`);
const graphEngine = new GraphEngine();
graphEngine.init();
console.log(`      ${C.gray}-> Graph initialized with bi-directional relations${C.reset}`);

// Step 3: Register MCP Tools
console.log(`${C.yellow}[3/3]${C.reset} Registering MCP Tool definitions...`);
initAllTools(globalToolRegistry, { docsEngine, graphEngine });
const totalTools = globalToolRegistry.getAllTools().length;
console.log(`      ${C.gray}-> ${totalTools} tools registered to global registry${C.reset}\n`);

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
      console.log(`${C.green}[SSE]${C.reset} Client connected from ${C.cyan}${req.ip}${C.reset}`);
      const server = createServerInstance();
      const transport = new SSEServerTransport("/messages", res);

      const sessionId = transport.sessionId;
      transports.set(sessionId, transport);

      req.on("close", () => {
        console.log(`${C.gray}[SSE] Session ${sessionId} closed.${C.reset}`);
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

    // Helper for handling JSON-RPC 2.0 requests over HTTP
    const handleJsonRpc = async (req: express.Request, res: express.Response) => {
      const { jsonrpc, id, method, params } = req.body || {};
      if (jsonrpc !== "2.0") {
        return res.status(400).json({ jsonrpc: "2.0", id: id ?? null, error: { code: -32600, message: "Invalid Request" } });
      }

      if (method?.startsWith("notifications/")) {
        if (id === undefined || id === null) {
          return res.status(204).end();
        }
        return res.json({ jsonrpc: "2.0", id, result: {} });
      }

      if (method === "initialize") {
        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: params?.protocolVersion || "2024-11-05",
            capabilities: {
              tools: {
                listChanged: false,
              },
            },
            serverInfo: {
              name: CONFIG.SERVER_NAME,
              version: CONFIG.SERVER_VERSION,
            },
          },
        });
      }

      if (method === "tools/list") {
        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            tools: globalToolRegistry.getMCPToolList(),
          },
        });
      }

      if (method === "tools/call") {
        const { name, arguments: toolArgs } = params || {};
        if (!name) {
          return res.status(400).json({
            jsonrpc: "2.0",
            id,
            error: { code: -32602, message: "Missing tool name in params" },
          });
        }
        try {
          const result = await globalToolRegistry.executeTool(name, toolArgs || {});
          return res.json({
            jsonrpc: "2.0",
            id,
            result,
          });
        } catch (err: any) {
          return res.json({
            jsonrpc: "2.0",
            id,
            result: {
              content: [{ type: "text", text: `Tool error: ${err?.message || String(err)}` }],
              isError: true,
            },
          });
        }
      }

      if (method === "resources/list") {
        return res.json({
          jsonrpc: "2.0",
          id,
          result: { resources: [] },
        });
      }

      if (method === "prompts/list") {
        return res.json({
          jsonrpc: "2.0",
          id,
          result: { prompts: [] },
        });
      }

      return res.status(404).json({ jsonrpc: "2.0", id, error: { code: -32601, message: `Method '${method}' not found` } });
    };

    // HTTP JSON-RPC Endpoints (/ and /mcp)
    app.post("/", handleJsonRpc);
    app.post("/mcp", handleJsonRpc);

    // View raw or rendered markdown document directly over HTTP
    app.use("/doc", (req, res) => {
      const relPath = decodeURIComponent(req.path.replace(/^\//, "").split("?")[0]);
      const doc = docsEngine.getDoc(relPath);
      if (!doc.found || !doc.content) {
        return res.status(404).send(`<h1>404 Not Found</h1><p>Document <code>${relPath}</code> not found.</p>`);
      }

      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      return res.send(doc.content);
    });

    // Export bundled report directly over HTTP (e.g. GET /report?q=BonusGame)
    app.get("/report", (req, res) => {
      const q = String(req.query.q || req.query.query || "");
      const limit = Number(req.query.limit) || 5;
      const report = docsEngine.exportReport(q, limit);

      res.setHeader("Content-Type", "text/markdown; charset=utf-8");
      return res.send(report.markdown);
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
      console.log(`${C.brightCyan}+------------------------------------------------------------------+${C.reset}`);
      console.log(`${C.brightCyan}|${C.reset}                     ${C.bold}${C.brightGreen}SERVER READY AND LISTENING${C.reset}                   ${C.brightCyan}|${C.reset}`);
      console.log(`${C.brightCyan}+------------------------------------------------------------------+${C.reset}`);
      console.log(`  ${C.yellow}*${C.reset} SSE Endpoint   : ${C.cyan}http://localhost:${CONFIG.PORT}/sse${C.reset}`);
      console.log(`  ${C.yellow}*${C.reset} HTTP Endpoint  : ${C.cyan}http://localhost:${CONFIG.PORT}/mcp${C.reset}`);
      console.log(`  ${C.yellow}*${C.reset} Doc Viewer     : ${C.cyan}http://localhost:${CONFIG.PORT}/doc/<relPath>${C.reset}`);
      console.log(`  ${C.yellow}*${C.reset} Report Engine  : ${C.cyan}http://localhost:${CONFIG.PORT}/report?q=<query>${C.reset}`);
      console.log(`  ${C.yellow}*${C.reset} Health Check   : ${C.cyan}http://localhost:${CONFIG.PORT}/health${C.reset}`);
      console.log(`  ${C.yellow}*${C.reset} Active Tools   : ${C.brightGreen}${totalTools} tools loaded${C.reset}`);
      console.log(`  ${C.yellow}*${C.reset} Docs Root      : ${C.gray}${CONFIG.DOCS_DIR}${C.reset}`);
      console.log(`${C.brightCyan}+------------------------------------------------------------------+${C.reset}\n`);
    });
  }
}

bootstrap().catch((err) => {
  console.error(`${C.yellow}[Fatal Error]${C.reset} Unable to start MCP Server:`, err);
  process.exit(1);
});
