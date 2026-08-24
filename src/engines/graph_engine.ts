import * as fs from "fs";
import * as path from "path";
import { IEngine } from "../core/types.js";
import { CONFIG } from "../config/constants.js";

export interface SemanticRelation {
  target: string;
  relation: string;
}

export interface GraphNode {
  id: string;
  name: string;
  category: string;
  description: string;
  inheritsFrom?: string;
  manages: string[];
  usedBy: SemanticRelation[];
  dependsOn: string[];
  emitsEvents: string[];
  listensToEvents: string[];
  gotchas: string[];
  related: string[];
  backlinks: Array<{ source: string; relationType: string }>;
  raw?: any;
}

/**
 * Recursively find all relations.json files in a directory
 */
function findRelationsFiles(dir: string): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findRelationsFiles(fullPath));
    } else if (entry.isFile() && entry.name === "relations.json") {
      results.push(fullPath);
    }
  }
  return results;
}

export class GraphEngine implements IEngine {
  private nodes: Map<string, GraphNode> = new Map();
  private eventIndex: Map<string, { emitters: string[]; listeners: string[] }> = new Map();
  private gotchaIndex: Map<string, string[]> = new Map();

  constructor(private docsDir: string = CONFIG.DOCS_DIR) {}

  public init(): void {
    this.nodes.clear();
    this.eventIndex.clear();
    this.gotchaIndex.clear();

    // 1. Built-in Core Archetypes and Mechanics Relationships
    const staticArchetypes: GraphNode[] = [
      {
        id: "SlotDirector",
        name: "SlotDirector",
        category: "cc_slot_module",
        description: "Master orchestrator of the Slot spin loop, handling start, table roll, win presentation, and respin cascade.",
        inheritsFrom: "BaseGameDirector",
        manages: ["SlotTableModule", "SlotSymbolManager"],
        usedBy: [{ target: "GameModeDirectorModule", relation: "controls_execution" }],
        dependsOn: ["PaylineInfoModule", "GameDataStore", "GameConfig", "SlotSoundPlayerModule"],
        emitsEvents: ["START_SPIN", "TABLE_STOPPED", "CLEAR_PAYLINES"],
        listensToEvents: ["SPIN_CLICKED", "FAST_STOP_TRIGGERED"],
        gotchas: ["Uninitialized_Executor_Null_Crash", "Missing_Director_Command_Implementation"],
        related: ["SlotTableModule", "SlotSymbolManager", "PaylineInfoModule", "GameDataStore", "GameConfig"],
        backlinks: [],
      },
      {
        id: "SlotBaseModule",
        name: "SlotBaseModule",
        category: "cc_slot_module",
        description: "Universal base class providing IoC Inversion of Control, applyInjections, and Dual Event Bus system.",
        inheritsFrom: "cc.Component",
        manages: [],
        usedBy: [
          { target: "SlotTableModule", relation: "inherits_base_module" },
          { target: "SlotSymbolManager", relation: "inherits_base_module" },
          { target: "PaylineInfoModule", relation: "inherits_base_module" },
          { target: "WalletModule", relation: "inherits_base_module" },
          { target: "BetModule", relation: "inherits_base_module" },
          { target: "BaseGameDirector", relation: "inherits_base_module" }
        ],
        dependsOn: ["GameEventManager", "GameModuleEvent", "SlotSoundPlayerModule"],
        emitsEvents: ["RESET_ALL_EFFECT_AND_TASKS"],
        listensToEvents: ["RESET_ALL_EFFECT_AND_TASKS"],
        gotchas: ["Direct_onLoad_Override_Drops_Injections", "Multi_Mode_Registration_Conflict", "Missing_TargetOff_Event_Leak"],
        related: ["GameEventManager", "GameModuleEvent", "SlotSoundPlayerModule", "GameLogic"],
        backlinks: [],
      },
      {
        id: "SlotTableModule",
        name: "SlotTableModule",
        category: "cc_slot_module",
        description: "Controls the reel table matrix, column rolling, stopping bounce animations, and near-win effects.",
        inheritsFrom: "SlotBaseModule",
        manages: ["SlotReelModule", "SlotSymbolManager"],
        usedBy: [{ target: "SlotDirector", relation: "orchestrates" }],
        dependsOn: ["SlotTableData", "TableModuleConfig", "GameConfig"],
        emitsEvents: ["TABLE_STOPPED", "REEL_STOP_SOUND", "SETUP_NEARWIN"],
        listensToEvents: ["START_SPIN", "RESET_NEARWIN", "PROCESS_BEFORE_STOP_REELS"],
        gotchas: ["SlotTableModule_Event_Cleanup_Leak", "SlotTableModule_Early_Injection_Access"],
        related: ["SlotDirector", "SlotSymbolManager", "SlotTableData", "TableModuleConfig"],
        backlinks: [],
      },
      {
        id: "SlotSymbolManager",
        name: "SlotSymbolManager",
        category: "cc_slot_module",
        description: "Manages symbol instantiation, spine animation caching, and node pooling (cc.NodePool).",
        inheritsFrom: "SlotBaseModule",
        manages: ["SlotSymbolModule"],
        usedBy: [{ target: "SlotTableModule", relation: "provides_recycled_symbols" }],
        dependsOn: ["GameConfig", "SlotBaseModule"],
        emitsEvents: ["RESET_ALL_SYMBOLS", "SPIN_START"],
        listensToEvents: ["RESET_ON_SPIN"],
        gotchas: ["Spine_Pool_Pollution", "Memory_Leak_UsingSymbols_Array", "Sticky_Wild_Accidental_Recycle"],
        related: ["SlotTableModule", "SlotBaseModule", "SlotSymbolModule"],
        backlinks: [],
      },
      {
        id: "PaylineInfoModule",
        name: "PaylineInfoModule",
        category: "cc_slot_module",
        description: "Displays win amounts, payline text, bitmap font counters, and milestone celebration effect triggers.",
        inheritsFrom: "SlotBaseModule",
        manages: [],
        usedBy: [{ target: "SlotDirector", relation: "orchestrates" }],
        dependsOn: ["MoneyFormatter", "MultiplierModule", "GameDataStore"],
        emitsEvents: ["SHOW_PAYLINE_WIN_AMOUNT", "COMMIT_RESPIN_WIN_AMOUNT"],
        listensToEvents: ["TABLE_STOPPED", "RESET_MULTIPLIER"],
        gotchas: ["Stale_Win_Amount_Next_Spin_Desync"],
        related: ["SlotDirector", "MoneyFormatter", "MultiplierModule", "GameDataStore"],
        backlinks: [],
      },
      {
        id: "GameDataStore",
        name: "GameDataStore",
        category: "cc_slot_module",
        description: "Central reactive state container holding player session, matrix data, paylines, bet levels, and win amounts.",
        inheritsFrom: "cc.Component",
        manages: ["BaseDataModule", "SlotTableData", "BetData", "WalletData"],
        usedBy: [{ target: "BaseGameDirector", relation: "reads_play_session" }],
        dependsOn: ["GameConfig", "SlotGameSettings"],
        emitsEvents: [],
        listensToEvents: [],
        gotchas: ["PlaySession_Reference_Mutation_Bug", "Stale_Win_Amount_Next_Spin_Desync"],
        related: ["SlotDirector", "SlotGameSettings", "GameConfig"],
        backlinks: [],
      }
    ];

    // Register archetypes
    for (const node of staticArchetypes) {
      this.registerNode(node);
    }

    // 2. Discover and parse all relations.json across entire docs directory recursively
    const relationFiles = findRelationsFiles(this.docsDir);
    for (const relFile of relationFiles) {
      try {
        const raw = JSON.parse(fs.readFileSync(relFile, "utf8"));
        const dirName = path.basename(path.dirname(relFile));
        const nodeId = raw.id || raw.nodeId || dirName;

        const relatedTargets = [
          raw.inheritsFrom,
          ...(raw.manages || []),
          ...(raw.usedBy ? raw.usedBy.map((u: any) => (typeof u === "string" ? u : u.target)) : []),
          ...(raw.dependsOn || []),
          ...(raw.emitsEvents || []),
          ...(raw.listensToEvents || []),
          ...(raw.gotchas || [])
        ].filter(Boolean).map(s => String(s).replace(/^(\w+):/, ""));

        const node: GraphNode = {
          id: nodeId,
          name: raw.name || raw.title || dirName,
          category: raw.category || "cc_slot_module",
          description: raw.description || raw.title || `${dirName} Specification`,
          inheritsFrom: raw.inheritsFrom,
          manages: raw.manages || [],
          usedBy: raw.usedBy || [],
          dependsOn: raw.dependsOn || [],
          emitsEvents: raw.emitsEvents || [],
          listensToEvents: raw.listensToEvents || [],
          gotchas: raw.gotchas || [],
          related: Array.from(new Set(relatedTargets)),
          backlinks: [],
          raw,
        };

        this.registerNode(node);
      } catch (e) {
        console.error(`[GraphEngine] Error parsing ${relFile}:`, e);
      }
    }

    // 3. Compute Bi-directional Backlinks & Indices
    this.computeBacklinksAndIndices();

    console.log(`[GraphEngine] Initialized ${this.nodes.size} conceptual graph nodes with bi-directional backlinks.`);
  }

