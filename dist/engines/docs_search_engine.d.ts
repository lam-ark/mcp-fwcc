import { IEngine } from "../core/types.js";
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
export declare class DocsSearchEngine implements IEngine {
    private docsDir;
    private searchEngine;
    private topicsList;
    private isInitialized;
    constructor(docsDir?: string);
    init(): void;
    search(query: string, limit?: number, category?: string): {
        score: any;
        topic: any;
        section: any;
        relPath: any;
        category: any;
        snippet: string;
    }[];
    listTopics(category?: string): TopicInfo[];
    getDoc(topicOrRelPath: string): {
        found: boolean;
        relPath?: string;
        content?: string;
    };
    getClassApi(className: string): {
        found: boolean;
        topic?: TopicInfo;
        content?: string;
    };
}
