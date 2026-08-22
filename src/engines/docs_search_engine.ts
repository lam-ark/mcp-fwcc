import * as fs from "fs";
import * as path from "path";
import MiniSearch from "minisearch";
import { IEngine } from "../core/types.js";
import { scanMarkdownFiles } from "../utils/file_scanner.js";
import { CONFIG } from "../config/constants.js";

export interface DocChunk {
  id: string;
  file: string;
  relPath: string;
  topic: string;
  category: string;
  section: string;
  content: string;
}

export interface TopicInfo {
  id: string;
  file: string;
  relPath: string;
  title: string;
  category: string;
  classes: string[];
  methods: string[];
  description: string;
}

export class DocsSearchEngine implements IEngine {
  private searchEngine: MiniSearch<DocChunk> | null = null;
  private topicsList: TopicInfo[] = [];
  private isInitialized = false;

  constructor(private docsDir: string = CONFIG.DOCS_DIR) {}

  public init(): void {
    if (!fs.existsSync(this.docsDir)) {
      fs.mkdirSync(this.docsDir, { recursive: true });
    }

    this.searchEngine = new MiniSearch<DocChunk>({
      fields: ["topic", "section", "content"],
      storeFields: ["file", "relPath", "topic", "section", "content", "category"],
      searchOptions: {
        boost: { section: 2, topic: 1.5 },
        fuzzy: 0.2,
        prefix: true,
      },
    });

    const scannedFiles = scanMarkdownFiles(this.docsDir);
    const chunks: DocChunk[] = [];
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
      } catch (err) {
        console.error(`[DocsSearchEngine] Error parsing ${item.relPath}:`, err);
      }
    }

    this.searchEngine.addAll(chunks);
    this.isInitialized = true;
    console.log(`[DocsSearchEngine] Indexed ${chunks.length} chunks across ${this.topicsList.length} cc-common modules.`);
  }

  public search(query: string, limit: number = 10, category?: string) {
    if (!this.searchEngine) return [];

    let results = this.searchEngine.search(query);
    if (category) {
      results = results.filter((r: any) => r.category === category);
    }

    return results.slice(0, limit).map((r: any) => ({
      score: r.score,
      topic: r.topic,
      section: r.section,
      relPath: r.relPath,
      category: r.category,
      snippet: r.content.slice(0, 300) + (r.content.length > 300 ? "..." : ""),
    }));
  }

  public listTopics(category?: string): TopicInfo[] {
    if (category) {
      return this.topicsList.filter(t => t.category.toLowerCase() === category.toLowerCase());
    }
    return this.topicsList;
  }

  public getDoc(topicOrRelPath: string): { found: boolean; relPath?: string; content?: string } {
    const topic = this.topicsList.find(
      t => t.id === topicOrRelPath || t.relPath === topicOrRelPath || t.file === topicOrRelPath
    );

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

  public getClassApi(className: string): { found: boolean; topic?: TopicInfo; content?: string } {
    const q = className.toLowerCase();
    const topic = this.topicsList.find(
      t =>
        t.classes.some(c => c.toLowerCase() === q) ||
        t.id.toLowerCase() === q ||
        t.title.toLowerCase() === q ||
        t.file.toLowerCase().startsWith(q)
    );
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