  private registerNode(node: GraphNode): void {
    const keys = [
      node.id.toLowerCase(),
      node.name.toLowerCase(),
      node.id.replace(/^(\w+):/, "").toLowerCase(),
    ];

    for (const key of keys) {
      this.nodes.set(key, node);
    }
  }

  private computeBacklinksAndIndices(): void {
    const allNodes = Array.from(new Set(this.nodes.values()));

    for (const node of allNodes) {
      // 1. Index Events
      for (const ev of node.emitsEvents) {
        const evKey = ev.toLowerCase();
        if (!this.eventIndex.has(evKey)) {
          this.eventIndex.set(evKey, { emitters: [], listeners: [] });
        }
        this.eventIndex.get(evKey)!.emitters.push(node.id);
      }

      for (const ev of node.listensToEvents) {
        const evKey = ev.toLowerCase();
        if (!this.eventIndex.has(evKey)) {
          this.eventIndex.set(evKey, { emitters: [], listeners: [] });
        }
        this.eventIndex.get(evKey)!.listeners.push(node.id);
      }

      // 2. Index Gotchas
      for (const g of node.gotchas) {
        const gKey = g.toLowerCase();
        if (!this.gotchaIndex.has(gKey)) {
          this.gotchaIndex.set(gKey, []);
        }
        this.gotchaIndex.get(gKey)!.push(node.id);
      }

      // 3. Compute Inbound Backlinks
      if (node.inheritsFrom) {
        const parentName = typeof node.inheritsFrom === "string" ? node.inheritsFrom : (node.inheritsFrom as any)?.target;
        const parent = this.getRelated(parentName);
        if (parent && parent !== node) {
          parent.backlinks.push({ source: node.id, relationType: "subclassed_by" });
        }
      }

      for (const dep of node.dependsOn) {
        const targetName = typeof dep === "string" ? dep : (dep as any)?.target;
        const target = this.getRelated(targetName);
        if (target && target !== node) {
          target.backlinks.push({ source: node.id, relationType: "required_by" });
        }
      }

      for (const used of node.usedBy) {
        const targetName = typeof used === "string" ? used : (used as any)?.target;
        const target = this.getRelated(targetName);
        if (target && target !== node) {
          target.backlinks.push({ source: node.id, relationType: "used_by" });
        }
      }
    }
  }

