import { ToolDefinition, ToolResponse } from "./types.js";

export class ToolRegistry {
  private tools = new Map<string, ToolDefinition>();

  public register(tool: ToolDefinition): void {
    if (this.tools.has(tool.name)) {
      console.warn(`[ToolRegistry] Tool '${tool.name}' already exists, overwriting.`);
    }
    this.tools.set(tool.name, tool);
  }

  public registerMany(tools: ToolDefinition[]): void {
    for (const tool of tools) {
      this.register(tool);
    }
  }

  public getTool(name: string): ToolDefinition | undefined {
    return this.tools.get(name);
  }

  public getAllTools(): ToolDefinition[] {
    return Array.from(this.tools.values());
  }

  public getMCPToolList(): Array<{
    name: string;
    description: string;
    inputSchema: any;
  }> {
    return this.getAllTools().map((t) => ({
      name: t.name,
      description: t.description,
      inputSchema: t.inputSchema,
    }));
  }

  public async executeTool(name: string, args: any): Promise<ToolResponse> {
    const tool = this.tools.get(name);
    if (!tool) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `[Error] Tool not found: "${name}". Available tools: ${Array.from(this.tools.keys()).join(", ")}`,
          },
        ],
      };
    }

    try {
      return await tool.handler(args);
    } catch (error: any) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `[Tool Execution Error] ${error?.message || String(error)}`,
          },
        ],
      };
    }
  }
}

export const globalToolRegistry = new ToolRegistry();
