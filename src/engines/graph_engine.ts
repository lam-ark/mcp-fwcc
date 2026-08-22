import * as fs from "fs";
import * as path from "path";
import { IEngine } from "../core/types.js";
import { CONFIG } from "../config/constants.js";

export interface GraphNode {
  id: string;
  name: string;
  category: string;
  description: string;
  related: string[];
  raw?: any;
}

export class GraphEngine implements IEngine {
  private nodes: Map<string, GraphNode> = new Map();

  constructor(private docsDir: string = CONFIG.DOCS_DIR) {}

  public init(): void {
    // 1. Static Core Relationships
    const relationships: GraphNode[] = [
      {
        id: "SlotDirector",
        name: "SlotDirector",
        category: "cc_slot_module",
        description: "Orchestrator of the Slot spin loop, handling start, table roll, win presentation, and respin cascade.",
        related: ["SlotTableModule", "SlotSymbolManager", "PaylineInfoModule", "GameDataStore", "GameConfig"],
      },
      {
        id: "SlotTableModule",
        name: "SlotTableModule",
        category: "cc_slot_module",
        description: "Controls the reel table matrix, column rolling, stopping animations, and near-win effects.",
        related: ["SlotDirector", "SlotSymbolManager", "SlotTableData", "TableModuleConfig"],
      },
      {
        id: "SlotSymbolManager",
        name: "SlotSymbolManager",
        category: "cc_slot_module",
        description: "Manages symbol instantiation, spine caching, symbol animation states (win, near-win, static).",
        related: ["SlotTableModule", "SlotBaseModule", "SlotSymbolModule"],
      },
      {
        id: "PaylineInfoModule",
        name: "PaylineInfoModule",
        category: "cc_slot_module",
        description: "Displays win amounts, payline text, multiplier animations, and total win effect triggers.",
        related: ["SlotDirector", "MoneyFormatter", "MultiplierModule", "GameDataStore"],
      },
      {
        id: "GameDataStore",
        name: "GameDataStore",
        category: "cc_slot_module",
        description: "Single source of truth for player session, matrix data, paylines, bet levels, and win amounts.",
        related: ["SlotDirector", "SlotGameSettings", "GameConfig"],
      },
      {
        id: "SlotEvents",
        name: "Slot Events Dictionary",
        category: "events",
        description: "Core event bus topics (SHOW_PAYLINE_WIN_AMOUNT, APPLY_MULTIPLIER_TO_WIN_AMOUNT, COMMIT_RESPIN_WIN_AMOUNT, SPIN_START).",
        related: ["SlotDirector", "PaylineInfoModule", "SlotTableModule"],
      },
      {
        id: "Mechanics_AllWays",
        name: "AllWays Payline Mechanics",
        category: "cc_slot_mechanics",
        description: "Calculates wins by multiplying symbol counts across consecutive columns from left to right.",
        related: ["SlotDirector", "PaylineInfoModule", "PaylineInfoData"],
      },
      {
        id: "Mechanics_Cascade",
        name: "Cascade / Respin Mechanics",
        category: "cc_slot_mechanics",
        description: "Removes winning symbols, drops new symbols from above, and triggers consecutive respin evaluation.",
        related: ["SlotTableModule", "SlotDirector", "MultiplierModule"],
      },
    ];

    relationships.forEach(node => {
      this.nodes.set(node.id.toLowerCase(), node);
      this.nodes.set(node.name.toLowerCase(), node);
    });

    // 2. Dynamic Loading from docs/modules/*/relations.json
    const modulesPath = path.join(this.docsDir, "modules");
    if (fs.existsSync(modulesPath)) {
      const dirs = fs.readdirSync(modulesPath, { withFileTypes: true });
      for (const d of dirs) {
        if (d.isDirectory()) {
          const relFile = path.join(modulesPath, d.name, "relations.json");
          if (fs.existsSync(relFile)) {
            try {
              const data = JSON.parse(fs.readFileSync(relFile, "utf8"));
              const relatedTargets = [
                data.inheritsFrom,
                ...(data.manages || []),
                ...(data.usedBy ? data.usedBy.map((u: any) => u.target) : []),
                ...(data.dependsOn || []),
                ...(data.emitsEvents || []),
                ...(data.listensToEvents || []),
                ...(data.gotchas || [])
              ].filter(Boolean).map(s => String(s).replace(/^(\w+):/, ""));

              const node: GraphNode = {
                id: data.nodeId || d.name,
                name: d.name,
                category: data.category || "cc_slot_module",
                description: data.title || `${d.name} Module`,
                related: Array.from(new Set(relatedTargets)),
                raw: data
              };

              this.nodes.set(node.id.toLowerCase(), node);
              this.nodes.set(node.name.toLowerCase(), node);
              this.nodes.set(d.name.toLowerCase(), node);
            } catch (e) {
              console.error(`[GraphEngine] Error parsing ${relFile}:`, e);
            }
          }
        }
      }
    }

    console.log(`[GraphEngine] Initialized ${this.nodes.size} conceptual graph node indices.`);
  }

  public getRelated(topicId: string): GraphNode | null {
    const q = topicId.toLowerCase().replace(/^(\w+):/, "");
    return this.nodes.get(q) || this.nodes.get(topicId.toLowerCase()) || null;
  }

  public getAllNodes(): GraphNode[] {
    return Array.from(this.nodes.values());
  }
}
