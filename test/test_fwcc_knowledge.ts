import { DocsSearchEngine } from "../src/engines/docs_search_engine.js";
import { GraphEngine } from "../src/engines/graph_engine.js";
import { globalToolRegistry } from "../src/core/tool_registry.js";
import { initAllTools } from "../src/tools/index.js";
import { CONFIG } from "../src/config/constants.js";

async function runTests() {
  console.log("--- STARTING FWCC KNOWLEDGE TESTS ---");

  const docsEngine = new DocsSearchEngine(CONFIG.DOCS_DIR);
  docsEngine.init();

  const graphEngine = new GraphEngine();
  graphEngine.init();

  initAllTools(globalToolRegistry, { docsEngine, graphEngine });

  console.log(`Total Registered Tools: ${globalToolRegistry.getAllTools().length}`);

  // Test 1: Search docs for Payline
  console.log("\n[TEST 1] Testing fwcc_search_docs for 'Payline'...");
  const searchRes = await globalToolRegistry.executeTool("fwcc_search_docs", { query: "PaylineInfoModule", limit: 3 });
  console.log("Search Result:", searchRes.content[0].text.slice(0, 300) + "...");

  // Test 2: Get class API for SlotDirector
  console.log("\n[TEST 2] Testing fwcc_get_class_api for 'SlotDirector'...");
  const classRes = await globalToolRegistry.executeTool("fwcc_get_class_api", { className: "SlotDirector" });
  console.log("Class API Excerpt:", classRes.content[0].text.slice(0, 300) + "...");

  // Test 3: List topics in cc_slot_mechanics
  console.log("\n[TEST 3] Testing fwcc_list_topics for 'cc_slot_mechanics'...");
  const topicsRes = await globalToolRegistry.executeTool("fwcc_list_topics", { category: "cc_slot_mechanics" });
  console.log("Mechanics Topics:", topicsRes.content[0].text.slice(0, 300) + "...");

  // Test 4: Get related topics for SlotDirector
  console.log("\n[TEST 4] Testing fwcc_get_related_topics for 'SlotDirector'...");
  const graphRes = await globalToolRegistry.executeTool("fwcc_get_related_topics", { concept: "SlotDirector" });
  console.log("Graph Node:", graphRes.content[0].text);

  console.log("\n--- ALL TESTS COMPLETED SUCCESSFULLY! ---");
}

runTests().catch(err => {
  console.error("Test Failed:", err);
  process.exit(1);
});
