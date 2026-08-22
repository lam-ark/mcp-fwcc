export interface ScannedDocFile {
    fullPath: string;
    relPath: string;
    fileName: string;
    categoryHint: string;
}
export declare function scanMarkdownFiles(dir: string, baseDir?: string): ScannedDocFile[];
