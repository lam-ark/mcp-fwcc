import * as fs from "fs";
import * as path from "path";

export interface ScannedDocFile {
  fullPath: string;
  relPath: string;
  fileName: string;
  categoryHint: string;
}

const SYSTEM_DOC_FILES = ["CONVENTION.MD", "ARCHITECTURE.MD", "README.MD"];

export function scanMarkdownFiles(dir: string, baseDir: string = dir): ScannedDocFile[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results: ScannedDocFile[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(scanMarkdownFiles(fullPath, baseDir));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const upperName = entry.name.toUpperCase();
      if (SYSTEM_DOC_FILES.includes(upperName) || entry.name.startsWith("_")) {
        continue;
      }

      const relPath = path.relative(baseDir, fullPath).replace(/\\/g, "/");
      const dirName = path.dirname(relPath);
      const categoryHint = dirName !== "." ? dirName.replace(/^\d+_/, "") : "general";

      results.push({
        fullPath,
        relPath,
        fileName: entry.name,
        categoryHint,
      });
    }
  }

  return results;
}
