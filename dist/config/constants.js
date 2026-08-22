import * as path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const CONFIG = {
    SERVER_NAME: "fwcc-knowledge-server",
    SERVER_VERSION: "1.0.0",
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 8925,
    DOCS_DIR: path.resolve(__dirname, "../../docs"),
};
//# sourceMappingURL=constants.js.map