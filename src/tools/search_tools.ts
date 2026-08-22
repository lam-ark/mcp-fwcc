import { ToolDefinition } from "../core/types.js";
import { DocsSearchEngine } from "../engines/docs_search_engine.js";
import { GraphEngine } from "../engines/graph_engine.js";

export function createSearchTools(docsEngine: DocsSearchEngine, graphEngine: GraphEngine): ToolDefinition[] {
  return [
    // 1. fwcc_search_docs
    {
      name: "fwcc_search_docs",
      description: "Search across 307+ cc-common Slot Framework SDK documentation, classes, methods, mechanics, and features.",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query (e.g. 'PaylineInfoModule', 'convertPayLineAllWays', 'SlotDirector', 'Cascade')" },
          limit: { type: "number", description: "Maximum results to return (default: 5)", default: 5 },
          category: { type: "string", description: "Optional filter: 'cc_core_lib', 'cc_network', 'cc_slot_module', 'cc_slot_mechanics', 'cc_slot_features'" },
        },
        required: ["query"],
      },
      handler: async (args: any) => {
        const query = String(args.query || "");
        const limit = Number(args.limit) || 5;
        const category = args.category;

        const results = docsEngine.search(query, limit, category);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ totalMatches: results.length, query, results }, null, 2),
            },
          ],
        };
      },
    },

    // 2. fwcc_get_doc
    {
      name: "fwcc_get_doc",
      description: "Retrieve full markdown documentation and source code excerpt for a specific cc-common module or class.",
      inputSchema: {
        type: "object",
        properties: {
          topicOrRelPath: { type: "string", description: "Topic ID or relative path (e.g. 'PaylineInfoModule', 'SlotDirector', 'SlotTableModule')" },
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

    // 3. fwcc_list_topics
    {
      name: "fwcc_list_topics",
      description: "List all cc-common categories and topics with their exported classes and methods.",
      inputSchema: {
        type: "object",
        properties: {
          category: { type: "string", description: "Optional filter by category: 'cc_core_lib', 'cc_network', 'cc_slot_module', 'cc_slot_mechanics', 'cc_slot_features'" },
        },
      },
      handler: async (args: any) => {
        const category = args?.category;
        const topics = docsEngine.listTopics(category);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ totalTopics: topics.length, category: category || "all", topics }, null, 2),
            },
          ],
        };
      },
    },

    // 4. fwcc_get_class_api
    {
      name: "fwcc_get_class_api",
      description: "Get detailed class signature, properties, methods, and implementation for a cc-common class.",
      inputSchema: {
        type: "object",
        properties: {
          className: { type: "string", description: "Exact class name (e.g. 'SlotDirector', 'PaylineInfoModule', 'SlotGameSettings')" },
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

    // 5. fwcc_get_related_topics
    {
      name: "fwcc_get_related_topics",
      description: "Get related concepts, dependent modules, and architectural relationships for a Slot component.",
      inputSchema: {
        type: "object",
        properties: {
          concept: { type: "string", description: "Core concept (e.g. 'SlotDirector', 'SlotTableModule', 'PaylineInfoModule', 'SlotEvents', 'Mechanics_Cascade')" },
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
  ];
}
