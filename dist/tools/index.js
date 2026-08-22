import { createSearchTools } from "./search_tools.js";
export function initAllTools(registry, ctx) {
    registry.registerMany(createSearchTools(ctx.docsEngine, ctx.graphEngine));
}
//# sourceMappingURL=index.js.map