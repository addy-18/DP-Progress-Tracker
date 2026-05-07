var fs = require('fs');
var raw = fs.readFileSync('src/data.js', 'utf8');
var m = raw.match(/export const SECTIONS = ([\s\S]+);/);
var S = JSON.parse(m[1]);
var all = [];
S.forEach(function(s) {
  s.subs.forEach(function(sub) {
    sub.problems.forEach(function(p) { all.push(p); });
  });
});
console.log('Total problems: ' + all.length);

// Find short/bad names
var bad = all.filter(function(p) { return p.name.trim().length <= 4; });
console.log('Short names (<=4 chars): ' + bad.length);
bad.forEach(function(p) { console.log('  ' + p.id + ' => "' + p.name + '" [' + p.p + ']'); });

// Find problems that are just numbers
var numOnly = all.filter(function(p) { return /^\s*#?\d+\s*(·\s*)?$/.test(p.name); });
console.log('\nNumber-only names: ' + numOnly.length);
numOnly.forEach(function(p) { console.log('  ' + p.id + ' => "' + p.name + '"'); });

// Count non-LC with non-google links
var nonLC = all.filter(function(p) { return p.p !== 'LC'; });
console.log('\nNon-LC problems: ' + nonLC.length);
var hasGfgUrl = nonLC.filter(function(p) { return p.url.indexOf('geeksforgeeks') >= 0; });
console.log('  with GFG URLs: ' + hasGfgUrl.length);
var hasCfUrl = nonLC.filter(function(p) { return p.url.indexOf('codeforces') >= 0; });
console.log('  with CF URLs: ' + hasCfUrl.length);
var hasSpojUrl = nonLC.filter(function(p) { return p.url.indexOf('spoj') >= 0; });
console.log('  with SPOJ URLs: ' + hasSpojUrl.length);
var hasGoogleUrl = nonLC.filter(function(p) { return p.url.indexOf('google.com') >= 0; });
console.log('  with Google search URLs: ' + hasGoogleUrl.length);

// Show last 15 problems
console.log('\n--- Last 15 problems ---');
all.slice(-15).forEach(function(p) {
  console.log('  "' + p.name + '" [' + p.p + '] ' + p.url.substring(0, 70));
});
