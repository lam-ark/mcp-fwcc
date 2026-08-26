import { ToolDefinition } from "../core/types.js";
import { DocsSearchEngine } from "../engines/docs_search_engine.js";
import { GraphEngine } from "../engines/graph_engine.js";

export function createSearchTools(docsEngine: DocsSearchEngine, graphEngine: GraphEngine): ToolDefinition[] {
  return [
    // 1. fwcc_search_docs
    {
      name: "fwcc_search_docs",
      description: "Fast semantic search across cc-common Slot Framework SDK documentation, methods, mechanics, gotchas, and features with Frontmatter tag weighting.",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query (e.g. 'SlotBaseModule onLoadExtend', 'PaylineInfoModule', 'resetAllEffectAndTasks', 'Cascade')" },
          limit: { type: "number", description: "Maximum results to return (default: 5)", default: 5 },
          category: { type: "string", description: "Optional filter: 'cc_core_lib', 'cc_network', 'cc_slot_module', 'cc_slot_mechanics', 'cc_slot_features'" },
          tag: { type: "string", description: "Optional tag filter (e.g. 'lifecycle', 'ioc', 'gotchas', 'method', 'game_flow')" },
        },
        required: ["query"],
      },
      handler: async (args: any) => {
        const query = String(args.query || "");
        const limit = Number(args.limit) || 5;
        const category = args.category;
        const tag = args.tag;

        const results = docsEngine.search(query, limit, category, tag);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ totalMatches: results.length, query, category, tag, results }, null, 2),
            },
          ],
        };
      },
    },

    // 2. fwcc_search_exact
    {
      name: "fwcc_search_exact",
      description: "Search exact class name, method signature, tag, or topic ID without fuzzy noise.",
      inputSchema: {
        type: "object",
        properties: {
          keyword: { type: "string", description: "Exact symbol or keyword (e.g. 'onLoadExtend', 'SlotBaseModule', 'parseDataPS', 'RESET_MULTIPLIER')" },
        },
        required: ["keyword"],
      },
      handler: async (args: any) => {
        const keyword = String(args.keyword || "");
        const matches = docsEngine.searchExact(keyword);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ totalExactMatches: matches.length, keyword, matches }, null, 2),
            },
          ],
        };
      },
    },

    // 3. fwcc_get_doc
    {
      name: "fwcc_get_doc",
      description: "Retrieve full un-truncated markdown documentation and source code for a specific cc-common module or file path.",
      inputSchema: {
        type: "object",
        properties: {
          topicOrRelPath: { type: "string", description: "Topic ID or relative path (e.g. 'SlotBaseModule', '01_module_architecture_and_philosophy', 'cc_slot_module:overview:architecture_and_philosophy')" },
        },
        required: ["topicOrRelPath"],
      },
      handler: async (args: any) => {
        const topic = String(args.topicOrRelPath || "");
        const res = docsEngine.getDoc(topic);

        if (!res.found) {
          return {
            content: [{ type: "text", text: `Document '${topic}' not found in cc-common knowledge base.` }],
          };
        }

        return {
          content: [{ type: "text", text: res.content || "" }],
        };
      },
    },

    // 3b. fwcc_read_chunk
    {
      name: "fwcc_read_chunk",
      description: "Read a specific section chunk by chunkId or relPath with optional contextual sliding-window (windowSize=1 returns previous, center, and next chunks) to preserve code context while saving tokens.",
      inputSchema: {
        type: "object",
        properties: {
          chunkIdOrPath: { type: "string", description: "Exact chunk ID (e.g. 'NormalGameDirectorModule#sec-1') or relative file path (e.g. '08_deep_dive/code_analysis/SlotReelModule.md')" },
          chunkIndex: { type: "number", description: "0-based chunk section index when using file path (default: 0)" },
          windowSize: { type: "number", description: "Number of context chunks to include before and after (default: 1)", default: 1 },
        },
        required: ["chunkIdOrPath"],
      },
      handler: async (args: any) => {
        const chunkIdOrPath = String(args.chunkIdOrPath || "");
        const chunkIndex = args.chunkIndex !== undefined ? Number(args.chunkIndex) : undefined;
        const windowSize = args.windowSize !== undefined ? Number(args.windowSize) : 1;

        const res = docsEngine.readChunk(chunkIdOrPath, chunkIndex, windowSize);

        if (!res.found) {
          return {
            content: [{ type: "text", text: `Chunk or document '${chunkIdOrPath}' not found in index.` }],
          };
        }

        return {
          content: [
            {
              type: "text",
              text: res.combinedMarkdown || JSON.stringify(res.centerChunk, null, 2),
            },
          ],
        };
      },
    },

    // 3c. fwcc_search_topic
    {
      name: "fwcc_search_topic",
      description: "Quickly filter documentation by Taxonomy Tier (00_catalog -> 16_prompts), category or specific feature domain.",
      inputSchema: {
        type: "object",
        properties: {
          tierOrCategory: { type: "string", description: "Tier path or category keyword (e.g. '08_deep_dive', '05_recipes', '04_events', 'cc_slot_module', 'cc_slot_mechanics')" },
          limit: { type: "number", description: "Maximum topics to return (default: 20)", default: 20 },
        },
        required: ["tierOrCategory"],
      },
      handler: async (args: any) => {
        const tierOrCategory = String(args.tierOrCategory || "");
        const limit = Number(args.limit) || 20;
        const topics = docsEngine.searchTopic(tierOrCategory, limit);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tierOrCategory, totalMatches: topics.length, topics }, null, 2),
            },
          ],
        };
      },
    },

    // 3c. fwcc_read_batch
    {
      name: "fwcc_read_batch",
      description: "Read multiple documentation files or topics in a single tool call to accelerate agent comprehension without looping.",
      inputSchema: {
        type: "object",
        properties: {
          pathsOrTopics: {
            type: "array",
            items: { type: "string" },
            description: "List of relative paths or topic IDs to read (e.g. ['NormalGameDirectorModule/05_methods/enter.md', 'NormalGameWriterModule/05_methods/makeScriptResumeNormalGame.md'])",
          },
        },
        required: ["pathsOrTopics"],
      },
      handler: async (args: any) => {
        const list = Array.isArray(args.pathsOrTopics) ? args.pathsOrTopics : [];
        const results = docsEngine.readBatch(list);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ totalRequested: list.length, results }, null, 2),
            },
          ],
        };
      },
    },

    // 4. fwcc_list_topics
    {
      name: "fwcc_list_topics",
      description: "List all cc-common categories, topics, and atomic documentation files.",
      inputSchema: {
        type: "object",
        properties: {
          category: { type: "string", description: "Optional filter by category: 'cc_core_lib', 'cc_network', 'cc_slot_module', 'cc_slot_mechanics', 'cc_slot_features'" },
          tag: { type: "string", description: "Optional filter by tag (e.g. 'overview', 'gotchas', 'method', 'recipes')" },
        },
      },
      handler: async (args: any) => {
        const category = args?.category;
        const tag = args?.tag;
        const topics = docsEngine.listTopics(category, tag);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ totalTopics: topics.length, category: category || "all", tag: tag || "all", topics }, null, 2),
            },
          ],
        };
      },
    },

    // 5. fwcc_get_class_api
    {
      name: "fwcc_get_class_api",
      description: "Get detailed class signature, properties, methods, and implementation for a cc-common class.",
      inputSchema: {
        type: "object",
        properties: {
          className: { type: "string", description: "Exact class name (e.g. 'SlotDirector', 'SlotBaseModule', 'PaylineInfoModule', 'SlotGameSettings')" },
        },
        required: ["className"],
      },
      handler: async (args: any) => {
        const className = String(args.className || "");
        const res = docsEngine.getClassApi(className);

        if (!res.found) {
          return {
            content: [{ type: "text", text: `Class '${className}' not found in cc-common SDK.` }],
          };
        }

        return {
          content: [
            {
              type: "text",
              text: res.content || "",
            },
          ],
        };
      },
    },

    // 6. fwcc_get_related_topics
    {
      name: "fwcc_get_related_topics",
      description: "Get full semantic node relationships (inheritsFrom, manages, usedBy, dependsOn, emitsEvents, listensToEvents, gotchas, backlinks) for a Slot component.",
      inputSchema: {
        type: "object",
        properties: {
          concept: { type: "string", description: "Core concept or Class name (e.g. 'SlotBaseModule', 'SlotDirector', 'SlotTableModule', 'GameDataStore')" },
        },
        required: ["concept"],
      },
      handler: async (args: any) => {
        const concept = String(args.concept || "");
        const res = graphEngine.getRelated(concept);

        if (!res) {
          return {
            content: [{ type: "text", text: `No relationship graph node found for '${concept}'.` }],
          };
        }

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(res, null, 2),
            },
          ],
        };
      },
    },

    // 7. fwcc_get_backlinks
    {
      name: "fwcc_get_backlinks",
      description: "Find which modules, directors, or classes depend on, use, or subclass a given component.",
      inputSchema: {
        type: "object",
        properties: {
          concept: { type: "string", description: "Class or component name (e.g. 'SlotBaseModule', 'GameEventManager', 'SlotSoundPlayerModule')" },
        },
        required: ["concept"],
      },
      handler: async (args: any) => {
        const concept = String(args.concept || "");
        const backlinks = graphEngine.getBacklinks(concept);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ concept, totalBacklinks: backlinks.length, backlinks }, null, 2),
            },
          ],
        };
      },
    },

    // 8. fwcc_get_events_map
    {
      name: "fwcc_get_events_map",
      description: "Lookup which modules emit and which modules listen to a specific event on the Global/Scoped Event Bus, or look up all events emitted/listened to by a module.",
      inputSchema: {
        type: "object",
        properties: {
          eventName: { type: "string", description: "Event name or Module/Class name (e.g. 'RESET_ALL_EFFECT_AND_TASKS', 'START_SPIN', 'TABLE_STOPPED', 'SlotDirector', 'SlotTableModule')" },
          eventOrModule: { type: "string", description: "Alias for eventName" },
          concept: { type: "string", description: "Alias for eventName" },
        },
      },
      handler: async (args: any) => {
        const query = String(args.eventName || args.eventOrModule || args.concept || args.module || "");
        const result = graphEngine.getNodesByEvent(query);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      },
    },

    // 9. fwcc_get_gotchas
    {
      name: "fwcc_get_gotchas",
      description: "Get known engine pitfalls, memory leak defects, and gotchas for a specific module or all modules.",
      inputSchema: {
        type: "object",
        properties: {
          moduleOrTopic: { type: "string", description: "Optional module name (e.g. 'SlotBaseModule', 'SlotSymbolManager', 'SlotTableModule')" },
          keyword: { type: "string", description: "Alias for moduleOrTopic" },
          concept: { type: "string", description: "Alias for moduleOrTopic" },
        },
      },
      handler: async (args: any) => {
        const moduleOrTopic = args?.moduleOrTopic || args?.keyword || args?.concept;
        const gotchas = graphEngine.getGotchas(moduleOrTopic);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ moduleOrTopic: moduleOrTopic || "all", totalModulesWithGotchas: gotchas.length, gotchas }, null, 2),
            },
          ],
        };
      },
    },

    // 10. fwcc_get_graph_neighbors
    {
      name: "fwcc_get_graph_neighbors",
      description: "Explore the knowledge graph topology around a node (incoming and outgoing edges across 1 to 3 hops).",
      inputSchema: {
        type: "object",
        properties: {
          concept: { type: "string", description: "Root class or component name (e.g. 'SlotBaseModule', 'SlotTableModule', 'SlotDirector')" },
          depth: { type: "integer", description: "Hop traversal depth (1 to 3, default: 1)", minimum: 1, maximum: 3, default: 1 },
          direction: { type: "string", description: "Edge direction: 'out' (dependencies/outgoing), 'in' (backlinks/incoming), or 'both' (union, default)", enum: ["in", "out", "both"], default: "both" },
        },
        required: ["concept"],
      },
      handler: async (args: any) => {
        const concept = String(args.concept || args.node || args.root || "");
        const depth = typeof args.depth === "number" ? args.depth : 1;
        const direction = args.direction === "in" || args.direction === "out" || args.direction === "both" ? args.direction : "both";
        const graph = graphEngine.getGraphNeighbors(concept, depth, direction);

        if (!graph) {
          return {
            content: [{ type: "text", text: `No graph topology found for '${concept}'.` }],
          };
        }

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(graph, null, 2),
            },
          ],
        };
      },
    },

    // 11. fwcc_export_report
    {
      name: "fwcc_export_report",
      description: "Generate a consolidated, single self-contained Markdown report file containing full text, code, and diagrams for multiple docs/topics or a search query.",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query to bundle relevant documentation for (e.g. 'BonusGameDirectorModule pick loop and table')" },
          topics: { type: "array", items: { type: "string" }, description: "Specific topic IDs or relative paths to bundle" },
          limit: { type: "number", description: "Maximum documents to bundle (default: 5)", default: 5 },
        },
      },
      handler: async (args: any) => {
        const query = args?.query;
        const topics = args?.topics;
        const limit = Number(args?.limit) || 5;

        const report = docsEngine.exportReport(topics && topics.length > 0 ? topics : query, limit);

        return {
          content: [
            {
              type: "text",
              text: report.markdown,
            },
          ],
        };
      },
    },

    // 12. fwcc_auto_sync_editor (Autonomous Cocos Editor Action Directive Generator)
    {
      name: "fwcc_auto_sync_editor",
      description: "Generate actionable Cocos Creator Editor execution directives and component inspection blueprint for any FWCC module or game node, instructing the AI agent to automatically invoke mcp-cc24-editor tools.",
      inputSchema: {
        type: "object",
        properties: {
          className: { type: "string", description: "Target FWCC class or module name (e.g. 'SlotSymbolModule', 'SlotTableModule', 'SlotSymbolManager', 'PaylineInfoModule', 'NormalGameDirectorModule')" },
          targetPrefabOrNode: { type: "string", description: "Optional name of prefab or scene node (e.g. 'SymbolPrefab9666.prefab', 'TablePrefab9666', 'Canvas/Table/Reels')" },
          operation: { type: "string", description: "Operation mode: 'inspect_and_wire' | 'create_hierarchy' | 'validate_properties' | 'auto_fix_gotchas'", default: "inspect_and_wire" },
        },
        required: ["className"],
      },
      handler: async (args: any) => {
        const className = String(args.className || "");
        const target = String(args.targetPrefabOrNode || className);
        const op = String(args.operation || "inspect_and_wire");

        const classDoc = docsEngine.getClassApi(className);
        const gotchas = graphEngine.getGotchas(className);
        const events = graphEngine.getNodesByEvent(className);

        // Predefined Component Blueprints
        const blueprints: Record<string, any> = {
          SlotSymbolModule: {
            requiredChildNodes: [
              { name: "Sprite", component: "cc.Sprite", purpose: "Static & motion-blurred texture display" },
              { name: "Spine", component: "sp.Skeleton", purpose: "Dynamic skeletal animation & win celebration" },
              { name: "multiplierLabel", component: "cc.Label", purpose: "Multiplier Wild value indicator (optional)" },
            ],
            companionComponents: ["SlotSymbolResourceManager"],
            criticalProperties: {
              colorNormal: { r: 255, g: 255, b: 255, a: 255 },
              colorDim: { r: 88, g: 88, b: 88, a: 255 },
            },
          },
          SlotTableModule: {
            requiredChildNodes: [
              { name: "Reels", purpose: "Container node holding column reels (Reel0..ReelN)" },
              { name: "Paylines", purpose: "Overlay container for win line animations" },
            ],
            companionComponents: ["TableModuleConfig", "SlotSymbolManager"],
            criticalProperties: {
              TABLE_FORMAT: "[4, 4, 4, 4, 4, 4]",
              SYMBOL_WIDTH: 141,
              SYMBOL_HEIGHT: 110,
            },
          },
          SlotSymbolManager: {
            requiredChildNodes: [],
            companionComponents: ["SlotCustomNodePool"],
            criticalProperties: {
              symbolPrefab: "SymbolPrefab.prefab reference",
              initCount: 15,
            },
          },
          NormalGameDirectorModule: {
            requiredChildNodes: [],
            companionComponents: ["NormalGameWriterModule", "ScriptExecutor"],
            criticalProperties: {},
          },
        };

        const bp = blueprints[className] || {
          requiredChildNodes: [],
          companionComponents: [],
          criticalProperties: {},
        };

        const responsePayload = {
          status: "ready_for_execution",
          className,
          targetPrefabOrNode: target,
          operation: op,
          componentBlueprint: bp,
          knownGotchas: gotchas.flatMap(g => g.gotchas),
          eventsCoordination: events,
          DIRECTIVE_FOR_AGENT: {
            EXECUTION_MODE: "AUTONOMOUS_EDITOR_EXECUTION",
            PRIORITY: "MANDATORY",
            INSTRUCTIONS: [
              `1. Check if 'mcp-cc24-editor' tool is available in your active MCP servers.`,
              `2. Call 'mcp-cc24-editor' 'find_nodes' or 'inspect_node' targeting '${target}'.`,
              `3. Validate that child nodes match componentBlueprint.requiredChildNodes. If missing, create them via 'create_node' or 'ui_builder'.`,
              `4. Check if component '${className}' is attached. If missing, call 'add_component'.`,
              `5. Apply all critical properties using 'set_component_property'.`,
              `6. Call 'get_recent_logs' to ensure 0 errors, then report completed action to user.`,
            ],
          },
        };

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(responsePayload, null, 2),
            },
          ],
        };
      },
    },
  ];
}
