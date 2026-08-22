export class ToolRegistry {
    tools = new Map();
    register(tool) {
        if (this.tools.has(tool.name)) {
            console.warn(`[ToolRegistry] Tool '${tool.name}' already exists, overwriting.`);
        }
        this.tools.set(tool.name, tool);
    }
    registerMany(tools) {
        for (const tool of tools) {
            this.register(tool);
        }
    }
    getTool(name) {
        return this.tools.get(name);
    }
    getAllTools() {
        return Array.from(this.tools.values());
    }
    getMCPToolList() {
        return this.getAllTools().map((t) => ({
            name: t.name,
            description: t.description,
            inputSchema: t.inputSchema,
        }));
    }
    async executeTool(name, args) {
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
        }
        catch (error) {
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
//# sourceMappingURL=tool_registry.js.map