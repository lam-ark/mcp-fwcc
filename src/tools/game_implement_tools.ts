import * as fs from "fs";
import * as path from "path";
import { ToolDefinition } from "../core/types.js";
import { DocsSearchEngine } from "../engines/docs_search_engine.js";
import { CONFIG } from "../config/constants.js";

const SECTION_FILE_MAP: Record<string, { file: string; title: string }> = {
  overview: { file: "01_game_overview_and_rules.md", title: "Game Overview & Game Rules Specification" },
  scene_hierarchy: { file: "02_scene_and_prefab_hierarchy.md", title: "Scene Tree, Canvas & Prefab Hierarchy" },
  custom_overrides: { file: "03_custom_modules_and_overrides.md", title: "SDK Subclasses & Custom Method Overrides Matrix" },
  cutscenes: { file: "04_cutscene_and_spine_registry.md", title: "Cutscenes, Spine Animations & Bone Anchors Registry" },
  events_audio: { file: "05_events_and_audio_mapping.md", title: "Custom Events Dictionary & Sound Player Mapping" },
  cheats: { file: "06_cheat_and_mockup_guide.md", title: "Cheat Keys, Mock Data & Debug Scenarios Guide" },
};

function normalizeGameId(gameId: string): string {
  const clean = gameId.toLowerCase().trim().replace(/^g_?/, "");
  return clean;
}

function findGameDir(baseDir: string, gameId: string): string | null {
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    return null;
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
  return null;
}

