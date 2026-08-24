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
  tags: string;
  methods: string;
  section: string;
  content: string;
}

export interface TopicInfo {
  id: string;
  file: string;
  relPath: string;
  title: string;
  category: string;
  tags: string[];
  methods: string[];
  classes: string[];
  description: string;
}

export interface SearchResultItem {
  score: number;
  topic: string;
  section: string;
  relPath: string;
  category: string;
  tags: string[];
  snippet: string;
}

/**
 * Lightweight and robust YAML Frontmatter parser
 */
function parseFrontmatter(rawText: string): { data: Record<string, any>; content: string } {
  if (!rawText.startsWith("---")) {
    return { data: {}, content: rawText };
  }

  const endIdx = rawText.indexOf("\n---", 3);
  if (endIdx === -1) {
    return { data: {}, content: rawText };
  }

  const frontmatterStr = rawText.slice(3, endIdx).trim();
  const content = rawText.slice(endIdx + 4).trim();
  const data: Record<string, any> = {};

  const lines = frontmatterStr.split("\n");
  for (const line of lines) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();

    // Parse array syntax: ["a", "b", "c"] or [a, b]
    if (val.startsWith("[") && val.endsWith("]")) {
      const inner = val.slice(1, -1).trim();
      data[key] = inner
        ? inner.split(",").map(item => item.trim().replace(/^["']|["']$/g, ""))
        : [];
    } else {
      // Remove enclosing quotes
      val = val.replace(/^["']|["']$/g, "");
      data[key] = val;
    }
  }

  return { data, content };
}

/**
 * Smart snippet extractor highlighting query context
 */
function extractSmartSnippet(content: string, query: string, maxLength: number = 300): string {
  if (!content) return "";
  if (!query) return content.slice(0, maxLength) + (content.length > maxLength ? "..." : "");

  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  let bestIdx = -1;

  for (const word of words) {
    const idx = content.toLowerCase().indexOf(word);
    if (idx !== -1) {
      bestIdx = idx;
      break;
    }
  }

  if (bestIdx === -1) {
    return content.slice(0, maxLength) + (content.length > maxLength ? "..." : "");
  }

  const half = Math.floor(maxLength / 2);
  let start = Math.max(0, bestIdx - half);
  let end = Math.min(content.length, start + maxLength);

  if (start > 0) {
    // Find nearest preceding whitespace
    const spaceIdx = content.indexOf(" ", start);
    if (spaceIdx !== -1 && spaceIdx < start + 20) {
      start = spaceIdx + 1;
    }
  }

  let snippet = content.slice(start, end).trim();
  if (start > 0) snippet = "..." + snippet;
  if (end < content.length) snippet = snippet + "...";

  return snippet;
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
      fields: ["topic", "tags", "methods", "section", "content"],
      storeFields: ["file", "relPath", "topic", "section", "content", "category", "tags"],
      searchOptions: {
        boost: { tags: 3.5, methods: 3.0, section: 2.0, topic: 1.5, content: 1.0 },
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
        const { data, content } = parseFrontmatter(rawContent);

        const fallbackId = item.relPath.replace(/\.md$/, "").replace(/[\/\\]/g, ":");
        const topicId = String(data.id || fallbackId);
        
        const titleMatch = content.match(/^#\s+(.+)$/m);
        const title = String(data.title || (titleMatch ? titleMatch[1] : item.fileName.replace(/\.md$/, "")));
        const category = String(data.category || item.categoryHint || "general");
        
        const tags: string[] = Array.isArray(data.tags) ? data.tags.map(String) : [];
        const methodsFromYaml: string[] = Array.isArray(data.methods) ? data.methods.map(String) : [];

        // Extract classes & methods from Markdown text patterns
        const classMatches = [...content.matchAll(/-\s+\*\*`(\w+)`\*\*/g)].map(m => m[1]);
        const methodMatchesFromText = [...content.matchAll(/-\s+`(\w+)\(\):/g)].map(m => m[1]);
        const allMethods = Array.from(new Set([...methodsFromYaml, ...methodMatchesFromText]));

        const firstParagraphMatch = content.replace(/^#\s+.+\n+/, "").match(/^[^\n#]+/);
        const description = firstParagraphMatch ? firstParagraphMatch[0].slice(0, 160).trim() : `Documentation for ${title}`;

        this.topicsList.push({
          id: topicId,
          file: item.fileName,
          relPath: item.relPath,
          title,
          category,
          tags,
          methods: allMethods,
          classes: classMatches,
          description,
        });

        // Split into chunks by H2 sections
        const sections = content.split(/\n(?=##\s+)/);
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
            category,
            tags: tags.join(" "),
            methods: allMethods.join(" "),
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
    console.log(`[DocsSearchEngine] Indexed ${chunks.length} chunks with Frontmatter & Tag weights across ${this.topicsList.length} cc-common modules.`);
  }

  public search(query: string, limit: number = 10, category?: string, tag?: string): SearchResultItem[] {
    if (!this.searchEngine) return [];

    let results = this.searchEngine.search(query);
    
    if (category) {
      const catLower = category.toLowerCase();
      results = results.filter((r: any) => String(r.category || "").toLowerCase() === catLower);
    }

    if (tag) {
      const tagLower = tag.toLowerCase();
      results = results.filter((r: any) => String(r.tags || "").toLowerCase().includes(tagLower));
    }

    return results.slice(0, limit).map((r: any) => {
      const rawTags = r.tags ? String(r.tags).split(" ").filter(Boolean) : [];
      return {
        score: r.score,
        topic: r.topic,
        section: r.section,
        relPath: r.relPath,
        category: r.category,
        tags: rawTags,
        snippet: extractSmartSnippet(r.content, query, 320),
      };
    });
  }

  public searchExact(keyword: string): TopicInfo[] {
    const q = keyword.toLowerCase().trim();
    return this.topicsList.filter(t => 
      t.id.toLowerCase() === q ||
      t.title.toLowerCase() === q ||
      t.file.toLowerCase() === q ||
      t.file.toLowerCase() === `${q}.md` ||
      t.tags.some(tag => tag.toLowerCase() === q) ||
      t.methods.some(m => m.toLowerCase() === q) ||
      t.classes.some(c => c.toLowerCase() === q)
    );
  }

  public listTopics(category?: string, tag?: string): TopicInfo[] {
    let list = this.topicsList;
    if (category) {
      list = list.filter(t => t.category.toLowerCase() === category.toLowerCase());
    }
    if (tag) {
      const tagLower = tag.toLowerCase();
      list = list.filter(t => t.tags.some(tg => tg.toLowerCase() === tagLower));
    }
    return list;
  }

  public getDoc(topicOrRelPath: string): { found: boolean; relPath?: string; content?: string } {
    const topic = this.topicsList.find(
      t => t.id.toLowerCase() === topicOrRelPath.toLowerCase() || 
           t.relPath.toLowerCase() === topicOrRelPath.toLowerCase() || 
           t.file.toLowerCase() === topicOrRelPath.toLowerCase() ||
           t.title.toLowerCase() === topicOrRelPath.toLowerCase()
    );

    if (!topic) {
      // Direct relative path fallback
      const directPath = path.join(this.docsDir, topicOrRelPath);
      if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
        return {
          found: true,
          relPath: topicOrRelPath,
          content: fs.readFileSync(directPath, "utf8"),
        };
      }
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
        t.file.toLowerCase().startsWith(q) ||
        t.tags.some(tag => tag.toLowerCase() === q)
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
