export class GraphEngine {
    nodes = new Map();
    init() {
        const relationships = [
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
                related: ["SlotTableModule", "SlotBaseModule"],
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
        relationships.forEach(node => this.nodes.set(node.id.toLowerCase(), node));
        console.log(`[GraphEngine] Initialized ${this.nodes.size} conceptual graph nodes.`);
    }
    getRelated(topicId) {
        return this.nodes.get(topicId.toLowerCase()) || null;
    }
    getAllNodes() {
        return Array.from(this.nodes.values());
    }
}
//# sourceMappingURL=graph_engine.js.map