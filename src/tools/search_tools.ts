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
      description: "Read a specific section chunk by chunkId (from search results) or by topic/section keyword to save tokens and focus context.",
      inputSchema: {
        type: "object",
        properties: {
          chunkId: { type: "string", description: "Exact chunk ID from search results (e.g. 'NormalGameDirectorModule#sec-1') or query snippet" },
        },
        required: ["chunkId"],
      },
      handler: async (args: any) => {
        const chunkId = String(args.chunkId || "");
        const res = docsEngine.getChunk(chunkId);

        if (!res.found || !res.chunk) {
          return {
            content: [{ type: "text", text: `Chunk '${chunkId}' not found in index.` }],
          };
        }

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(res.chunk, null, 2),
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
      description: "Lookup which modules emit and which modules listen to a specific event on the Global or Scoped Event Bus.",
      inputSchema: {
        type: "object",
        properties: {
          eventName: { type: "string", description: "Event name (e.g. 'RESET_ALL_EFFECT_AND_TASKS', 'START_SPIN', 'TABLE_STOPPED', 'RESET_MULTIPLIER')" },
        },
        required: ["eventName"],
      },
      handler: async (args: any) => {
        const eventName = String(args.eventName || "");
        const result = graphEngine.getNodesByEvent(eventName);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ eventName, emitters: result.emitters, listeners: result.listeners }, null, 2),
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
        },
      },
      handler: async (args: any) => {
        const moduleOrTopic = args?.moduleOrTopic;
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
      description: "Explore the knowledge graph topology around a node (incoming and outgoing edges).",
      inputSchema: {
        type: "object",
        properties: {
          concept: { type: "string", description: "Root class or component name (e.g. 'SlotBaseModule', 'SlotTableModule')" },
        },
        required: ["concept"],
      },
      handler: async (args: any) => {
        const concept = String(args.concept || "");
        const graph = graphEngine.getGraphNeighbors(concept);

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
  ];
}
