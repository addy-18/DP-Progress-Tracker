var fs = require('fs');

// Read existing data to preserve URLs from old JSX
var existingUrls = {};
var existingPlatform = {};
try {
  var oldJSX = fs.readFileSync('DP_Progress_Tracker.jsx', 'utf8');
  var regex = /(lc|gfg|cf|ga|spoj)\((.*?)\)/g;
  var match;
  while ((match = regex.exec(oldJSX)) !== null) {
    var type = match[1];
    var args = match[2].split(',').map(function(s) { return s.trim().replace(/^"|"$/g, ''); });
    if (type === 'lc' && args.length >= 4) {
      existingUrls[args[1]] = 'https://leetcode.com/problems/' + args[2] + '/';
      existingPlatform[args[1]] = 'LC';
    } else if (type === 'gfg' && args.length >= 4) {
      existingUrls[args[1]] = 'https://www.geeksforgeeks.org/problems/' + args[2] + '/1';
      existingPlatform[args[1]] = 'GFG';
    } else if (type === 'cf' && args.length >= 5) {
      existingUrls[args[1]] = 'https://codeforces.com/problemset/problem/' + args[2] + '/' + args[3];
      existingPlatform[args[1]] = 'CF';
    } else if (type === 'spoj' && args.length >= 4) {
      existingUrls[args[1]] = 'https://www.spoj.com/problems/' + args[2] + '/';
      existingPlatform[args[1]] = 'SPOJ';
    } else if (type === 'ga' && args.length >= 4) {
      existingUrls[args[1]] = args[2];
      existingPlatform[args[1]] = 'GFG';
    }
  }
} catch (e) {
  console.log('Note: Could not read old JSX for URL migration:', e.message);
}

var md = fs.readFileSync('DP_Master_Problem_Set.md', 'utf8');
var sections = [];
var currentSection = null;
var currentSub = null;
var lines = md.split('\n');

var PLAT_COLORS = [
  '#00ff88', '#00d4ff', '#ff6b35', '#ff4757', '#ffd32a',
  '#7bed9f', '#a29bfe', '#fd79a8', '#e17055', '#55efc4',
  '#fdcb6e', '#6c5ce7', '#fab1a0', '#74b9ff', '#00cec9',
  '#b2bec3', '#ff4500', '#e84393', '#a29bfe', '#fddb4e'
];

var secIndex = 0;
var inTable = false;

for (var i = 0; i < lines.length; i++) {
  var line = lines[i].trim();

  // Detect numbered section headers: ## 1. ... through ## 20. ...
  if (line.startsWith('## ') && /^## \d+\./.test(line)) {
    var title = line.replace('## ', '');
    currentSection = {
      id: 's' + (++secIndex),
      title: title,
      color: PLAT_COLORS[(secIndex - 1) % PLAT_COLORS.length],
      subs: []
    };
    sections.push(currentSection);
    inTable = false;
  }
  // STOP PARSING at the summary table or any non-numbered ## heading
  else if (line.startsWith('## ') && !/^## \d+\./.test(line)) {
    // This is "## 📊 Summary" or "## 💡 Key Mindset Tips" etc.
    // Stop parsing problems entirely
    currentSection = null;
    currentSub = null;
    inTable = false;
  }
  else if (line.startsWith('### ')) {
    if (currentSection) {
      currentSub = {
        id: currentSection.id + 'sub' + (currentSection.subs.length + 1),
        title: line.replace('### ', ''),
        problems: []
      };
      currentSection.subs.push(currentSub);
      inTable = false;
    }
  }
  else if (line.startsWith('| # |') || line.startsWith('|---|')) {
    inTable = true;
  }
  else if (inTable && line.startsWith('|') && currentSub) {
    var cols = line.split('|').map(function(s) { return s.trim(); });
    // cols[0] is empty (before first |), cols[1]=#, cols[2]=name, cols[3]=platform, cols[4]=difficulty
    if (cols.length >= 5 && cols[1] !== '#' && cols[1] !== '---') {
      var num = cols[1];
      var problemName = cols[2];
      var platRaw = cols[3];
      var diff = cols[4];

      // Skip rows where problem name is empty or just a number
      if (!problemName || /^\d+$/.test(problemName.trim())) {
        continue;
      }

      // Determine platform
      var p = 'Other';
      if (/leetcode|lc\b/i.test(platRaw)) {
        p = 'LC';
      } else if (/gfg|geeks/i.test(platRaw)) {
        p = 'GFG';
      } else if (/codeforces|cf\b/i.test(platRaw)) {
        p = 'CF';
      } else if (/spoj/i.test(platRaw)) {
        p = 'SPOJ';
      } else if (/usaco/i.test(platRaw)) {
        p = 'USACO';
      } else if (/poj/i.test(platRaw)) {
        p = 'POJ';
      } else if (/ioi/i.test(platRaw)) {
        p = 'IOI';
      }

      // Build URL
      var url;

      // For LeetCode: try to build a direct link from the slug
      if (p === 'LC') {
        // Check if we have a saved URL from the old JSX
        var lcMatch = Object.keys(existingUrls).find(function(k) {
          return existingPlatform[k] === 'LC' && (k === problemName || k.indexOf(problemName) >= 0 || problemName.indexOf(k) >= 0);
        });
        if (lcMatch) {
          url = existingUrls[lcMatch];
        } else {
          // Generate slug from name
          var slug = problemName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          url = 'https://leetcode.com/problems/' + slug + '/';
        }
      } else {
        // For ALL non-LeetCode platforms: use Google search
        // This ensures links always work regardless of platform URL structure
        var searchQuery = problemName + ' ' + p + ' solution';
        url = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
      }

      // Build display name (include LC# if present in platform column)
      var finalName = problemName;
      if (p === 'LC' && /#(\d+)/.test(platRaw)) {
        var idMatch = platRaw.match(/#(\d+)/);
        if (idMatch) finalName = '#' + idMatch[1] + ' · ' + problemName;
      }

      currentSub.problems.push({
        id: currentSub.id + '-p' + (currentSub.problems.length + 1),
        name: finalName,
        p: p,
        d: diff,
        url: url
      });
    }
  }
  else if (line === '') {
    inTable = false;
  }
}

// Write the data file
fs.writeFileSync('src/data.js', 'export const SECTIONS = ' + JSON.stringify(sections, null, 2) + ';\n');

// Print summary
var totalProblems = 0;
sections.forEach(function(s) {
  var count = 0;
  s.subs.forEach(function(sub) { count += sub.problems.length; });
  totalProblems += count;
  console.log('  ' + s.title + ': ' + count + ' problems');
});
console.log('\nTotal: ' + sections.length + ' sections, ' + totalProblems + ' problems');
