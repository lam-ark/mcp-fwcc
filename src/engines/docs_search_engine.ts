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
  private chunksMap: Map<string, DocChunk> = new Map();
  private isInitialized = false;

  constructor(private docsDir: string = CONFIG.DOCS_DIR) {}

  public init(): void {
    if (!fs.existsSync(this.docsDir)) {
      fs.mkdirSync(this.docsDir, { recursive: true });
    }

    this.searchEngine = new MiniSearch<DocChunk>({
      fields: ["topic", "tags", "methods", "section", "content"],
      storeFields: ["id", "file", "relPath", "topic", "section", "content", "category", "tags"],
      searchOptions: {
        boost: {
          topic: 4.0,
          tags: 3.0,
          methods: 2.5,
          section: 2.0,
          content: 1.0,
        },
        fuzzy: 0.2,
        prefix: true,
      },
    });

    const mdFiles = scanMarkdownFiles(this.docsDir);
    const chunks: DocChunk[] = [];
    this.chunksMap.clear();
    this.topicsList = [];

    for (const item of mdFiles) {
      try {
        const rawContent = fs.readFileSync(item.fullPath, "utf8");
        const { data, content } = parseFrontmatter(rawContent);

        const topicId = data.id || item.fileName.replace(/\.md$/, "");
        const title = data.title || topicId;
        const category = data.category || (item.relPath.split(path.sep)[0] || "general");
        const tags = Array.isArray(data.tags) ? data.tags : [];

        // Extract class and method signatures
        const classMatches = Array.from(content.matchAll(/class\s+(\w+)/g)).map(m => m[1]);
        const methodMatches = Array.from(content.matchAll(/(?:public|protected|private)?\s*(\w+)\s*\([^)]*\)\s*:/g)).map(m => m[1]);
        const allMethods = Array.from(new Set(methodMatches));

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

          const docChunk: DocChunk = {
            id: chunkId,
            file: item.fileName,
            relPath: item.relPath,
            topic: title,
            category,
            tags: tags.join(" "),
            methods: allMethods.join(" "),
            section: sectionTitle,
            content: sec.trim(),
          };

          chunks.push(docChunk);
          this.chunksMap.set(chunkId.toLowerCase(), docChunk);
          this.chunksMap.set(`${item.relPath.toLowerCase()}#sec-${sectionIdx - 1}`, docChunk);
        }
      } catch (err) {
        console.error(`[DocsSearchEngine] Error parsing ${item.relPath}:`, err);
      }
    }

    this.searchEngine.addAll(chunks);
    this.isInitialized = true;
    console.error(`[DocsSearchEngine] Indexed ${chunks.length} chunks across ${this.topicsList.length} topics.`);
  }

  public reindex(): void {
    this.init();
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
      const normalizedRelPath = String(r.relPath || "").replace(/\\/g, "/");
      return {
        score: r.score,
        chunkId: r.id,
        topic: r.topic,
        section: r.section,
        relPath: normalizedRelPath,
        docUrl: `/doc/${normalizedRelPath}`,
        category: r.category,
        tags: rawTags,
        snippet: extractSmartSnippet(r.content, query, 320),
      };
    });
  }

  public getChunk(chunkIdOrQuery: string): { found: boolean; chunk?: DocChunk } {
    const q = chunkIdOrQuery.toLowerCase().trim();
    if (this.chunksMap.has(q)) {
      return { found: true, chunk: this.chunksMap.get(q) };
    }

    // Fuzzy matching by chunk ID prefix or topic
    for (const [key, chunk] of this.chunksMap.entries()) {
      if (key.includes(q) || chunk.id.toLowerCase().includes(q)) {
        return { found: true, chunk };
      }
    }

    return { found: false };
  }

  public readBatch(pathsOrTopics: string[]): Array<{ pathOrTopic: string; found: boolean; content?: string; relPath?: string }> {
    return pathsOrTopics.map((p) => {
      const doc = this.getDoc(p);
      return {
        pathOrTopic: p,
        found: doc.found,
        relPath: doc.relPath,
        content: doc.content,
      };
    });
  }

  public exportReport(queryOrTopics?: string | string[], limit: number = 5): { title: string; totalDocs: number; markdown: string } {
    let docsToInclude: Array<{ topic: string; relPath: string; content: string }> = [];

    if (Array.isArray(queryOrTopics) && queryOrTopics.length > 0) {
      for (const item of queryOrTopics) {
        const doc = this.getDoc(item);
        if (doc.found && doc.content) {
          docsToInclude.push({
            topic: item,
            relPath: doc.relPath || item,
            content: doc.content,
          });
        }
      }
    } else if (typeof queryOrTopics === "string" && queryOrTopics.trim()) {
      const searchRes = this.search(queryOrTopics, limit);
      const seenPaths = new Set<string>();
      for (const hit of searchRes) {
        if (!seenPaths.has(hit.relPath)) {
          seenPaths.add(hit.relPath);
          const doc = this.getDoc(hit.relPath);
          if (doc.found && doc.content) {
            docsToInclude.push({
              topic: hit.topic,
              relPath: hit.relPath,
              content: doc.content,
            });
          }
        }
      }
    }

    if (docsToInclude.length === 0) {
      return {
        title: "cc-common Documentation Export",
        totalDocs: 0,
        markdown: "# ⚠️ No matching documentation found for export.",
      };
    }

    const title = typeof queryOrTopics === "string" ? `Knowledge Report: ${queryOrTopics}` : "cc-common Bundled Documentation Report";
    let md = `# 📚 ${title}\n\n`;
    md += `> **Generated from cc-common Knowledge Base**  \n`;
    md += `> **Total Included Documents**: ${docsToInclude.length}  \n`;
    md += `> **Export Timestamp**: ${new Date().toISOString()}\n\n`;
    md += `## 📑 Table of Contents\n\n`;

    docsToInclude.forEach((doc, idx) => {
      md += `${idx + 1}. [${doc.topic}](#doc-${idx + 1}) \`(${doc.relPath})\`\n`;
    });
    md += `\n---\n\n`;

    docsToInclude.forEach((doc, idx) => {
      md += `<a id="doc-${idx + 1}"></a>\n\n`;
      md += `<!-- ========================================== -->\n`;
      md += `<!-- Document ${idx + 1}/${docsToInclude.length}: ${doc.relPath} -->\n`;
      md += `<!-- ========================================== -->\n\n`;
      md += `${doc.content}\n\n`;
      md += `---\n\n`;
    });

    return {
      title,
      totalDocs: docsToInclude.length,
      markdown: md,
    };
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
