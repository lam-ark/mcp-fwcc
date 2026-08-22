import { IEngine } from "../core/types.js";
export interface GraphNode {
    id: string;
    name: string;
    category: string;
    description: string;
    related: string[];
}
export declare class GraphEngine implements IEngine {
    private nodes;
    init(): void;
    getRelated(topicId: string): GraphNode | null;
    getAllNodes(): GraphNode[];
}
