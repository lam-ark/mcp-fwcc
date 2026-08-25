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
  ];
}
