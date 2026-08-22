import { ToolRegistry } from "../core/tool_registry.js";
import { DocsSearchEngine } from "../engines/docs_search_engine.js";
import { GraphEngine } from "../engines/graph_engine.js";
import { createSearchTools } from "./search_tools.js";

export interface ToolInitContext {
  docsEngine: DocsSearchEngine;
  graphEngine: GraphEngine;
}

export function initAllTools(registry: ToolRegistry, ctx: ToolInitContext): void {
  registry.registerMany(createSearchTools(ctx.docsEngine, ctx.graphEngine));
}