  public getRelated(concept: any): GraphNode | null {
    if (!concept) return null;
    const conceptStr = typeof concept === "string" ? concept : (concept?.target || concept?.id || String(concept));
    if (!conceptStr || typeof conceptStr !== "string") return null;

    const clean = conceptStr.trim().toLowerCase().replace(/^(\w+):/, "");
    return this.nodes.get(clean) || this.nodes.get(conceptStr.trim().toLowerCase()) || null;
  }

  public getBacklinks(concept: string): Array<{ source: string; relationType: string }> {
    const node = this.getRelated(concept);
    return node ? node.backlinks : [];
  }

  public getNodesByEvent(eventName: string): { emitters: string[]; listeners: string[] } {
    const evKey = eventName.toLowerCase().trim();
    return this.eventIndex.get(evKey) || { emitters: [], listeners: [] };
  }

  public getGotchas(moduleOrTopic?: string): Array<{ moduleId: string; gotchas: string[] }> {
    if (moduleOrTopic) {
      const node = this.getRelated(moduleOrTopic);
      if (node) {
        return [{ moduleId: node.id, gotchas: node.gotchas }];
      }
    }

    const results: Array<{ moduleId: string; gotchas: string[] }> = [];
    const seen = new Set<string>();

    for (const node of this.nodes.values()) {
      if (!seen.has(node.id) && node.gotchas && node.gotchas.length > 0) {
        seen.add(node.id);
        results.push({ moduleId: node.id, gotchas: node.gotchas });
      }
    }

    return results;
  }

  public getGraphNeighbors(concept: string, maxDepth: number = 1): any {
    const root = this.getRelated(concept);
    if (!root) return null;

    const visited = new Set<string>([root.id]);
    const edges: Array<{ source: string; target: string; type: string }> = [];

    // Layer 1
    if (root.inheritsFrom) edges.push({ source: root.id, target: root.inheritsFrom, type: "inherits" });
    for (const dep of root.dependsOn) edges.push({ source: root.id, target: dep, type: "depends_on" });
    for (const m of root.manages) edges.push({ source: root.id, target: m, type: "manages" });
    for (const u of root.usedBy) {
      const t = typeof u === "string" ? u : u.target;
      edges.push({ source: root.id, target: t, type: "used_by" });
    }
    for (const b of root.backlinks) {
      edges.push({ source: b.source, target: root.id, type: b.relationType });
    }

    return {
      root: root.id,
      category: root.category,
      description: root.description,
      outgoingEdges: edges.filter(e => e.source === root.id),
      incomingEdges: edges.filter(e => e.target === root.id),
      allEdges: edges,
    };
  }

  public getAllNodes(): GraphNode[] {
    return Array.from(new Set(this.nodes.values()));
  }
}
