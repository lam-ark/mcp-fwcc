import * as fs from "fs";
import * as path from "path";
import MiniSearch from "minisearch";
import { scanMarkdownFiles } from "../utils/file_scanner.js";
import { CONFIG } from "../config/constants.js";
export class DocsSearchEngine {
    docsDir;
    searchEngine = null;
    topicsList = [];
    isInitialized = false;
    constructor(docsDir = CONFIG.DOCS_DIR) {
        this.docsDir = docsDir;
    }
    init() {
        if (!fs.existsSync(this.docsDir)) {
            fs.mkdirSync(this.docsDir, { recursive: true });
        }
        this.searchEngine = new MiniSearch({
            fields: ["topic", "section", "content"],
            storeFields: ["file", "relPath", "topic", "section", "content", "category"],
            searchOptions: {
                boost: { section: 2, topic: 1.5 },
                fuzzy: 0.2,
                prefix: true,
            },
        });
        const scannedFiles = scanMarkdownFiles(this.docsDir);
        const chunks = [];
        this.topicsList = [];
        for (const item of scannedFiles) {
            try {
                const rawContent = fs.readFileSync(item.fullPath, "utf8");
                const topicId = item.fileName.replace(/\.md$/, "");
                const titleMatch = rawContent.match(/^#\s+(.+)$/m);
                const title = titleMatch ? titleMatch[1] : topicId;
                // Extract classes & methods
                const classMatches = [...rawContent.matchAll(/-\s+\*\*`(\w+)`\*\*/g)].map(m => m[1]);
                const methodMatches = [...rawContent.matchAll(/-\s+`(\w+)\(\):/g)].map(m => m[1]);
                this.topicsList.push({
                    id: topicId,
                    file: item.fileName,
                    relPath: item.relPath,
                    title,
                    category: item.categoryHint,
                    classes: classMatches,
                    methods: methodMatches,
                    description: `cc-common documentation for ${title}`,
                });
                // Split into chunks by H2 sections
                const sections = rawContent.split(/\n(?=##\s+)/);
                let sectionIdx = 0;
                for (const sec of sections) {
                    const secMatch = sec.match(/^##\s+(.+)$/m);
                    const sectionTitle = secMatch ? secMatch[1].trim() : "Overview";
                    const chunkId = `${topicId}#sec-${sectionIdx++}`;
                    chunks.push({
                        id: chunkId,
                        file: item.fileName,
                        relPath: item.relPath,
                        topic: title,
                        category: item.categoryHint,
                        section: sectionTitle,
                        content: sec.trim(),
                    });
                }
            }
            catch (err) {
                console.error(`[DocsSearchEngine] Error parsing ${item.relPath}:`, err);
            }
        }
        this.searchEngine.addAll(chunks);
        this.isInitialized = true;
        console.log(`[DocsSearchEngine] Indexed ${chunks.length} chunks across ${this.topicsList.length} cc-common modules.`);
    }
    search(query, limit = 10, category) {
        if (!this.searchEngine)
            return [];
        let results = this.searchEngine.search(query);
        if (category) {
            results = results.filter((r) => r.category === category);
        }
        return results.slice(0, limit).map((r) => ({
            score: r.score,
            topic: r.topic,
            section: r.section,
            relPath: r.relPath,
            category: r.category,
            snippet: r.content.slice(0, 300) + (r.content.length > 300 ? "..." : ""),
        }));
    }
    listTopics(category) {
        if (category) {
            return this.topicsList.filter(t => t.category.toLowerCase() === category.toLowerCase());
        }
        return this.topicsList;
    }
    getDoc(topicOrRelPath) {
        const topic = this.topicsList.find(t => t.id === topicOrRelPath || t.relPath === topicOrRelPath || t.file === topicOrRelPath);
        if (!topic) {
            return { found: false };
        }
        const fullPath = path.join(this.docsDir, topic.relPath);
        if (!fs.existsSync(fullPath)) {
            return { found: false };
        }
        return {
            found: true,
            relPath: topic.relPath,
            content: fs.readFileSync(fullPath, "utf8"),
        };
    }
    getClassApi(className) {
        const q = className.toLowerCase();
        const topic = this.topicsList.find(t => t.classes.some(c => c.toLowerCase() === q) ||
            t.id.toLowerCase() === q ||
            t.title.toLowerCase() === q ||
            t.file.toLowerCase().startsWith(q));
        if (!topic) {
            return { found: false };
        }
        const doc = this.getDoc(topic.relPath);
        return {
            found: true,
            topic,
            content: doc.content,
        };
    }
}
//# sourceMappingURL=docs_search_engine.js.map