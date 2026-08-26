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
  codeSymbols: string;
  section: string;
  content: string;
  chunkIndex?: number;
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

/**
 * Code-Aware Multi-Identifier Tokenizer
 * Splits camelCase, PascalCase, snake_case, and CONSTANT_CASE while preserving exact identifiers.
 */
function codeTokenizer(text: string): string[] {
  if (!text) return [];
  const tokens = new Set<string>();
  
  // 1. Standard whitespace and symbol delimiter splitting
  const rawWords = text.split(/[\s,.;:!?()[\]{}<>"'`\\/|~@#$%^&*+=_-]+/);
  for (const word of rawWords) {
    if (!word) continue;
    tokens.add(word.toLowerCase());

    // 2. Split camelCase / PascalCase
    const subParts = word.replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(" ");
    if (subParts.length > 1) {
      for (const sp of subParts) {
        if (sp) tokens.add(sp.toLowerCase());
      }
    }
  }
  return Array.from(tokens);
}

export class DocsSearchEngine implements IEngine {
  private searchEngine: MiniSearch<DocChunk> | null = null;
  private topicsList: TopicInfo[] = [];
  private chunksMap: Map<string, DocChunk> = new Map();
  private fileChunksList: Map<string, DocChunk[]> = new Map();
  private isInitialized = false;

  constructor(private docsDir: string = CONFIG.DOCS_DIR) {}

  public init(): void {
    if (!fs.existsSync(this.docsDir)) {
      fs.mkdirSync(this.docsDir, { recursive: true });
    }

    this.searchEngine = new MiniSearch<DocChunk>({
      fields: ["codeSymbols", "topic", "section", "tags", "methods", "content"],
      storeFields: ["id", "file", "relPath", "topic", "section", "content", "category", "tags", "methods", "codeSymbols"],
      tokenize: codeTokenizer,
      searchOptions: {
        boost: {
          codeSymbols: 5.0,
          section: 4.0,
          topic: 3.5,
          tags: 2.5,
          methods: 2.0,
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
        const fileChunks: DocChunk[] = [];

        for (const sec of sections) {
          const secMatch = sec.match(/^##\s+(.+)$/m);
          const sectionTitle = secMatch ? secMatch[1].trim() : "Overview";
          const chunkId = `${topicId}#sec-${sectionIdx}`;

          // Extract code symbols (backticks and method signatures)
          const codeSymbolMatches = Array.from(sec.matchAll(/`([a-zA-Z0-9_$]+(?:\.[a-zA-Z0-9_$]+)*)`/g)).map(m => m[1]);
          const combinedCodeSymbols = Array.from(new Set([...allMethods, ...classMatches, ...codeSymbolMatches])).join(" ");

          const docChunk: DocChunk = {
            id: chunkId,
            file: item.fileName,
            relPath: item.relPath,
            topic: title,
            category,
            tags: tags.join(" "),
            methods: allMethods.join(" "),
            codeSymbols: combinedCodeSymbols,
            section: sectionTitle,
            content: sec.trim(),
            chunkIndex: sectionIdx,
          };

          chunks.push(docChunk);
          fileChunks.push(docChunk);
          this.chunksMap.set(chunkId.toLowerCase(), docChunk);
          this.chunksMap.set(`${item.relPath.toLowerCase()}#sec-${sectionIdx}`, docChunk);
          sectionIdx++;
        }

        this.fileChunksList.set(item.relPath.toLowerCase(), fileChunks);
        this.fileChunksList.set(topicId.toLowerCase(), fileChunks);
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
        topic: r.topic,
        section: r.section,
        relPath: normalizedRelPath,
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

    // Matching by chunk ID prefix or topic
    for (const [key, chunk] of this.chunksMap.entries()) {
      if (key.includes(q) || chunk.id.toLowerCase().includes(q)) {
        return { found: true, chunk };
      }
    }

    return { found: false };
  }

  /**
   * Contextual Sliding-Window Chunker
   * Returns center chunk plus surrounding context chunks (windowSize = 1 gives previous, center, next)
   */
  public readChunk(relPathOrId: string, chunkIndex?: number, windowSize: number = 1): {
    found: boolean;
    relPath?: string;
    chunkIndex?: number;
    totalChunks?: number;
    centerChunk?: DocChunk;
    contextChunks?: DocChunk[];
    combinedMarkdown?: string;
  } {
    // 1. If chunkId provided directly (e.g. "SlotReel#sec-2")
    if (relPathOrId.includes("#sec-")) {
      const [pathPart, secPart] = relPathOrId.split("#sec-");
      const parsedIdx = parseInt(secPart, 10);
      return this.readChunk(pathPart, isNaN(parsedIdx) ? 0 : parsedIdx, windowSize);
    }

    const key = relPathOrId.toLowerCase().replace(/\\/g, "/");
    let fileChunks = this.fileChunksList.get(key);
    
    if (!fileChunks) {
      for (const [k, list] of this.fileChunksList.entries()) {
        if (k.endsWith(key) || k.includes(key)) {
          fileChunks = list;
          break;
        }
      }
    }

    if (!fileChunks || fileChunks.length === 0) {
      return { found: false };
    }

    const targetIdx = chunkIndex !== undefined ? Math.max(0, Math.min(fileChunks.length - 1, chunkIndex)) : 0;
    const startIdx = Math.max(0, targetIdx - windowSize);
    const endIdx = Math.min(fileChunks.length - 1, targetIdx + windowSize);

    const contextChunks = fileChunks.slice(startIdx, endIdx + 1);
    const centerChunk = fileChunks[targetIdx];

    const combinedMarkdown = contextChunks.map((c) => `<!-- Chunk ${c.chunkIndex}/${fileChunks.length - 1}: ${c.section} -->\n${c.content}`).join("\n\n---\n\n");

    return {
      found: true,
      relPath: centerChunk.relPath,
      chunkIndex: targetIdx,
      totalChunks: fileChunks.length,
      centerChunk,
      contextChunks,
      combinedMarkdown,
    };
  }

  public searchTopic(tierOrCategory: string, limit: number = 20): TopicInfo[] {
    const q = tierOrCategory.toLowerCase().trim();
    return this.topicsList
      .filter(t => 
        t.relPath.toLowerCase().includes(q) || 
        t.category.toLowerCase().includes(q) || 
        t.tags.some(tg => tg.toLowerCase().includes(q))
      )
      .slice(0, limit);
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
    if (!topicOrRelPath) return { found: false };

    const normalizedInput = topicOrRelPath.trim().replace(/\\/g, "/");
    const cleanLower = normalizedInput.toLowerCase();
    const cleanNoExt = cleanLower.replace(/\.md$/, "");

    // 1. Match by exact or normalized relPath, topic id, file name, or title
    const topic = this.topicsList.find(t => {
      const tRel = t.relPath.toLowerCase().replace(/\\/g, "/");
      const tRelNoExt = tRel.replace(/\.md$/, "");
      const tFile = t.file.toLowerCase();
      const tFileNoExt = tFile.replace(/\.md$/, "");
      const tId = t.id.toLowerCase();
      const tTitle = t.title.toLowerCase();

      return (
        tRel === cleanLower ||
        tRelNoExt === cleanNoExt ||
        tRel.endsWith(cleanLower) ||
        tRel.endsWith("/" + cleanLower) ||
        tId === cleanLower ||
        tId === cleanNoExt ||
        tFile === cleanLower ||
        tFileNoExt === cleanNoExt ||
        tTitle === cleanLower
      );
    });

    if (topic) {
      const fullPath = path.isAbsolute(topic.relPath)
        ? topic.relPath
        : path.join(this.docsDir, topic.relPath);
      if (fs.existsSync(fullPath)) {
        return {
          found: true,
          relPath: topic.relPath.replace(/\\/g, "/"),
          content: fs.readFileSync(fullPath, "utf8"),
        };
      }
    }

    // 2. Fallback: Direct file system check in docsDir
    const candidatePaths = [
      path.join(this.docsDir, normalizedInput),
      path.join(this.docsDir, `${normalizedInput}.md`),
      path.resolve(this.docsDir, normalizedInput),
      path.resolve(this.docsDir, `${normalizedInput}.md`),
    ];

    for (const p of candidatePaths) {
      if (fs.existsSync(p) && fs.statSync(p).isFile()) {
        const rel = path.relative(this.docsDir, p).replace(/\\/g, "/");
        return {
          found: true,
          relPath: rel,
          content: fs.readFileSync(p, "utf8"),
        };
      }
    }

    // 3. Fallback: Search by partial file name across topicsList
    const fallbackTopic = this.topicsList.find(t =>
      t.file.toLowerCase().includes(cleanNoExt) ||
      t.relPath.toLowerCase().replace(/\\/g, "/").includes(cleanNoExt)
    );

    if (fallbackTopic) {
      const fullPath = path.join(this.docsDir, fallbackTopic.relPath);
      if (fs.existsSync(fullPath)) {
        return {
          found: true,
          relPath: fallbackTopic.relPath.replace(/\\/g, "/"),
          content: fs.readFileSync(fullPath, "utf8"),
        };
      }
    }

    return { found: false };
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
