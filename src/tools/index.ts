import { ToolRegistry } from "../core/tool_registry.js";
import { DocsSearchEngine } from "../engines/docs_search_engine.js";
import { GraphEngine } from "../engines/graph_engine.js";
import { createSearchTools } from "./search_tools.js";
import { createTransferTools } from "./transfer_tools.js";
import { createGameImplementTools } from "./game_implement_tools.js";
import { createSyncReminderTools } from "./sync_reminder_tools.js";

export interface ToolInitContext {
  docsEngine: DocsSearchEngine;
  graphEngine: GraphEngine;
}

export function initAllTools(registry: ToolRegistry, ctx: ToolInitContext): void {
  registry.registerMany(createSearchTools(ctx.docsEngine, ctx.graphEngine));
  registry.registerMany(createTransferTools(ctx.docsEngine));
  registry.registerMany(createGameImplementTools(ctx.docsEngine));
  registry.registerMany(createSyncReminderTools(ctx.docsEngine));
}

