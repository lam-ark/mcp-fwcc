import * as fs from "fs";
import * as path from "path";
import { ToolDefinition } from "../core/types.js";
import { DocsSearchEngine } from "../engines/docs_search_engine.js";
import { CONFIG } from "../config/constants.js";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "_")
    .replace(/^-+|-+$/g, "");
}

function getNextFileNumber(dir: string, prefix: string): string {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return "001";
  }

  const files = fs.readdirSync(dir);
  const regex = new RegExp(`^${prefix}_(\\d+)`, "i");
  let maxNum = 0;

  for (const file of files) {
    const match = file.match(regex);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num > maxNum) {
        maxNum = num;
      }
    }
  }

  return String(maxNum + 1).padStart(3, "0");
}

export function createTransferTools(docsEngine: DocsSearchEngine): ToolDefinition[] {
  return [
    // 1. fwcc_record_transfer_knowledge
    {
      name: "fwcc_record_transfer_knowledge",
      description:
        "Record a new bugfix, custom feature recipe, business discrepancy mapping, or game porting log into the transfer-ark knowledge base according to the ARK Documentation Convention. Automatically generates standardized frontmatter, creates the markdown file, and updates the search index live.",
      inputSchema: {
        type: "object",
        properties: {
          category: {
            type: "string",
            enum: ["bugfix", "feature", "business_mapping", "game_log"],
            description: "Category of the knowledge entry: 'bugfix' (bugs/gotchas), 'feature' (recipes), 'business_mapping' (SDK vs ARK discrepancy), 'game_log' (game porting log)",
          },
          title: {
            type: "string",
            description: "Clear, descriptive title in English (e.g. 'Fix 2 Blur Scatter Symbols Appearing on 1 Reel During Spin')",
          },
          doc_id: {
            type: "string",
            description: "Optional snake_case identifier (e.g. 'duplicate_blur_scatter_on_spin'). Auto-generated from title if omitted.",
          },
          game_ids: {
            type: "array",
            items: { type: "string" },
            description: "Target game IDs (e.g. ['g9666', 'all'])",
          },
          sdk_modules: {
            type: "array",
            items: { type: "string" },
            description: "Relevant SDK modules (e.g. ['SlotReelModule', 'TableModuleConfig'])",
          },
          tags: {
            type: "array",
            items: { type: "string" },
            description: "Tags for search indexing (e.g. ['scatter', 'blur', 'reel_spin', 'exception_symbols'])",
          },
          problem_overview: {
            type: "string",
            description: "Section 1: Problem / Feature Overview (symptoms, UX impact, occurrence scope)",
          },
          sdk_vs_business: {
            type: "string",
            description: "Section 2: Vendor SDK vs ARK Business Discrepancy (default behavior vs business requirements)",
          },
          root_cause: {
            type: "string",
            description: "Section 3: Root Cause Analysis (offending classes, methods, and config lines in cc-common)",
          },
          implementation_code: {
            type: "string",
            description: "Section 4: Implementation & Override Solution (complete TypeScript code override with explanation)",
          },
          gotchas: {
            type: "string",
            description: "Section 5: Gotchas & Edge Cases (TypeScript typing nuances, empty array guards, Turbo mode, etc.)",
          },
          reusability_guide: {
            type: "string",
            description: "Section 6: Reusability Guide for Future Game Titles (step-by-step checklist to apply to new games)",
          },
          references: {
            type: "array",
            items: { type: "string" },
            description: "Section 7: Relative file paths from project root (e.g. ['assets/cc-common/cc-slot-module/...'])",
          },
          raw_markdown: {
            type: "string",
            description: "Optional: Full raw markdown content adhering to convention. If provided, written directly.",
          },
        },
        required: ["category", "title"],
      },
      handler: async (args: any) => {
        const category = String(args.category);
        const title = String(args.title).trim();
        const docSlug = args.doc_id ? slugify(String(args.doc_id)) : slugify(title);
        const gameIds: string[] = Array.isArray(args.game_ids) ? args.game_ids : ["all"];
        const sdkModules: string[] = Array.isArray(args.sdk_modules) ? args.sdk_modules : [];
        const tags: string[] = Array.isArray(args.tags) ? args.tags : ["ark_business", category];
        const references: string[] = Array.isArray(args.references) ? args.references : [];

        // Determine directory and file naming based on category
        let subFolder = "";
        let prefix = "";

        switch (category) {
          case "bugfix":
            subFolder = "01_bugs_and_gotchas";
            prefix = "BUG";
            break;
          case "feature":
            subFolder = "02_feature_recipes";
            prefix = "RECIPE";
            break;
          case "business_mapping":
            subFolder = "03_business_mappings";
            prefix = "MAP";
            break;
          case "game_log":
            subFolder = "04_game_transfer_logs";
            prefix = "GAME";
            break;
          default:
            subFolder = "01_bugs_and_gotchas";
            prefix = "DOC";
            break;
        }

        const targetDir = path.join(CONFIG.DOCS_DIR, "transfer-ark", subFolder);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }

        const nextNum = getNextFileNumber(targetDir, prefix);
        const fileName = `${prefix}_${nextNum}_${docSlug}.md`;
        const fullFilePath = path.join(targetDir, fileName);
        const relPath = path.join("transfer-ark", subFolder, fileName).replace(/\\/g, "/");

        let markdownContent = "";

        if (args.raw_markdown && String(args.raw_markdown).trim().length > 0) {
          markdownContent = String(args.raw_markdown).trim();
        } else {
          const docId = `transfer-ark:${category}:${docSlug}`;
          const today = new Date().toISOString().split("T")[0];

          const frontmatter = [
            "---",
            `id: "${docId}"`,
            `title: "${title.replace(/"/g, '\\"')}"`,
            `category: "${category}"`,
            `game_ids: ${JSON.stringify(gameIds)}`,
            `sdk_modules: ${JSON.stringify(sdkModules)}`,
            `tags: ${JSON.stringify(tags)}`,
            `created_at: "${today}"`,
            `author: "ARK Slot Engineering Team"`,
            "---",
            "",
          ].join("\n");

          function formatCode(code?: string): string {
            if (!code || !code.trim()) return "_No implementation code provided._";
            const trimmed = code.trim();
            if (trimmed.startsWith("```")) return trimmed;
            return `\`\`\`typescript\n${trimmed}\n\`\`\``;
          }

          const body = [
            `# ${prefix}-${nextNum}: ${title}`,
            "",
            "---",
            "",
            "## 1. 📌 Problem / Feature Overview",
            args.problem_overview ? String(args.problem_overview).trim() : "_No overview provided._",
            "",
            "---",
            "",
            "## 2. 🏢 Vendor SDK vs ARK Business Discrepancy",
            args.sdk_vs_business ? String(args.sdk_vs_business).trim() : "_No discrepancy notes provided._",
            "",
            "---",
            "",
            "## 3. 🔍 Root Cause Analysis in Base SDK",
            args.root_cause ? String(args.root_cause).trim() : "_No root cause analysis provided._",
            "",
            "---",
            "",
            "## 4. 🛠️ Implementation & Override Solution",
            formatCode(args.implementation_code),
            "",
            "---",
            "",
            "## 5. ⚠️ Gotchas & Edge Cases",
            args.gotchas ? String(args.gotchas).trim() : "_No gotchas recorded._",
            "",
            "---",
            "",
            "## 6. ♻️ Reusability Guide for Future Game Titles",
            args.reusability_guide ? String(args.reusability_guide).trim() : "_No reusability guide provided._",
            "",
            "---",
            "",
            "## 7. 🔗 Codebase References",
            references.length > 0
              ? references.map((ref) => `- \`${ref}\``).join("\n")
              : "- _No references recorded._",
            "",
          ].join("\n");

          markdownContent = frontmatter + body;
        }

        fs.writeFileSync(fullFilePath, markdownContent, "utf8");

        // Live Re-index so it's searchable immediately
        docsEngine.reindex();

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  success: true,
                  message: `Knowledge entry successfully recorded and indexed into transfer-ark!`,
                  file: fileName,
                  relPath: relPath,
                  category,
                  title,
                  fullPath: fullFilePath,
                },
                null,
                2
              ),
            },
          ],
        };
      },
    },

    // 2. fwcc_list_transfer_knowledge
    {
      name: "fwcc_list_transfer_knowledge",
      description: "List all recorded bug fixes, feature recipes, business mappings, and game porting logs in transfer-ark.",
      inputSchema: {
        type: "object",
        properties: {
          category: {
            type: "string",
            enum: ["all", "bugfix", "feature", "business_mapping", "game_log"],
            description: "Filter by category (default: 'all')",
            default: "all",
          },
        },
      },
      handler: async (args: any) => {
        const transferDir = path.join(CONFIG.DOCS_DIR, "transfer-ark");
        if (!fs.existsSync(transferDir)) {
          return {
            content: [{ type: "text", text: JSON.stringify({ total: 0, items: [] }, null, 2) }],
          };
        }

        const categoryFilter = String(args.category || "all");
        const allTopics = docsEngine.listTopics();
        const transferTopics = allTopics.filter((t) => t.relPath.startsWith("transfer-ark"));

        const filtered = transferTopics.filter((t) => {
          if (categoryFilter === "all") return true;
          return t.category === categoryFilter;
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  total: filtered.length,
                  filter: categoryFilter,
                  items: filtered.map((item) => ({
                    id: item.id,
                    title: item.title,
                    category: item.category,
                    relPath: item.relPath,
                    tags: item.tags,
                  })),
                },
                null,
                2
              ),
            },
          ],
        };
      },
    },

    // 3. fwcc_ai_document_bug
    {
      name: "fwcc_ai_document_bug",
      description:
        "Report a bug/gotcha or discrepancy and automatically invoke AI to generate an exhaustive, 7-section documentation node compliant with the ARK Transfer Convention (transfer-ark/CONVENTION.md). Analyzes provided code/diff, reads relevant project files, calls LLM (Gemini/OpenAI or intelligent synthesizer), writes the markdown file into docs/transfer-ark/01_bugs_and_gotchas/, and immediately updates the live search index.",
      inputSchema: {
        type: "object",
        properties: {
          bug_description: {
            type: "string",
            description: "Detailed description of the bug, symptoms, incorrect behavior, or discrepancy.",
          },
          solution_code: {
            type: "string",
            description: "The code fix, override snippet, diff, or modified code (TypeScript).",
          },
          affected_files: {
            type: "array",
            items: { type: "string" },
            description: "Optional list of project relative file paths related to the bug (e.g. ['assets/cc-release-slot/cc1-red-cliff/scripts/Table/TableModuleConfig9666.ts']).",
          },
          title: {
            type: "string",
            description: "Optional English title for the bug doc. If omitted, AI will generate an action-oriented title.",
          },
          game_ids: {
            type: "array",
            items: { type: "string" },
            description: "Target game IDs (e.g. ['g9666', 'all']). Default: ['g9666', 'all']",
          },
          sdk_modules: {
            type: "array",
            items: { type: "string" },
            description: "Relevant SDK modules (e.g. ['TableModuleConfig', 'SlotReelModule', 'SlotSymbolModule']).",
          },
          tags: {
            type: "array",
            items: { type: "string" },
            description: "Tags for search indexing (e.g. ['multi_size', 'blur', 'random_symbols', 'reel_spin']).",
          },
          category: {
            type: "string",
            enum: ["bugfix", "feature", "business_mapping", "game_log"],
            description: "Category of the entry (default: 'bugfix').",
            default: "bugfix",
          },
          llm_api_key: {
            type: "string",
            description: "Optional custom API key for Gemini / OpenAI. If omitted, uses environment variables.",
          },
        },
        required: ["bug_description"],
      },
      handler: async (args: any) => {
        const bugDesc = String(args.bug_description).trim();
        const solutionCode = args.solution_code ? String(args.solution_code).trim() : "";
        const affectedFiles: string[] = Array.isArray(args.affected_files) ? args.affected_files : [];
        const gameIds: string[] = Array.isArray(args.game_ids) && args.game_ids.length > 0 ? args.game_ids : ["g9666", "all"];
        const sdkModules: string[] = Array.isArray(args.sdk_modules) && args.sdk_modules.length > 0 ? args.sdk_modules : ["TableModuleConfig", "SlotReelModule"];
        const tags: string[] = Array.isArray(args.tags) && args.tags.length > 0 ? args.tags : ["bugfix", "ark_business", "reel_spin"];
        const category = String(args.category || "bugfix");

        // Read context from affected files if present
        let codeContext = "";
        for (const fileRel of affectedFiles) {
          const possiblePaths = [
            path.resolve(process.cwd(), fileRel),
            path.resolve(CONFIG.DOCS_DIR, "..", "..", fileRel),
            path.resolve(CONFIG.DOCS_DIR, "..", "..", "..", fileRel),
          ];
          for (const p of possiblePaths) {
            if (fs.existsSync(p)) {
              try {
                const code = fs.readFileSync(p, "utf8");
                codeContext += `\n\n// File: ${fileRel}\n${code.slice(0, 3000)}`;
                break;
              } catch (e) {}
            }
          }
        }

        // Determine directory and next sequential number
        let subFolder = "01_bugs_and_gotchas";
        let prefix = "BUG";
        if (category === "feature") {
          subFolder = "02_feature_recipes";
          prefix = "RECIPE";
        } else if (category === "business_mapping") {
          subFolder = "03_business_mappings";
          prefix = "MAP";
        }

        const targetDir = path.join(CONFIG.DOCS_DIR, "transfer-ark", subFolder);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        const nextNum = getNextFileNumber(targetDir, prefix);

        // Prepare Prompt for AI
        const prompt = `You are the Lead Slot Architect for the ARK Slot Engineering Team.
Your task is to generate a comprehensive, production-grade documentation node in English adhering 100% to the ARK Transfer Documentation Convention (CONVENTION.md).

Input Bug / Requirement:
- Bug Description: ${bugDesc}
- Solution Code / Notes: ${solutionCode || "Derived from affected files"}
- Affected Files: ${affectedFiles.join(", ") || "SlotReelModule / TableModuleConfig"}
- Target Games: ${JSON.stringify(gameIds)}
- SDK Modules: ${JSON.stringify(sdkModules)}
- Additional Code Context: ${codeContext || "Standard cc-common Slot Framework"}

Output Requirements:
1. Start with valid YAML frontmatter containing id, title, category ("${category}"), game_ids, sdk_modules, tags, created_at, author ("ARK Slot Engineering Team").
2. Document must contain exactly the 7 standardized sections:
   # ${prefix}-${nextNum}: [Clear, Action-Oriented Title in English]
   ## 1. 📌 Problem / Feature Overview (Visual glitch, UX impact, occurrence scope)
   ## 2. 🏢 Vendor SDK vs ARK Business Discrepancy (Vendor default behavior vs ARK business rules)
   ## 3. 🔍 Root Cause Analysis in Base SDK (Inspect SlotReelModule, TableModuleConfig, mapSymbolData...)
   ## 4. 🛠️ Implementation & Override Solution (Complete, copy-paste ready TypeScript code adhering to Zero-Code Modification on cc-common)
   ## 5. ⚠️ Gotchas & Edge Cases (TypeScript types, buffer rows, empty array guards, asset resolution)
   ## 6. ♻️ Reusability Guide for Future Game Titles (Step-by-step checklist)
   ## 7. 🔗 References & Codebase Links
3. Return ONLY the markdown content with YAML frontmatter. No extra chat preamble.`;

        // Try AI Generation via Gemini / OpenAI
        let generatedDoc: string | null = null;
        const geminiKey = args.llm_api_key || process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
        const openaiKey = process.env.OPENAI_API_KEY;

        if (geminiKey) {
          try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`;
            const res = await fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.2, maxOutputTokens: 4096 },
              }),
            });
            if (res.ok) {
              const data: any = await res.json();
              const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text && typeof text === "string" && text.trim().length > 0) {
                generatedDoc = text.trim();
              }
            }
          } catch (err) {
            console.error("[mcp-fwcc] Gemini call error:", err);
          }
        }

        if (!generatedDoc && openaiKey) {
          try {
            const url = "https://api.openai.com/v1/chat/completions";
            const res = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${openaiKey}`,
              },
              body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                  { role: "system", content: "You are the Lead Slot Architect for ARK Slot Engineering Team." },
                  { role: "user", content: prompt },
                ],
                temperature: 0.2,
              }),
            });
            if (res.ok) {
              const data: any = await res.json();
              const text = data?.choices?.[0]?.message?.content;
              if (text && typeof text === "string" && text.trim().length > 0) {
                generatedDoc = text.trim();
              }
            }
          } catch (err) {
            console.error("[mcp-fwcc] OpenAI call error:", err);
          }
        }

        // Fallback: Intelligent Synthesizer
        let title = args.title ? String(args.title).trim() : `Fix ${bugDesc.slice(0, 60)}`;
        let docSlug = slugify(title);
        const today = new Date().toISOString().split("T")[0];

        if (!generatedDoc) {
          const docId = `transfer-ark:${category}:${docSlug}`;
          const formattedCode = solutionCode
            ? (solutionCode.startsWith("```") ? solutionCode : `\`\`\`typescript\n${solutionCode}\n\`\`\``)
            : `\`\`\`typescript\n// Implementation fix for ${title}\n\`\`\``;

          generatedDoc = [
            "---",
            `id: "${docId}"`,
            `title: "${title.replace(/"/g, '\\"')}"`,
            `category: "${category}"`,
            `game_ids: ${JSON.stringify(gameIds)}`,
            `sdk_modules: ${JSON.stringify(sdkModules)}`,
            `tags: ${JSON.stringify(tags)}`,
            `created_at: "${today}"`,
            `author: "ARK Slot Engineering Team"`,
            "---",
            "",
            `# ${prefix}-${nextNum}: ${title}`,
            "",
            "---",
            "",
            "## 1. 📌 Problem / Feature Overview",
            `- **Issue / Requirement**: ${bugDesc}`,
            "- **Occurrence Scope**: Affects spinning reel strip generation during normal, turbo, and free spins.",
            "",
            "---",
            "",
            "## 2. 🏢 Vendor SDK vs ARK Business Discrepancy",
            "- **Vendor SDK Default Behavior**: Default `cc-common` implementation does not account for customized business rules and game constraints.",
            "- **ARK Business Requirement**: Ensure correct symbol distribution, visual feedback, and zero regressions across all reel columns.",
            "",
            "---",
            "",
            "## 3. 🔍 Root Cause Analysis in Base SDK",
            `- Offending modules: \`${sdkModules.join("`, `")}\`.`,
            "- Unfiltered random selection or missing size format mapping in configuration arrays.",
            "",
            "---",
            "",
            "## 4. 🛠️ Implementation & Override Solution",
            formattedCode,
            "",
            "---",
            "",
            "## 5. ⚠️ Gotchas & Edge Cases",
            "1. **Zero-Code Modification on `cc-common`**: Never modify base engine files directly; apply overrides in game-specific classes.",
            "2. **Buffer Rows Margin**: Ensure `BUFFER_TOP >= 3` and `BUFFER_BOT >= 3` for multi-size symbols to avoid visual clipping.",
            "3. **Safety Guards**: Always guard against empty array pools.",
            "",
            "---",
            "",
            "## 6. ♻️ Reusability Guide for Future Game Titles",
            "1. Identify the target game config and reel module classes.",
            "2. Apply the dynamic generator and override pattern in the game subclass.",
            "3. Verify that reel strips render all symbol sizes properly during continuous spin.",
            "",
            "---",
            "",
            "## 7. 🔗 Codebase References",
            affectedFiles.length > 0
              ? affectedFiles.map((f) => `- \`${f}\``).join("\n")
              : `- \`assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts\``,
            "",
          ].join("\n");
        } else {
          // Extract title if generated by AI
          const titleMatch = generatedDoc.match(/^title:\s*"([^"]+)"/m) || generatedDoc.match(/^#\s+(?:BUG-\d+:\s+)?(.+)$/m);
          if (titleMatch && titleMatch[1]) {
            title = titleMatch[1].trim();
            docSlug = slugify(title);
          }
        }

        const fileName = `${prefix}_${nextNum}_${docSlug}.md`;
        const fullFilePath = path.join(targetDir, fileName);
        const relPath = path.join("transfer-ark", subFolder, fileName).replace(/\\/g, "/");

        fs.writeFileSync(fullFilePath, generatedDoc, "utf8");

        // Live Re-index
        docsEngine.reindex();

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  success: true,
                  message: `AI successfully generated and indexed standard documentation node!`,
                  file: fileName,
                  relPath: relPath,
                  category,
                  title,
                  docId: `transfer-ark:${category}:${docSlug}`,
                  fullPath: fullFilePath,
                  markdownContent: generatedDoc,
                },
                null,
                2
              ),
            },
          ],
        };
      },
    },
  ];
}
