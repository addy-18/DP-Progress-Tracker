const fs = require('fs');
const content = fs.readFileSync('DP_Progress_Tracker.jsx', 'utf8');
const match = content.match(/(const lc =[\s\S]+?)\];/);
if (match) {
  fs.writeFileSync('src/data.js', match[1] + '];\nexport { SECTIONS };\n');
} else {
  console.log("No match found");
}
