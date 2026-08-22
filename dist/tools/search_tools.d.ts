import { ToolDefinition } from "../core/types.js";
import { DocsSearchEngine } from "../engines/docs_search_engine.js";
import { GraphEngine } from "../engines/graph_engine.js";
export declare function createSearchTools(docsEngine: DocsSearchEngine, graphEngine: GraphEngine): ToolDefinition[];