export function createGameImplementTools(docsEngine: DocsSearchEngine): ToolDefinition[] {
  const gameImplementDir = path.join(CONFIG.DOCS_DIR, "game-implement");

  return [
    // 1. fwcc_list_game_profiles
    {
      name: "fwcc_list_game_profiles",
      description:
        "List all registered slot games and their architecture profiles documented in the MCP Game Implementation registry.",
      inputSchema: {
        type: "object",
        properties: {},
      },
      handler: async () => {
        if (!fs.existsSync(gameImplementDir)) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({ total_games: 0, games: [] }, null, 2),
              },
            ],
          };
        }

        const entries = fs.readdirSync(gameImplementDir, { withFileTypes: true });
        const games: any[] = [];

        for (const entry of entries) {
          if (entry.isDirectory()) {
            const gamePath = path.join(gameImplementDir, entry.name);
            const files = fs.readdirSync(gamePath).filter((f) => f.endsWith(".md"));
            const indexPath = path.join(gamePath, "INDEX.md");
            let title = entry.name;
            let category = "slot_game";

            if (fs.existsSync(indexPath)) {
              const content = fs.readFileSync(indexPath, "utf-8");
              const titleMatch = content.match(/title:\s*["']?([^"'\n]+)["']?/i);
              if (titleMatch) title = titleMatch[1];
            }

            games.push({
              folder: entry.name,
              title,
              category,
              available_sections: files.map((f) => f.replace(/\.md$/, "")),
              total_docs: files.length,
            });
          }
        }

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ total_games: games.length, games }, null, 2),
            },
          ],
        };
      },
    },

    // 2. fwcc_get_game_profile
    {
      name: "fwcc_get_game_profile",
      description:
        "Retrieve the complete architecture profile, scene hierarchy, custom subclass overrides, Spine animations, or event mappings of a specific slot game without inspecting scenes in Cocos Creator.",
      inputSchema: {
        type: "object",
        properties: {
          game_id: {
            type: "string",
            description: "Game identifier or name (e.g. '9666', 'g9666', 'red_cliff')",
          },
          section: {
            type: "string",
            enum: ["all", "overview", "scene_hierarchy", "custom_overrides", "cutscenes", "events_audio", "cheats", "index"],
            description:
              "Architecture section to inspect: 'overview', 'scene_hierarchy', 'custom_overrides', 'cutscenes', 'events_audio', 'cheats', 'index', or 'all' (returns full combined dossier)",
          },
        },
        required: ["game_id"],
      },
      handler: async (args: { game_id: string; section?: string }) => {
        const { game_id, section = "all" } = args;
        const gameFolder = findGameDir(gameImplementDir, game_id);

        if (!gameFolder) {
          return {
            isError: true,
            content: [
              {
                type: "text",
                text: `Game profile for '${game_id}' was not found in 'docs/game-implement/'. Use 'fwcc_list_game_profiles' to see available games or 'fwcc_update_game_profile' to initialize it.`,
              },
            ],
          };
        }

        if (section === "all") {
          const files = fs.readdirSync(gameFolder).filter((f) => f.endsWith(".md")).sort();
          let combined = `# 🎮 Architecture Dossier for Game '${game_id}'\n\n`;
          for (const f of files) {
            const content = fs.readFileSync(path.join(gameFolder, f), "utf-8");
            combined += `\n<!-- SECTION: ${f} -->\n\n${content}\n\n---\n`;
          }
          return {
            content: [{ type: "text", text: combined }],
          };
        }

        if (section === "index") {
          const indexPath = path.join(gameFolder, "INDEX.md");
          if (fs.existsSync(indexPath)) {
            return { content: [{ type: "text", text: fs.readFileSync(indexPath, "utf-8") }] };
          }
        }

        const secConfig = SECTION_FILE_MAP[section];
        if (!secConfig) {
          return {
            isError: true,
            content: [
              {
                type: "text",
                text: `Unknown section '${section}'. Valid values: ${Object.keys(SECTION_FILE_MAP).join(", ")}, index, all.`,
              },
            ],
          };
        }

        const targetFile = path.join(gameFolder, secConfig.file);
        if (!fs.existsSync(targetFile)) {
          return {
            isError: true,
            content: [
              {
                type: "text",
                text: `Section '${section}' (${secConfig.file}) has not been created yet for game '${game_id}'.`,
              },
            ],
          };
        }

        return {
          content: [
            {
              type: "text",
              text: fs.readFileSync(targetFile, "utf-8"),
            },
          ],
        };
      },
    },

    // 3. fwcc_update_game_profile
    {
      name: "fwcc_update_game_profile",
      description:
        "Create or update an architecture profile document for a slot game in 'docs/game-implement/<game_id>/'. Automatically generates standardized frontmatter and re-indexes the document live.",
      inputSchema: {
        type: "object",
        properties: {
          game_id: {
            type: "string",
            description: "Game identifier (e.g. 'g9666_red_cliff' or '9666')",
          },
          section: {
            type: "string",
            enum: ["overview", "scene_hierarchy", "custom_overrides", "cutscenes", "events_audio", "cheats", "index"],
            description: "Section to update or create.",
          },
          title: {
            type: "string",
            description: "Title of this section document.",
          },
          content: {
            type: "string",
            description: "Markdown content describing the scene architecture, custom methods, spine animations, or events.",
          },
          tags: {
            type: "array",
            items: { type: "string" },
            description: "Optional search tags for this document.",
          },
        },
        required: ["game_id", "section", "content"],
      },
      handler: async (args: {
        game_id: string;
        section: string;
        title?: string;
        content: string;
        tags?: string[];
      }) => {
        const { game_id, section, title, content, tags = [] } = args;
        let gameFolder = findGameDir(gameImplementDir, game_id);

        if (!gameFolder) {
          const folderName = game_id.startsWith("g") ? game_id : `g${game_id}`;
          gameFolder = path.join(gameImplementDir, folderName);
          fs.mkdirSync(gameFolder, { recursive: true });
        }

        let fileName = "INDEX.md";
        let defaultTitle = `Game Profile: ${game_id}`;

        if (section !== "index") {
          const secConfig = SECTION_FILE_MAP[section];
          if (!secConfig) {
            return {
              isError: true,
              content: [
                {
                  type: "text",
                  text: `Invalid section '${section}'. Valid values: ${Object.keys(SECTION_FILE_MAP).join(", ")}, index.`,
                },
              ],
            };
          }
          fileName = secConfig.file;
          defaultTitle = `${secConfig.title} - ${game_id}`;
        }

        const finalTitle = title || defaultTitle;
        const targetFilePath = path.join(gameFolder, fileName);

        let finalDoc = "";
        if (content.startsWith("---")) {
          finalDoc = content;
        } else {
          finalDoc = `---
id: "game-implement:${normalizeGameId(game_id)}:${section}"
title: "${finalTitle}"
category: "game_implement"
game_ids: ["${game_id}", "${normalizeGameId(game_id)}"]
section: "${section}"
tags: ${JSON.stringify(["game_implement", normalizeGameId(game_id), section, ...tags])}
created_at: "${new Date().toISOString().split("T")[0]}"
author: "ARK Slot Engineering Team"
---

${content.trim()}
`;
        }

        fs.writeFileSync(targetFilePath, finalDoc, "utf-8");
        docsEngine.reindex();

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  status: "success",
                  message: `Successfully updated game profile section '${section}' for game '${game_id}'.`,
                  file_path: targetFilePath,
                  indexed: true,
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
