import { DocsSearchEngine } from "./dist/engines/docs_search_engine.js";
import { CONFIG } from "./dist/config/constants.js";

const engine = new DocsSearchEngine(CONFIG.DOCS_DIR);
engine.init();

const testPath = "cc_slot_module/modules/SlotSymbolModule/05_methods/disableHighlight.md";
const res = engine.getDoc(testPath);
console.log("Result for:", testPath);
console.log("Found:", res.found);
console.log("RelPath:", res.relPath);
console.log("Content length:", res.content ? res.content.length : 0);
console.log("Snippet:\n", res.content ? res.content.slice(0, 200) : "N/A");
