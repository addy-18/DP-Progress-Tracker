const fs = require('fs');

// Read existing data to preserve URLs
let existingUrls = {};
let existingPlatform = {};
try {
  // Use regex to extract all objects from old DP_Progress_Tracker.jsx
  const oldJSX = fs.readFileSync('DP_Progress_Tracker.jsx', 'utf8');
  
  // Extract all lc(), gfg(), cf(), ga(), spoj() calls to build a map.
  // lc(509,"Fibonacci Number","fibonacci-number","Easy")
  const regex = /(lc|gfg|cf|ga|spoj)\((.*?)\)/g;
  let match;
  while ((match = regex.exec(oldJSX)) !== null) {
    const type = match[1];
    const args = match[2].split(',').map(s => s.trim().replace(/^"|"$/g, ''));
    
    if (type === 'lc' && args.length >= 4) {
      const num = args[0];
      const name = args[1].replace(/^#\d+\s*·\s*/, '');
      const slug = args[2];
      existingUrls[name] = `https://leetcode.com/problems/${slug}/`;
      existingPlatform[name] = "LC";
    } else if (type === 'gfg' && args.length >= 4) {
      const name = args[1];
      const slug = args[2];
      existingUrls[name] = `https://www.geeksforgeeks.org/problems/${slug}/1`;
      existingPlatform[name] = "GFG";
    } else if (type === 'cf' && args.length >= 5) {
      const name = args[1];
      const contest = args[2];
      const letter = args[3];
      existingUrls[name] = `https://codeforces.com/problemset/problem/${contest}/${letter}`;
      existingPlatform[name] = "CF";
    } else if (type === 'spoj' && args.length >= 4) {
      const name = args[1];
      const code = args[2];
      existingUrls[name] = `https://www.spoj.com/problems/${code}/`;
      existingPlatform[name] = "SPOJ";
    } else if (type === 'ga' && args.length >= 4) {
      const name = args[1];
      const href = args[2];
      existingUrls[name] = href;
      existingPlatform[name] = "GFG";
    }
  }
} catch (e) {
  console.log("Error reading old JSX", e);
}

const md = fs.readFileSync('DP_Master_Problem_Set.md', 'utf8');

const sections = [];
let currentSection = null;
let currentSub = null;

const lines = md.split('\n');

const PLAT_COLORS = [
  '#00ff88', '#00d4ff', '#ff6b35', '#ff4757', '#ffd32a', 
  '#7bed9f', '#a29bfe', '#fd79a8', '#e17055', '#55efc4', 
  '#fdcb6e', '#6c5ce7', '#fab1a0', '#74b9ff', '#00cec9', 
  '#b2bec3', '#ff4500', '#e84393', '#a29bfe', '#fddb4e'
];

let secIndex = 0;
let inTable = false;

for (let line of lines) {
  line = line.trim();
  
  if (line.startsWith('## ') && line.match(/^## \d+\./)) {
    const title = line.replace('## ', '');
    currentSection = {
      id: `s${++secIndex}`,
      title: title,
      color: PLAT_COLORS[(secIndex - 1) % PLAT_COLORS.length],
      subs: []
    };
    sections.push(currentSection);
    inTable = false;
  } else if (line.startsWith('### ')) {
    if (currentSection) {
      currentSub = {
        id: `${currentSection.id}sub${currentSection.subs.length + 1}`,
        title: line.replace('### ', ''),
        problems: []
      };
      currentSection.subs.push(currentSub);
      inTable = false;
    }
  } else if (line.startsWith('| # |') || line.startsWith('|---|')) {
    inTable = true;
  } else if (inTable && line.startsWith('|') && currentSub) {
    const cols = line.split('|').map(s => s.trim());
    if (cols.length >= 5 && cols[1] !== '#' && cols[1] !== '---') {
      const num = cols[1];
      const name = cols[2].replace(/ \([^)]+\)/g, '').trim(); // Remove parentheticals for matching
      const originalName = cols[2];
      let platRaw = cols[3];
      const diff = cols[4];
      
      let p = "Other";
      let url = `https://www.google.com/search?q=${encodeURIComponent(originalName + ' ' + platRaw)}`;
      
      if (platRaw.toLowerCase().includes('leetcode') || platRaw.toLowerCase().includes('lc')) {
        p = "LC";
        let slug = originalName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        url = `https://leetcode.com/problems/${slug}/`;
      } else if (platRaw.toLowerCase().includes('gfg') || platRaw.toLowerCase().includes('geeks')) {
        p = "GFG";
        let slug = originalName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        url = `https://www.geeksforgeeks.org/problems/${slug}/1`;
      } else if (platRaw.toLowerCase().includes('codeforces') || platRaw.toLowerCase().includes('cf')) {
        p = "CF";
      } else if (platRaw.toLowerCase().includes('spoj')) {
        p = "SPOJ";
      } else if (platRaw.toLowerCase().includes('usaco')) {
        p = "USACO";
      } else if (platRaw.toLowerCase().includes('poj')) {
        p = "POJ";
      } else if (platRaw.toLowerCase().includes('ioi')) {
        p = "IOI";
      }
      
      // Try to match existing URL
      let matchedName = Object.keys(existingUrls).find(k => k === originalName || k.includes(name) || name.includes(k));
      if (matchedName) {
        url = existingUrls[matchedName];
        p = existingPlatform[matchedName] || p;
      }
      
      let finalName = originalName;
      if (platRaw.includes('#')) {
        const idMatch = platRaw.match(/#(\d+)/);
        if (idMatch) finalName = `#${idMatch[1]} · ${originalName}`;
      }

      currentSub.problems.push({
        id: `${currentSub.id}-p${currentSub.problems.length + 1}`,
        name: finalName,
        p: p,
        d: diff,
        url: url
      });
    }
  } else if (line === '') {
    inTable = false;
  }
}

fs.writeFileSync('src/data.js', `export const SECTIONS = ${JSON.stringify(sections, null, 2)};\n`);
console.log(`Generated ${sections.length} sections. Total problems: ${sections.reduce((acc, s) => acc + s.subs.reduce((acc2, sub) => acc2 + sub.problems.length, 0), 0)}`);
