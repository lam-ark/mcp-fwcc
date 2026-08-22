import { ToolDefinition, ToolResponse } from "./types.js";
export declare class ToolRegistry {
    private tools;
    register(tool: ToolDefinition): void;
    registerMany(tools: ToolDefinition[]): void;
    getTool(name: string): ToolDefinition | undefined;
    getAllTools(): ToolDefinition[];
    getMCPToolList(): Array<{
        name: string;
        description: string;
        inputSchema: any;
    }>;
    executeTool(name: string, args: any): Promise<ToolResponse>;
}
export declare const globalToolRegistry: ToolRegistry;
