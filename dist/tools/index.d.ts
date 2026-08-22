import { ToolRegistry } from "../core/tool_registry.js";
import { DocsSearchEngine } from "../engines/docs_search_engine.js";
import { GraphEngine } from "../engines/graph_engine.js";
export interface ToolInitContext {
    docsEngine: DocsSearchEngine;
    graphEngine: GraphEngine;
}
export declare function initAllTools(registry: ToolRegistry, ctx: ToolInitContext): void;
