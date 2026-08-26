---
id: "cc_slot_mechanics:systems:ways_and_grid:cluster_pay"
title: "Cluster Pay BFS Orthogonal Grouping Engine"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "cluster_pay", "bfs_search", "flood_fill", "connected_components"]
---

# 🧩 Cluster Pay BFS Orthogonal Grouping Engine

---

## 1. Orthogonal Connected-Component Search (BFS)

Cluster pay slots (e.g. $7\times 7$ grids) evaluate wins by finding connected groups of matching adjacent symbols sharing horizontal or vertical edges:

```typescript
function findClusters(matrix: string[][], minSize = 4): ClusterResult[] {
    const cols = matrix.length;
    const rows = matrix[0].length;
    const visited = Array.from({ length: cols }, () => Array(rows).fill(false));
    const clusters: ClusterResult[] = [];

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // Up, Down, Right, Left

    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            if (visited[c][r] || isBlocker(matrix[c][r])) continue;
            
            const symbol = matrix[c][r];
            const queue: [number, number][] = [[c, r]];
            const currentCluster: [number, number][] = [];
            visited[c][r] = true;

            while (queue.length > 0) {
                const [currC, currR] = queue.shift()!;
                currentCluster.push([currC, currR]);

                for (const [dc, dr] of directions) {
                    const nc = currC + dc;
                    const nr = currR + dr;
                    if (nc >= 0 && nc < cols && nr >= 0 && nr < rows && !visited[nc][nr]) {
                        if (matrix[nc][nr] === symbol || isWild(matrix[nc][nr])) {
                            visited[nc][nr] = true;
                            queue.push([nc, nr]);
                        }
                    }
                }
            }

            if (currentCluster.length >= minSize) {
                clusters.push({ symbol, cells: currentCluster, count: currentCluster.length });
            }
        }
    }
    return clusters;
}
```
