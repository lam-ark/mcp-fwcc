const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '../../..');
const srcRoot = path.join(projectRoot, 'assets', 'cc-common');
const docsRoot = path.join(__dirname, '..', 'docs');

if (!fs.existsSync(docsRoot)) fs.mkdirSync(docsRoot, { recursive: true });

const modules = [
  'cc-core-lib',
  'cc-network',
  'cc-slot-module',
  'cc-slot-mechanics',
  'cc-slot-features'
];

let totalDocs = 0;

modules.forEach(mod => {
  const modPath = path.join(srcRoot, mod);
  if (!fs.existsSync(modPath)) return;

  const targetDir = path.join(docsRoot, mod.replace(/-/g, '_'));
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  function scan(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const full = path.join(dir, f);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        scan(full);
      } else if (f.endsWith('.ts') && !f.endsWith('.d.ts')) {
        const content = fs.readFileSync(full, 'utf8');
        const docName = f.replace('.ts', '.md');
        const relPath = path.relative(projectRoot, full).replace(/\\/g, '/');
        
        const classMatches = [...content.matchAll(/class\s+(\w+)(?:\s+extends\s+(\w+))?/g)];
        const propMatches = [...content.matchAll(/@property\([^)]*\)\s+(\w+)/g)];
        const methodMatches = [...content.matchAll(/(?:public|protected|private|override)?\s*(\w+)\s*\([^)]*\)\s*:\s*([^\{\n;]+)/g)];

        let md = '# ' + f.replace('.ts', '') + '\n\n';
        md += '> **Source Path**: `' + relPath + '`\n\n';
        md += '## Overview\n';
        md += `TypeScript module from \`cc-common/${mod}\`.\n\n`;
        
        if (classMatches.length > 0) {
          md += '## Classes\n';
          classMatches.forEach(m => {
            md += `- **\`${m[1]}\`**${m[2] ? ' extends `' + m[2] + '`' : ''}\n`;
          });
          md += '\n';
        }

        if (propMatches.length > 0) {
          md += '## CC Properties\n';
          propMatches.forEach(p => {
            md += `- \`${p[1]}\`\n`;
          });
          md += '\n';
        }

        if (methodMatches.length > 0) {
          md += '## Key Methods\n';
          methodMatches.slice(0, 15).forEach(m => {
            if (!['constructor', 'if', 'for', 'switch', 'while'].includes(m[1])) {
              md += `- \`${m[1]}(): ${m[2].trim()}\`\n`;
            }
          });
          md += '\n';
        }

        md += '## Source Implementation\n```typescript\n';
        md += content + '\n```\n';

        fs.writeFileSync(path.join(targetDir, docName), md);
        totalDocs++;
      }
    }
  }

  scan(modPath);
});

console.log(`Successfully generated ${totalDocs} Markdown documents across all cc-common modules!`);
