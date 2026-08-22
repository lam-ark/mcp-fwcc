import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
export type ToolResponse = CallToolResult;
export interface ToolDefinition {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: Record<string, any>;
        required?: string[];
    };
    handler: (args: any) => Promise<ToolResponse> | ToolResponse;
}
export interface IEngine {
    init(): Promise<void> | void;
    destroy?(): Promise<void> | void;
}
