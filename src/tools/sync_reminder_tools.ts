import * as fs from "fs";
import * as path from "path";
import { ToolDefinition } from "../core/types.js";
import { DocsSearchEngine } from "../engines/docs_search_engine.js";
import { CONFIG } from "../config/constants.js";

function normalizeGameId(gameId: string): string {
  return gameId.toLowerCase().trim().replace(/^g_?/, "");
}

function findGameDir(baseDir: string, gameId: string): string {
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }
  const cleanId = normalizeGameId(gameId);
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name.toLowerCase().includes(cleanId) || entry.name.toLowerCase() === gameId.toLowerCase()) {
        return path.join(baseDir, entry.name);
      }
    }
  }
  const fallback = path.join(baseDir, gameId.startsWith("g") ? gameId : `g${gameId}`);
  fs.mkdirSync(fallback, { recursive: true });
  return fallback;
}

export function createSyncReminderTools(docsEngine: DocsSearchEngine): ToolDefinition[] {
  const gameImplementDir = path.join(CONFIG.DOCS_DIR, "game-implement");

  return [
    // 1. fwcc_sync_doc_update
    {
      name: "fwcc_sync_doc_update",
      description:
        "Synchronize and log a game logic or specification update into the game's documentation knowledge base. Records the changes in LOGIC_CHANGELOG.md, updates corresponding markdown doc files, re-indexes the docs live for future AI/developers, and returns an actionable handover summary.",
      inputSchema: {
        type: "object",
        properties: {
          game_id: {
            type: "string",
            description: "Game identifier (e.g. '9666', 'g9666_red_cliff', 'common')",
          },
          feature_name: {
            type: "string",
            description: "Feature name or subsystem (e.g. 'Multiplier Wild', 'Composite Cascade', 'Free Game Resume', 'Jackpot')",
          },
          action_type: {
            type: "string",
            enum: ["logic_update", "bugfix", "spec_change", "config_tweak", "refactor"],
            description: "Type of modification performed.",
          },
          change_summary: {
            type: "string",
            description: "Detailed summary of what was changed and why (business rationale or bug cause).",
          },
          modified_files: {
            type: "array",
            items: { type: "string" },
            description: "List of modified source code or configuration files (relative or absolute).",
          },
          doc_file_to_update: {
            type: "string",
            description: "Optional relative path of the specific doc file to append/update (e.g. '04_multiplier_and_stack_wild/04_reload_reconnect_and_resume_flow.md').",
          },
          doc_content_to_append: {
            type: "string",
            description: "Optional markdown section to append to the target doc file.",
          },
          handover_notes: {
            type: "string",
            description: "Important notes, caveats, or gotchas for the next developer working on this module.",
          },
          author: {
            type: "string",
            description: "Author or developer name.",
          },
        },
        required: ["game_id", "feature_name", "action_type", "change_summary", "modified_files"],
      },
      handler: async (args: {
        game_id: string;
        feature_name: string;
        action_type: string;
        change_summary: string;
        modified_files: string[];
        doc_file_to_update?: string;
        doc_content_to_append?: string;
        handover_notes?: string;
        author?: string;
      }) => {
        const {
          game_id,
          feature_name,
          action_type,
          change_summary,
          modified_files,
          doc_file_to_update,
          doc_content_to_append,
          handover_notes,
          author = "Developer",
        } = args;

        const gameDir = findGameDir(gameImplementDir, game_id);
        const timestamp = new Date().toISOString();
        const dateStr = timestamp.split("T")[0];
        const timeStr = timestamp.split("T")[1].split(".")[0];

        // 1. Update / Append to LOGIC_CHANGELOG.md
        const changelogPath = path.join(gameDir, "LOGIC_CHANGELOG.md");
        const entryHeader = `\n### [${dateStr} ${timeStr}] [${action_type.toUpperCase()}] ${feature_name} (by ${author})\n`;
        const entryBody = `
- **Summary**: ${change_summary}
- **Modified Files**:
${modified_files.map((f) => `  - \`${f}\``).join("\n")}
${handover_notes ? `- **Handover Notes for Next Dev**: ${handover_notes}\n` : ""}
---
`;

        if (!fs.existsSync(changelogPath)) {
          const initialContent = `# 📝 Game ${game_id} Logic & Documentation Changelog

This changelog records all logic adjustments, bugfixes, and spec updates to maintain continuous synchronization for future developers.

---
`;
          fs.writeFileSync(changelogPath, initialContent + entryHeader + entryBody, "utf-8");
        } else {
          fs.appendFileSync(changelogPath, entryHeader + entryBody, "utf-8");
        }

        // 2. Optionally append / update specific doc file
        let updatedDocPath = null;
        if (doc_file_to_update && doc_content_to_append) {
          const targetDoc = path.isAbsolute(doc_file_to_update)
            ? doc_file_to_update
            : path.join(gameDir, doc_file_to_update);

          if (fs.existsSync(targetDoc)) {
            fs.appendFileSync(
              targetDoc,
              `\n\n## 📝 Update [${dateStr}]: ${feature_name}\n\n${doc_content_to_append.trim()}\n`,
              "utf-8"
            );
            updatedDocPath = targetDoc;
          }
        }

        // 3. Re-index search engine live
        docsEngine.reindex();

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  status: "success",
                  message: `Logic update for '${feature_name}' successfully recorded and synchronized!`,
                  changelog_file: changelogPath,
                  updated_doc: updatedDocPath,
                  reindexed: true,
                  reminder: `Future developers and AI agents querying MCP for '${feature_name}' will now immediately receive these updated specs and handover notes.`,
                },
                null,
                2
              ),
            },
          ],
        };
      },
    },

    // 2. fwcc_get_logic_changelog
    {
      name: "fwcc_get_logic_changelog",
      description:
        "Retrieve the recent logic changelog and handover notes for a game to understand what recent logic changes or bugfixes were made.",
      inputSchema: {
        type: "object",
        properties: {
          game_id: {
            type: "string",
            description: "Game identifier (e.g. '9666' or 'g9666_red_cliff')",
          },
          limit: {
            type: "number",
            description: "Max number of characters/lines to return (optional).",
          },
        },
        required: ["game_id"],
      },
      handler: async (args: { game_id: string; limit?: number }) => {
        const { game_id } = args;
        const gameDir = findGameDir(gameImplementDir, game_id);
        const changelogPath = path.join(gameDir, "LOGIC_CHANGELOG.md");

        if (!fs.existsSync(changelogPath)) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({ game_id, message: "No LOGIC_CHANGELOG.md found for this game yet." }),
              },
            ],
          };
        }

        const content = fs.readFileSync(changelogPath, "utf-8");
        return {
          content: [
            {
              type: "text",
              text: content,
            },
          ],
        };
      },
    },
  ];
}
