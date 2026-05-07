import { useState, useEffect, useMemo } from "react";

// ─── DATA HELPERS ─────────────────────────────────────────────────────────────
const lc = (num, name, slug, diff) => ({
  id: `lc${num}`, name: `#${num} · ${name}`, p: "LC", d: diff,
  url: `https://leetcode.com/problems/${slug}/`
});
const cf = (tag, name, contest, letter, rating) => ({
  id: `cf-${tag}`, name, p: "CF", d: `CF ${rating}`,
  url: `https://codeforces.com/problemset/problem/${contest}/${letter}`
});
const gfg = (tag, name, slug, diff) => ({
  id: `gfg-${tag}`, name, p: "GFG", d: diff,
  url: `https://www.geeksforgeeks.org/problems/${slug}/1`
});
const ga = (tag, name, href, diff) => ({
  id: `ga-${tag}`, name, p: "GFG", d: diff, url: href
});
const spoj = (tag, name, code, diff) => ({
  id: `spoj-${tag}`, name, p: "SPOJ", d: diff,
  url: `https://www.spoj.com/problems/${code}/`
});

// ─── PROBLEM DATA ─────────────────────────────────────────────────────────────
const SECTIONS = [
  // ── 1. 1D DP ──────────────────────────────────────────────────────────────
  {
    id: "s1", title: "1. 1D DP (Linear)", color: "#00ff88",
    subs: [
      { id:"s1a", title:"1.1 Fibonacci / Climbing Stairs", problems:[
        lc(509,"Fibonacci Number","fibonacci-number","Easy"),
        lc(70,"Climbing Stairs","climbing-stairs","Easy"),
        lc(1137,"N-th Tribonacci Number","n-th-tribonacci-number","Easy"),
        lc(746,"Min Cost Climbing Stairs","min-cost-climbing-stairs","Easy"),
        gfg("frog1","Frog Jump (1 or 2 steps)","frog-jump/1","Easy"),
        gfg("climb3","Climb n Stairs (1,2,3 steps)","count-ways-to-reach-nth-stair/1","Easy"),
        ga("tiling2n","Tiling 2×N with Dominoes","https://www.geeksforgeeks.org/tiling-problem/","Medium"),
        lc(790,"Domino and Tromino Tiling","domino-and-tromino-tiling","Medium"),
        lc(1269,"Ways to Stay in Same Place","number-of-ways-to-stay-in-the-same-place-after-some-steps","Hard"),
      ]},
      { id:"s1b", title:"1.2 Max/Min Subarray & Stock", problems:[
        lc(53,"Maximum Subarray (Kadane's)","maximum-subarray","Medium"),
        lc(152,"Maximum Product Subarray","maximum-product-subarray","Medium"),
        lc(121,"Best Time to Buy & Sell Stock","best-time-to-buy-and-sell-stock","Easy"),
        lc(122,"Best Time to Buy & Sell Stock II","best-time-to-buy-and-sell-stock-ii","Medium"),
        lc(123,"Best Time to Buy & Sell Stock III","best-time-to-buy-and-sell-stock-iii","Hard"),
        lc(188,"Best Time to Buy & Sell Stock IV","best-time-to-buy-and-sell-stock-iv","Hard"),
        lc(309,"Stock with Cooldown","best-time-to-buy-and-sell-stock-with-cooldown","Medium"),
        lc(714,"Stock with Transaction Fee","best-time-to-buy-and-sell-stock-with-transaction-fee","Medium"),
        lc(918,"Max Sum Circular Subarray","maximum-sum-circular-subarray","Medium"),
        lc(689,"Max Sum 3 Non-Overlapping Subarrays","maximum-sum-of-3-non-overlapping-subarrays","Hard"),
      ]},
      { id:"s1c", title:"1.3 LIS Variants", problems:[
        lc(300,"Longest Increasing Subsequence","longest-increasing-subsequence","Medium"),
        lc(673,"Number of LIS","number-of-longest-increasing-subsequence","Medium"),
        lc(334,"Increasing Triplet Subsequence","increasing-triplet-subsequence","Medium"),
        gfg("lbs","Longest Bitonic Subsequence","longest-bitonic-subsequence/1","Medium"),
        gfg("lcp","Longest Chain of Pairs","longest-chain-of-pairs/1","Medium"),
        lc(354,"Russian Doll Envelopes","russian-doll-envelopes","Hard"),
        lc(1691,"Max Height by Stacking Cuboids","maximum-height-by-stacking-cuboids","Hard"),
        lc(1964,"Longest Valid Obstacle Course","find-the-longest-valid-obstacle-course-at-each-position","Hard"),
        lc(1671,"Min Removals for Mountain Array","minimum-number-of-removals-to-make-mountain-array","Hard"),
      ]},
      { id:"s1d", title:"1.4 House Robber Variants", problems:[
        lc(198,"House Robber","house-robber","Medium"),
        lc(213,"House Robber II (Circular)","house-robber-ii","Medium"),
        lc(337,"House Robber III (Tree)","house-robber-iii","Medium"),
        lc(740,"Delete and Earn","delete-and-earn","Medium"),
        lc(376,"Wiggle Subsequence","wiggle-subsequence","Medium"),
        lc(91,"Decode Ways","decode-ways","Medium"),
        lc(639,"Decode Ways II","decode-ways-ii","Hard"),
        gfg("rob-chain","Max Money from Chain of Banks","maximum-sum-of-non-adjacent-elements/1","Medium"),
      ]},
      { id:"s1e", title:"1.5 Jump Game Variants", problems:[
        lc(55,"Jump Game","jump-game","Medium"),
        lc(45,"Jump Game II","jump-game-ii","Medium"),
        lc(1306,"Jump Game III","jump-game-iii","Medium"),
        lc(1345,"Jump Game IV","jump-game-iv","Hard"),
        lc(1340,"Jump Game V","jump-game-v","Hard"),
        lc(1696,"Jump Game VI","jump-game-vi","Medium"),
        lc(1871,"Jump Game VII","jump-game-vii","Medium"),
        lc(403,"Frog Jump (variable k)","frog-jump","Hard"),
        lc(1928,"Min Cost to Reach Destination in Time","minimum-cost-to-reach-destination-in-time","Hard"),
      ]},
    ]
  },

  // ── 2. MULTIDIMENSIONAL DP ────────────────────────────────────────────────
  {
    id: "s2", title: "2. Multidimensional DP", color: "#00d4ff",
    subs: [
      { id:"s2a", title:"2.1 Two-Sequence DP", problems:[
        lc(1143,"Longest Common Subsequence","longest-common-subsequence","Medium"),
        lc(1092,"Shortest Common Supersequence","shortest-common-supersequence","Hard"),
        lc(72,"Edit Distance","edit-distance","Hard"),
        lc(115,"Distinct Subsequences","distinct-subsequences","Hard"),
        lc(97,"Interleaving String","interleaving-string","Medium"),
        lc(712,"Min ASCII Delete Sum","minimum-ascii-delete-sum-for-two-strings","Medium"),
        lc(1035,"Uncrossed Lines","uncrossed-lines","Medium"),
        lc(1458,"Max Dot Product of Two Subsequences","max-dot-product-of-two-subsequences","Hard"),
        lc(583,"Delete Operation for Two Strings","delete-operation-for-two-strings","Medium"),
      ]},
      { id:"s2b", title:"2.2 Stone Game Series", problems:[
        lc(877,"Stone Game","stone-game","Medium"),
        lc(1140,"Stone Game II","stone-game-ii","Medium"),
        lc(1406,"Stone Game III","stone-game-iii","Hard"),
        lc(1510,"Stone Game IV","stone-game-iv","Hard"),
        lc(1563,"Stone Game V","stone-game-v","Hard"),
        lc(1686,"Stone Game VI","stone-game-vi","Medium"),
        lc(1690,"Stone Game VII","stone-game-vii","Medium"),
        lc(1872,"Stone Game VIII","stone-game-viii","Hard"),
        lc(2029,"Stone Game IX","stone-game-ix","Medium"),
      ]},
      { id:"s2c", title:"2.3 DP with State Compression", problems:[
        lc(322,"Coin Change","coin-change","Medium"),
        lc(518,"Coin Change II","coin-change-2","Medium"),
        lc(279,"Perfect Squares","perfect-squares","Medium"),
        lc(139,"Word Break","word-break","Medium"),
        lc(140,"Word Break II","word-break-ii","Hard"),
        lc(377,"Combination Sum IV","combination-sum-iv","Medium"),
        lc(343,"Integer Break","integer-break","Medium"),
        lc(472,"Concatenated Words","concatenated-words","Hard"),
        lc(983,"Min Cost for Tickets","minimum-cost-for-tickets","Medium"),
        lc(1049,"Last Stone Weight II","last-stone-weight-ii","Medium"),
      ]},
    ]
  },

  // ── 3. GRID DP ────────────────────────────────────────────────────────────
  {
    id: "s3", title: "3. DP on Grids", color: "#ff6b35",
    subs: [
      { id:"s3a", title:"3.1 Path Counting", problems:[
        lc(62,"Unique Paths","unique-paths","Medium"),
        lc(63,"Unique Paths II","unique-paths-ii","Medium"),
        lc(2328,"Number of Increasing Paths in Grid","number-of-increasing-paths-in-a-grid","Hard"),
        gfg("grid-paths","Count All Paths (Top-Left to Bottom-Right)","count-all-paths-from-top-left-to-bottom-right/1","Medium"),
        gfg("grid-xor","Count Paths with Given XOR Value","path-with-given-xor-value/1","Medium"),
      ]},
      { id:"s3b", title:"3.2 Min/Max Cost Path", problems:[
        lc(64,"Minimum Path Sum","minimum-path-sum","Medium"),
        lc(120,"Triangle","triangle","Medium"),
        lc(931,"Minimum Falling Path Sum","minimum-falling-path-sum","Medium"),
        lc(1289,"Min Falling Path Sum II","minimum-falling-path-sum-ii","Hard"),
        lc(174,"Dungeon Game","dungeon-game","Hard"),
        lc(741,"Cherry Pickup","cherry-pickup","Hard"),
        lc(1463,"Cherry Pickup II","cherry-pickup-ii","Hard"),
        lc(1594,"Max Non-Negative Product in Matrix","maximum-non-negative-product-in-a-matrix","Medium"),
      ]},
      { id:"s3c", title:"3.3 Special Grid Constraints", problems:[
        lc(221,"Maximal Square","maximal-square","Medium"),
        lc(1277,"Count Square Submatrices","count-square-submatrices-with-all-ones","Medium"),
        lc(85,"Maximal Rectangle","maximal-rectangle","Hard"),
        lc(764,"Largest Plus Sign","largest-plus-sign","Medium"),
        lc(1074,"Submatrices That Sum to Target","number-of-submatrices-that-sum-to-target","Hard"),
        lc(1368,"Min Cost for Valid Path in Grid","minimum-cost-to-make-at-least-one-valid-path-in-a-grid","Hard"),
      ]},
    ]
  },

  // ── 4. STRING DP ──────────────────────────────────────────────────────────
  {
    id: "s4", title: "4. DP on Strings", color: "#ff4757",
    subs: [
      { id:"s4a", title:"4.1 LCS Variations", problems:[
        lc(1143,"Longest Common Subsequence","longest-common-subsequence","Medium"),
        gfg("print-lcs","Print LCS","print-lcs0/1","Medium"),
        gfg("lcs-substr","Longest Common Substring","longest-common-substring/1","Medium"),
        gfg("scs-len","Shortest Common Supersequence (length)","shortest-common-supersequence/1","Medium"),
        lc(1092,"Shortest Common Supersequence (print)","shortest-common-supersequence","Hard"),
        gfg("lrs","Longest Repeating Subsequence","longest-repeating-subsequence/1","Medium"),
        lc(718,"Max Length of Repeated Subarray","maximum-length-of-repeated-subarray","Medium"),
        gfg("lcs3","LCS of Three Strings","lcs-of-three-strings/1","Hard"),
      ]},
      { id:"s4b", title:"4.2 Edit Distance Variations", problems:[
        lc(72,"Edit Distance","edit-distance","Hard"),
        lc(583,"Delete Operation for Two Strings","delete-operation-for-two-strings","Medium"),
        lc(712,"Min ASCII Delete Sum","minimum-ascii-delete-sum-for-two-strings","Medium"),
        lc(1347,"Min Steps to Make Two Strings Anagram","minimum-number-of-steps-to-make-two-strings-anagram","Medium"),
        lc(1312,"Min Insertions to Make Palindrome","minimum-insertion-steps-to-make-a-string-palindrome","Hard"),
        lc(1035,"Uncrossed Lines","uncrossed-lines","Medium"),
        lc(940,"Distinct Subsequences II","distinct-subsequences-ii","Hard"),
        lc(87,"Scramble String","scramble-string","Hard"),
      ]},
      { id:"s4c", title:"4.3 Palindrome DP", problems:[
        lc(5,"Longest Palindromic Substring","longest-palindromic-substring","Medium"),
        lc(516,"Longest Palindromic Subsequence","longest-palindromic-subsequence","Medium"),
        lc(647,"Count Palindromic Substrings","palindromic-substrings","Medium"),
        lc(132,"Palindrome Partitioning II (min cuts)","palindrome-partitioning-ii","Hard"),
        lc(131,"Palindrome Partitioning (all)","palindrome-partitioning","Medium"),
        lc(1312,"Min Insertions to Make Palindrome","minimum-insertion-steps-to-make-a-string-palindrome","Hard"),
        lc(730,"Count Different Palindromic Subsequences","count-different-palindromic-subsequences","Hard"),
        gfg("pal-subseq","Count of Palindromic Subsequences","count-palindromic-subsequences/1","Medium"),
      ]},
      { id:"s4d", title:"4.4 Pattern Matching DP", problems:[
        lc(10,"Regular Expression Matching","regular-expression-matching","Hard"),
        lc(44,"Wildcard Matching","wildcard-matching","Hard"),
        lc(115,"Distinct Subsequences","distinct-subsequences","Hard"),
        lc(792,"Number of Matching Subsequences","number-of-matching-subsequences","Medium"),
        lc(392,"Is Subsequence","is-subsequence","Easy"),
        lc(1048,"Longest String Chain","longest-string-chain","Medium"),
        lc(940,"Distinct Subsequences II","distinct-subsequences-ii","Hard"),
      ]},
      { id:"s4e", title:"4.5 Word/Sentence Break DP", problems:[
        lc(139,"Word Break","word-break","Medium"),
        lc(140,"Word Break II","word-break-ii","Hard"),
        lc(472,"Concatenated Words","concatenated-words","Hard"),
        lc(2707,"Extra Characters in a String","extra-characters-in-a-string","Medium"),
        lc(1520,"Max Non-Overlapping Substrings","maximum-number-of-non-overlapping-substrings","Hard"),
        lc(2266,"Count Number of Texts","count-number-of-texts","Medium"),
        lc(467,"Unique Substrings in Wraparound String","unique-substrings-in-wraparound-string","Medium"),
      ]},
    ]
  },

  // ── 5. KNAPSACK ───────────────────────────────────────────────────────────
  {
    id: "s5", title: "5. Knapsack Variations", color: "#ffd32a",
    subs: [
      { id:"s5a", title:"5.1 0/1 Knapsack", problems:[
        gfg("01ks","0/1 Knapsack","0-1-knapsack-problem/1","Medium"),
        lc(416,"Partition Equal Subset Sum","partition-equal-subset-sum","Medium"),
        lc(1049,"Last Stone Weight II","last-stone-weight-ii","Medium"),
        lc(494,"Target Sum","target-sum","Medium"),
        gfg("cnt-subset","Count of Subsets with Sum K","count-of-subsets-with-given-sum/1","Medium"),
        gfg("min-sub-diff","Min Subset Sum Difference","minimum-sum-partition/1","Medium"),
        lc(474,"Ones and Zeroes","ones-and-zeroes","Medium"),
        gfg("bool-paren","Boolean Parenthesization","boolean-parenthesization/1","Hard"),
      ]},
      { id:"s5b", title:"5.2 Unbounded Knapsack", problems:[
        gfg("unb-ks","Unbounded Knapsack","knapsack-with-duplicate-items4/1","Medium"),
        lc(322,"Coin Change (min coins)","coin-change","Medium"),
        lc(518,"Coin Change II (count ways)","coin-change-2","Medium"),
        gfg("rod-cut","Rod Cutting Problem","rod-cutting/1","Medium"),
        gfg("ribbon","Ribbon Cut","cut-the-ribbon/1","Medium"),
        lc(1547,"Min Cost to Cut a Stick","minimum-cost-to-cut-a-stick","Hard"),
        lc(343,"Integer Break","integer-break","Medium"),
        lc(279,"Perfect Squares","perfect-squares","Medium"),
        gfg("dice-throw","Dice Throw","dice-throw2/1","Medium"),
      ]},
      { id:"s5c", title:"5.3 Bounded / Multiple Knapsack", problems:[
        lc(638,"Shopping Offers","shopping-offers","Medium"),
        lc(1388,"Pizza With 3n Slices","pizza-with-3n-slices","Hard"),
        lc(1155,"Dice Rolls with Target Sum","number-of-dice-rolls-with-target-sum","Medium"),
        lc(1449,"Form Largest Integer With Digits","form-largest-integer-with-digits-that-add-up-to-target","Hard"),
        lc(879,"Profitable Schemes","profitable-schemes","Hard"),
        lc(956,"Tallest Billboard","tallest-billboard","Hard"),
        lc(1235,"Max Profit in Job Scheduling","maximum-profit-in-job-scheduling","Hard"),
        lc(2585,"Count Ways to Earn Points","count-the-number-of-square-free-subsets","Hard"),
      ]},
      { id:"s5d", title:"5.4 Multidimensional Knapsack", problems:[
        lc(474,"Ones and Zeroes","ones-and-zeroes","Medium"),
        lc(879,"Profitable Schemes","profitable-schemes","Hard"),
        lc(2218,"Max Value of K Coins From Piles","maximum-value-of-k-coins-from-piles","Hard"),
        lc(1655,"Distribute Repeating Integers","distribute-repeating-integers","Hard"),
        lc(1458,"Max Dot Product of Two Subsequences","max-dot-product-of-two-subsequences","Hard"),
        lc(1751,"Max Events That Can Be Attended II","maximum-number-of-events-that-can-be-attended-ii","Hard"),
      ]},
    ]
  },

  // ── 6. TREE DP ────────────────────────────────────────────────────────────
  {
    id: "s6", title: "6. DP on Trees", color: "#7bed9f",
    subs: [
      { id:"s6a", title:"6.1 Diameter / Path on Tree", problems:[
        lc(543,"Diameter of Binary Tree","diameter-of-binary-tree","Easy"),
        lc(124,"Binary Tree Maximum Path Sum","binary-tree-maximum-path-sum","Hard"),
        lc(1522,"Diameter of N-ary Tree","diameter-of-n-ary-tree","Medium"),
        lc(437,"Path Sum III","path-sum-iii","Medium"),
        lc(1372,"Longest ZigZag Path","longest-zigzag-path-in-a-binary-tree","Medium"),
        lc(1373,"Max Sum BST in Binary Tree","maximum-sum-bst-in-binary-tree","Hard"),
        lc(834,"Sum of Distances in Tree","sum-of-distances-in-tree","Hard"),
        lc(863,"All Nodes Distance K","all-nodes-distance-k-in-binary-tree","Medium"),
        lc(2246,"Longest Path With Different Adjacent Characters","longest-path-with-different-adjacent-characters","Hard"),
      ]},
      { id:"s6b", title:"6.2 Subtree Size / Count", problems:[
        lc(2265,"Count Nodes Equal to Avg of Subtree","count-nodes-equal-to-average-of-subtree","Medium"),
        lc(572,"Subtree of Another Tree","subtree-of-another-tree","Easy"),
        lc(1448,"Count Good Nodes","count-good-nodes-in-binary-tree","Medium"),
        lc(1110,"Delete Nodes and Return Forest","delete-nodes-and-return-forest","Medium"),
        lc(1519,"Nodes in Sub-Tree With Same Label","number-of-nodes-in-the-sub-tree-with-the-same-label","Medium"),
        lc(979,"Distribute Coins in Binary Tree","distribute-coins-in-binary-tree","Medium"),
        gfg("vtx-cover","Vertex Cover in Tree","vertex-cover/1","Hard"),
      ]},
      { id:"s6c", title:"6.3 Independent Set / Coloring", problems:[
        lc(337,"House Robber III","house-robber-iii","Medium"),
        gfg("max-ind-set","Maximum Independent Set of Tree","maximum-independent-set/1","Medium"),
        gfg("min-vtx-cover","Minimum Vertex Cover","vertex-cover/1","Medium"),
        gfg("min-dom-set","Minimum Dominating Set of Tree","minimum-dominating-set/1","Hard"),
      ]},
      { id:"s6d", title:"6.4 Re-rooting Technique", problems:[
        lc(834,"Sum of Distances in Tree","sum-of-distances-in-tree","Hard"),
        lc(310,"Minimum Height Trees","minimum-height-trees","Medium"),
        cf("1187e","CF 1187E — Maximum Weighted Subgraph","1187","E","2600"),
        gfg("farthest-node","Farthest Node from Each Node","farthest-node-in-each-nodes-subtree/1","Medium"),
      ]},
    ]
  },

  // ── 7. GRAPH / DAG DP ─────────────────────────────────────────────────────
  {
    id: "s7", title: "7. DP on Graphs / DAGs", color: "#a29bfe",
    subs: [
      { id:"s7a", title:"7.1 DAG Paths & Costs", problems:[
        gfg("dag-longest","Longest Path in DAG","longest-path-in-a-directed-acyclic-graph/1","Medium"),
        gfg("dag-shortest","Shortest Path in DAG","shortest-path-in-a-directed-acyclic-graph/1","Medium"),
        lc(743,"Network Delay Time","network-delay-time","Medium"),
        lc(787,"Cheapest Flights Within K Stops","find-the-cheapest-flights-within-k-stops","Medium"),
        lc(1584,"Min Cost to Connect All Points","min-cost-to-connect-all-points","Medium"),
        lc(329,"Longest Increasing Path in a Matrix","longest-increasing-path-in-a-matrix","Hard"),
        lc(568,"Maximum Vacation Days","maximum-vacation-days","Hard"),
      ]},
      { id:"s7b", title:"7.2 DP on Implicit Graphs (Memoized DFS)", problems:[
        lc(403,"Frog Jump (variable k)","frog-jump","Hard"),
        lc(871,"Min Refueling Stops","minimum-number-of-refueling-stops","Hard"),
        lc(1928,"Min Cost to Reach Destination in Time","minimum-cost-to-reach-destination-in-time","Hard"),
        lc(1770,"Max Score from Multiplication Operations","maximum-score-from-performing-multiplication-operations","Hard"),
        lc(664,"Strange Printer","strange-printer","Hard"),
        lc(1553,"Min Days to Eat N Oranges","minimum-number-of-days-to-eat-n-oranges","Hard"),
        lc(1263,"Min Moves to Move Box to Target","minimum-moves-to-move-a-box-to-their-target-location","Hard"),
      ]},
    ]
  },

  // ── 8. BITMASK DP ─────────────────────────────────────────────────────────
  {
    id: "s8", title: "8. DP with Bitmasking", color: "#fd79a8",
    subs: [
      { id:"s8a", title:"8.1 TSP / Hamiltonian Path", problems:[
        gfg("tsp","Travelling Salesman Problem","travelling-salesman-problem/1","Hard"),
        lc(943,"Shortest Superstring","find-the-shortest-superstring","Hard"),
        lc(1879,"Min XOR Sum of Two Arrays","minimum-xor-sum-of-two-arrays","Hard"),
        lc(2172,"Maximum AND Sum of Array","maximum-and-sum-of-array","Hard"),
        gfg("ham-path","Hamiltonian Path Existence","hamiltonian-path/1","Hard"),
      ]},
      { id:"s8b", title:"8.2 Assignment / Matching with Bitmask", problems:[
        lc(464,"Can I Win","can-i-win","Medium"),
        lc(526,"Beautiful Arrangement","beautiful-arrangement","Medium"),
        lc(2044,"Count Max Bitwise-OR Subsets","count-number-of-maximum-bitwise-or-subsets","Medium"),
        lc(698,"Partition to K Equal Sum Subsets","partition-to-k-equal-sum-subsets","Medium"),
        lc(691,"Stickers to Spell Word","stickers-to-spell-word","Hard"),
        lc(1799,"Maximize Score After N Operations","maximize-score-after-n-operations","Hard"),
        lc(1655,"Distribute Repeating Integers","distribute-repeating-integers","Hard"),
        lc(1986,"Min Work Sessions to Finish Tasks","minimum-number-of-work-sessions-to-finish-the-tasks","Hard"),
      ]},
      { id:"s8c", title:"8.3 Subset Enumeration (SOS DP)", problems:[
        cf("sos-dp","CF · Sum Over Subsets (SOS DP Tutorial)","165","E","2000"),
        lc(1879,"Min XOR Sum of Two Arrays","minimum-xor-sum-of-two-arrays","Hard"),
        lc(2172,"Max AND Sum of Array","maximum-and-sum-of-array","Hard"),
        lc(1349,"Max Students Taking Exam","maximum-students-taking-exam","Hard"),
        lc(1601,"Max Achievable Transfer Requests","maximum-number-of-achievable-transfer-requests","Hard"),
        lc(1595,"Min Cost to Connect Two Groups","minimum-cost-to-connect-two-groups-of-points","Hard"),
      ]},
    ]
  },

  // ── 9. DIGIT DP ───────────────────────────────────────────────────────────
  {
    id: "s9", title: "9. Digit DP", color: "#e17055",
    subs: [
      { id:"s9a", title:"9.1 Basic Digit DP", problems:[
        lc(357,"Count Numbers with Unique Digits","count-numbers-with-unique-digits","Medium"),
        lc(233,"Number of Digit One","number-of-digit-one","Hard"),
        lc(600,"Non-negative Integers without Consecutive Ones","non-negative-integers-without-consecutive-ones","Hard"),
        lc(902,"Numbers At Most N Given Digit Set","numbers-at-most-n-given-digit-set","Hard"),
        gfg("step-nums","Count Stepping Numbers in Range","stepping-numbers/1","Medium"),
        gfg("digit-sum-k","Count Numbers with Digit Sum = K","sum-of-digits-is-equal-to-k/1","Medium"),
        gfg("no-digit-k","Count Numbers without Digit K","numbers-with-given-sum-of-digits/1","Medium"),
      ]},
      { id:"s9b", title:"9.2 Advanced Digit DP", problems:[
        lc(2376,"Count Special Numbers","count-special-numbers","Hard"),
        lc(2719,"Count of Integers","count-of-integers","Hard"),
        gfg("palindromic-range","Palindromic Numbers in Range","count-of-palindromes/1","Hard"),
        gfg("div-k-range","Count Numbers Divisible by K in Range","count-numbers-in-range/1","Hard"),
        gfg("lucky-range","Lucky Numbers in a Range","lucky-numbers/1","Medium"),
        cf("cf-1073e","CF 1073E · Segment Sum (Digit DP)","1073","E","2400"),
      ]},
    ]
  },

  // ── 10. DP + BINARY SEARCH ────────────────────────────────────────────────
  {
    id: "s10", title: "10. DP with Binary Search", color: "#55efc4",
    subs: [
      { id:"s10a", title:"10.1 LIS with Binary Search O(n log n)", problems:[
        lc(300,"LIS (O(n log n))","longest-increasing-subsequence","Medium"),
        lc(354,"Russian Doll Envelopes","russian-doll-envelopes","Hard"),
        lc(873,"Length of Longest Fibonacci Subsequence","length-of-longest-fibonacci-subsequence","Medium"),
        lc(1027,"Longest Arithmetic Subsequence","longest-arithmetic-subsequence","Medium"),
        lc(1218,"Longest Arith. Subsequence of Given Difference","longest-arithmetic-subsequence-of-given-difference","Medium"),
        lc(1964,"Longest Valid Obstacle Course","find-the-longest-valid-obstacle-course-at-each-position","Hard"),
        lc(1691,"Max Height by Stacking Cuboids","maximum-height-by-stacking-cuboids","Hard"),
        lc(1671,"Min Removals for Mountain Array","minimum-number-of-removals-to-make-mountain-array","Hard"),
      ]},
      { id:"s10b", title:"10.2 Job Scheduling + Interval DP+BS", problems:[
        lc(435,"Non-Overlapping Intervals","non-overlapping-intervals","Medium"),
        lc(1235,"Max Profit in Job Scheduling","maximum-profit-in-job-scheduling","Hard"),
        lc(452,"Min Arrows to Burst Balloons","minimum-number-of-arrows-to-burst-balloons","Medium"),
        lc(1024,"Video Stitching","video-stitching","Medium"),
        lc(1851,"Min Interval to Include Each Query","minimum-interval-to-include-each-query","Hard"),
        lc(2466,"Count Ways to Build Good Strings","count-ways-to-build-good-strings","Medium"),
        lc(1751,"Max Events Can Attend II","maximum-number-of-events-that-can-be-attended-ii","Hard"),
        gfg("weighted-job","Weighted Job Scheduling","job-sequencing-problem/1","Hard"),
      ]},
    ]
  },

  // ── 11. INTERVAL / RANGE DP ───────────────────────────────────────────────
  {
    id: "s11", title: "11. Interval / Range DP", color: "#fdcb6e",
    subs: [
      { id:"s11a", title:"11.1 Matrix Chain / Optimal Parenthesization", problems:[
        ga("mcm","Matrix Chain Multiplication","https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/","Hard"),
        lc(1039,"Min Score Triangulation of Polygon","minimum-score-triangulation-of-polygon","Medium"),
        lc(312,"Burst Balloons","burst-balloons","Hard"),
        lc(664,"Strange Printer","strange-printer","Hard"),
        lc(1000,"Min Cost to Merge Stones","minimum-cost-to-merge-stones","Hard"),
        lc(546,"Remove Boxes","remove-boxes","Hard"),
        lc(1547,"Min Cost to Cut a Stick","minimum-cost-to-cut-a-stick","Hard"),
        lc(375,"Guess Number Higher or Lower II","guess-number-higher-or-lower-ii","Medium"),
        lc(887,"Super Egg Drop","super-egg-drop","Hard"),
      ]},
      { id:"s11b", title:"11.2 Palindrome Interval DP", problems:[
        lc(5,"Longest Palindromic Substring","longest-palindromic-substring","Medium"),
        lc(132,"Palindrome Partitioning II","palindrome-partitioning-ii","Hard"),
        lc(730,"Count Different Palindromic Subsequences","count-different-palindromic-subsequences","Hard"),
        lc(1312,"Min Insertions to Make Palindrome","minimum-insertion-steps-to-make-a-string-palindrome","Hard"),
        lc(516,"Longest Palindromic Subsequence","longest-palindromic-subsequence","Medium"),
      ]},
      { id:"s11c", title:"11.3 Game / Strategy Interval DP", problems:[
        lc(486,"Predict the Winner","predict-the-winner","Medium"),
        lc(877,"Stone Game","stone-game","Medium"),
        gfg("opt-game","Optimal Strategy for a Game","optimal-strategy-for-a-game/1","Medium"),
        lc(375,"Guess Number Higher or Lower II","guess-number-higher-or-lower-ii","Medium"),
        lc(1140,"Stone Game II","stone-game-ii","Medium"),
      ]},
    ]
  },

  // ── 12. PARTITION DP ──────────────────────────────────────────────────────
  {
    id: "s12", title: "12. Partition DP", color: "#6c5ce7",
    subs: [
      { id:"s12a", title:"12.1 Array / String Partitioning", problems:[
        lc(132,"Palindrome Partitioning II","palindrome-partitioning-ii","Hard"),
        lc(410,"Split Array Largest Sum","split-array-largest-sum","Hard"),
        lc(1043,"Partition Array for Maximum Sum","partition-array-for-maximum-sum","Medium"),
        lc(813,"Largest Sum of Averages","largest-sum-of-averages","Medium"),
        lc(1191,"K Concatenation Maximum Sum","k-concatenation-maximum-sum","Medium"),
        lc(1000,"Min Cost to Merge Stones","minimum-cost-to-merge-stones","Hard"),
        lc(91,"Decode Ways","decode-ways","Medium"),
        gfg("alloc-pages","Allocate Minimum Pages","allocate-minimum-number-of-pages/1","Medium"),
      ]},
      { id:"s12b", title:"12.2 Optimal K-Partition", problems:[
        gfg("alloc-pages2","Allocate Min Pages (k students)","allocate-minimum-number-of-pages/1","Medium"),
        gfg("painters","Painters Partition Problem","the-painters-partition-problem/1","Medium"),
        lc(410,"Split Array Largest Sum","split-array-largest-sum","Hard"),
        lc(813,"Largest Sum of Averages (K partitions)","largest-sum-of-averages","Medium"),
        lc(1770,"Max Score from Multiplication Ops","maximum-score-from-performing-multiplication-operations","Hard"),
        lc(1167,"Min Cost to Connect Sticks","minimum-cost-to-connect-sticks","Medium"),
      ]},
    ]
  },

  // ── 13. GAME THEORY DP ────────────────────────────────────────────────────
  {
    id: "s13", title: "13. Game Theory DP", color: "#fab1a0",
    subs: [
      { id:"s13a", title:"13.1 Minimax / Two-Player DP", problems:[
        lc(486,"Predict the Winner","predict-the-winner","Medium"),
        lc(877,"Stone Game","stone-game","Medium"),
        lc(1140,"Stone Game II","stone-game-ii","Medium"),
        lc(1406,"Stone Game III","stone-game-iii","Hard"),
        lc(1510,"Stone Game IV","stone-game-iv","Hard"),
        lc(375,"Guess Number Higher or Lower II","guess-number-higher-or-lower-ii","Medium"),
        lc(913,"Cat and Mouse","cat-and-mouse","Hard"),
        lc(1728,"Cat and Mouse II","cat-and-mouse-ii","Hard"),
        gfg("coins-game","Optimal Strategy for a Game","optimal-strategy-for-a-game/1","Medium"),
      ]},
      { id:"s13b", title:"13.2 Nim / Sprague-Grundy", problems:[
        lc(292,"Nim Game","nim-game","Easy"),
        lc(294,"Flip Game II","flip-game-ii","Medium"),
        lc(1025,"Divisor Game","divisor-game","Easy"),
        lc(464,"Can I Win","can-i-win","Medium"),
        gfg("grundy","Grundy Number for Nim","nimble-game/1","Medium"),
        gfg("wythoff","Wythoff's Game","wythoff-game/1","Hard"),
      ]},
      { id:"s13c", title:"13.3 Combinatorial Games on Arrays", problems:[
        gfg("coins-line","Coins in a Line","coins-in-a-line/1","Medium"),
        gfg("coins-line2","Coins in a Line II","coins-in-a-line-2/1","Medium"),
        gfg("coins-line3","Coins in a Line III","coins-in-a-line-3/1","Hard"),
        gfg("xor-nim","XOR Nim with K Piles","xor-game/1","Hard"),
      ]},
    ]
  },

  // ── 14. PROBABILITY / EXPECTED VALUE DP ───────────────────────────────────
  {
    id: "s14", title: "14. Probability & Expected Value DP", color: "#74b9ff",
    subs: [
      { id:"s14a", title:"14.1 Expected Value DP", problems:[
        lc(837,"New 21 Game","new-21-game","Medium"),
        lc(808,"Soup Servings","soup-servings","Medium"),
        lc(1223,"Dice Roll Simulation","dice-roll-simulation","Hard"),
        lc(688,"Knight Probability in Chessboard","knight-probability-in-chessboard","Medium"),
        lc(552,"Student Attendance Record II","student-attendance-record-ii","Hard"),
        lc(1467,"Probability of Two Boxes with Same Distinct Balls","probability-of-a-two-boxes-having-the-same-number-of-distinct-balls","Hard"),
      ]},
      { id:"s14b", title:"14.2 Random Walks / Out-of-Boundary DP", problems:[
        lc(909,"Snakes and Ladders","snakes-and-ladders","Medium"),
        lc(688,"Knight Probability in Chessboard","knight-probability-in-chessboard","Medium"),
        lc(576,"Out of Boundary Paths","out-of-boundary-paths","Medium"),
        gfg("rw-expected","Expected Steps in Random Walk","expected-number-of-moves/1","Medium"),
      ]},
    ]
  },

  // ── 15. CLASSIC DP OPTIMIZATIONS ──────────────────────────────────────────
  {
    id: "s15", title: "15. Classic DP Optimizations", color: "#00cec9",
    subs: [
      { id:"s15a", title:"15.1 Divide & Conquer Optimization", problems:[
        lc(813,"Largest Sum of Averages (D&C)","largest-sum-of-averages","Medium"),
        lc(1235,"Max Profit in Job Scheduling","maximum-profit-in-job-scheduling","Hard"),
        lc(857,"Min Cost to Hire K Workers","minimum-cost-to-hire-k-workers","Hard"),
        cf("1603e","CF 1603E · Escape the Maze","1603","E","2600"),
        cf("524f","CF 524F · Basketball","524","F","2700"),
        spoj("nkleaves","SPOJ NKLEAVES","NKLEAVES","Hard"),
      ]},
      { id:"s15b", title:"15.2 Convex Hull Trick (CHT / Li Chao Tree)", problems:[
        cf("311e","CF 311E · Horizontal and Vertical (Li Chao)","311","E","2700"),
        cf("319c","CF 319C · Kalila and Dimna (Li Chao Tree)","319","C","2400"),
        cf("1083e","CF 1083E · The Fair Nut and Rectangles","1083","E","2600"),
        cf("660f","CF 660F · Bear and Bowling (CHT)","660","F","3100"),
        spoj("fences","SPOJ Fences (Classic CHT)","ACQUIRE","Hard"),
      ]},
      { id:"s15c", title:"15.3 Matrix Exponentiation", problems:[
        gfg("mat-fib","Nth Fibonacci (Matrix Expo)","matrix-exponentiation/1","Medium"),
        gfg("mat-trib","Tribonacci via Matrix Expo","tribonacci-numbers/1","Medium"),
        ga("mat-paths","Paths of Length N in Graph","https://www.geeksforgeeks.org/matrix-exponentiation/","Hard"),
        ga("mat-tiling","Tiling 2×N via Matrix","https://www.geeksforgeeks.org/tiling-problem/","Hard"),
        cf("509c","CF 509C · Sums of Digits","509","C","2400"),
      ]},
      { id:"s15d", title:"15.4 Monotonic Queue / Deque Optimization", problems:[
        lc(1696,"Jump Game VI","jump-game-vi","Medium"),
        lc(239,"Sliding Window Maximum","sliding-window-maximum","Hard"),
        lc(1425,"Constrained Subsequence Sum","constrained-subsequence-sum","Hard"),
        gfg("deque-max","Max Sum Subarray of Length at Most K","max-sum-of-a-subarray-with-at-most-k-elements/1","Hard"),
        cf("940e","CF 940E · Kira and Mathematics","940","E","2700"),
      ]},
      { id:"s15e", title:"15.5 Knuth's Optimization", problems:[
        ga("mcm-knuth","Matrix Chain Multiplication (Knuth)","https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/","Hard"),
        ga("obst","Optimal BST (Knuth's Algorithm)","https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/","Hard"),
        cf("321e","CF 321E · Ciel and Gondolas","321","E","2600"),
        spoj("mixtures","SPOJ MIXTURES · Merging Mixtures","MIXTURES","Hard"),
        ga("stone-merge","Stone Merging (Min Cost)","https://www.geeksforgeeks.org/minimum-cost-to-merge-stones/","Hard"),
      ]},
    ]
  },

  // ── 16. MISCELLANEOUS ─────────────────────────────────────────────────────
  {
    id: "s16", title: "16. Miscellaneous / Mixed", color: "#b2bec3",
    subs: [
      { id:"s16a", title:"16.1 Profile / Broken Profile DP", problems:[
        ga("tiling-2n","Tiling 2×N with Dominoes","https://www.geeksforgeeks.org/tiling-problem/","Medium"),
        ga("tiling-mn","Count Tilings of M×N Board","https://www.geeksforgeeks.org/count-possible-ways-to-construct-buildings/","Hard"),
        cf("2b","CF 2B · The Least Round Way","2","B","1800"),
        cf("226e","CF 226E · Noble Knight's Path","226","E","2900"),
      ]},
      { id:"s16b", title:"16.2 SOS DP (Sum Over Subsets)", problems:[
        lc(1879,"Min XOR Sum of Two Arrays","minimum-xor-sum-of-two-arrays","Hard"),
        lc(2172,"Max AND Sum of Array","maximum-and-sum-of-array","Hard"),
        lc(1349,"Max Students Taking Exam","maximum-students-taking-exam","Hard"),
        lc(1601,"Max Achievable Transfer Requests","maximum-number-of-achievable-transfer-requests","Hard"),
        lc(1595,"Min Cost to Connect Two Groups","minimum-cost-to-connect-two-groups-of-points","Hard"),
        cf("165e","CF 165E · Compatible Numbers (SOS)","165","E","2000"),
      ]},
      { id:"s16c", title:"16.3 DP on Permutations / Counting", problems:[
        lc(996,"Number of Squareful Arrays","number-of-squareful-arrays","Hard"),
        gfg("derangements","Count Derangements","dearrangement-of-balls/1","Medium"),
        gfg("inv-count","Count Permutations with Given Inversions","count-inversions/1","Medium"),
        lc(940,"Distinct Subsequences II","distinct-subsequences-ii","Hard"),
      ]},
      { id:"s16d", title:"16.4 DP with Data Structures (BIT/SegTree)", problems:[
        lc(327,"Count of Range Sum","count-of-range-sum","Hard"),
        lc(493,"Reverse Pairs","reverse-pairs","Hard"),
        lc(315,"Count Smaller Numbers After Self","count-of-smaller-numbers-after-self","Hard"),
        cf("380c","CF 380C · Sereja and Brackets (Seg Tree DP)","380","C","2000"),
        cf("280d","CF 280D · k-Maximum Subsequence Sum","280","D","2600"),
      ]},
      { id:"s16e", title:"16.5 Interval DP with Merging", problems:[
        lc(312,"Burst Balloons","burst-balloons","Hard"),
        lc(546,"Remove Boxes","remove-boxes","Hard"),
        lc(664,"Strange Printer","strange-printer","Hard"),
        lc(1000,"Min Cost to Merge Stones","minimum-cost-to-merge-stones","Hard"),
        lc(1039,"Min Score Triangulation of Polygon","minimum-score-triangulation-of-polygon","Medium"),
        lc(2466,"Count Ways to Build Good Strings","count-ways-to-build-good-strings","Medium"),
      ]},
      { id:"s16f", title:"16.6 Swap-Based DP ⭐", problems:[
        lc(801,"Min Swaps to Make Sequences Increasing","minimum-swaps-to-make-sequences-increasing","Hard"),
        lc(1187,"Make Array Strictly Increasing","make-array-strictly-increasing","Hard"),
        lc(1963,"Min Swaps to Make String Balanced","minimum-number-of-swaps-to-make-the-string-balanced","Medium"),
        lc(777,"Swap Adjacent in LR String","swap-adjacent-in-lr-string","Medium"),
        lc(1703,"Min Adjacent Swaps for K Consecutive Ones","minimum-adjacent-swaps-for-k-consecutive-ones","Hard"),
        gfg("min-swaps-sort","Min Swaps to Sort Array","minimum-swaps-to-sort-an-array/1","Medium"),
      ]},
    ]
  },

  // ── 17. ADVANCED CP-HARD OPTIMIZATIONS ────────────────────────────────────
  {
    id: "s17", title: "17. Advanced Optimizations (CP Hard Tier) 🔥", color: "#ff4500",
    subs: [
      { id:"s17a", title:"17.1 Alien's Trick / WQS Binary Search", problems:[
        lc(188,"Best Time to Buy Sell Stock IV (WQS)","best-time-to-buy-and-sell-stock-iv","Hard"),
        lc(2209,"Min White Tiles After Covering","minimize-the-total-price-of-the-trips","Hard"),
        lc(2646,"Minimize Total Price of Trips","minimize-the-total-price-of-the-trips","Hard"),
        cf("739e","CF 739E · Gosha is Hunting (WQS)","739","E","2900"),
        cf("321c","CF 321C · Ciel and Robot","321","C","2000"),
        ga("ioi-aliens","IOI 2016 — Aliens (original problem)","https://oj.uz/problem/view/IOI16_aliens","Legendary"),
        cf("1603e2","CF 1603E · WQS variant","1603","E","2600"),
      ]},
      { id:"s17b", title:"17.2 Slope Trick", problems:[
        lc(2037,"Min Moves to Seat Everyone (intro)","minimum-number-of-moves-to-seat-everyone","Easy"),
        lc(2263,"Make Array Non-decreasing","minimum-cost-to-make-array-equal","Hard"),
        cf("713c","CF 713C · Sonya and Problem Without a Legend","713","C","2100"),
        cf("1601d","CF 1601D · Difficult Mountain","1601","D","2400"),
        cf("660f2","CF 660F · Bear and Bowling (CHT+Slope)","660","F","3100"),
        cf("436e","CF 436E · Infimum Cut","436","E","2700"),
      ]},
      { id:"s17c", title:"17.3 Hirschberg's Algorithm (Space-Opt Seq DP)", problems:[
        lc(72,"Edit Distance (O(N) space reconstruct)","edit-distance","Hard"),
        lc(1143,"LCS (O(N) space reconstruct)","longest-common-subsequence","Medium"),
        lc(1092,"Shortest Common Supersequence (Hirschberg)","shortest-common-supersequence","Hard"),
        ga("hirschberg","Hirschberg's Algorithm Theory","https://www.geeksforgeeks.org/hirschbergs-algorithm-for-lcs/","Hard"),
        gfg("lcs-large","LCS of Large Strings (N,M up to 10^6)","longest-common-subsequence-in-a-string/1","Hard"),
      ]},
    ]
  },

  // ── 18. DP ON STRING AUTOMATA ─────────────────────────────────────────────
  {
    id: "s18", title: "18. DP on String Automata", color: "#e84393",
    subs: [
      { id:"s18a", title:"18.1 DP on Aho-Corasick Automaton", problems:[
        gfg("ac-count","Count strings not containing a pattern","aho-corasick-algorithm-for-pattern-searching/1","Medium"),
        cf("86c","CF 86C · Andrey and a Time Machine","86","C","2200"),
        cf("696d","CF 696D · Legen… (Count Strings via AC DP)","696","D","2400"),
        cf("1202e","CF 1202E · You Need to Solve a Shorter Problem","1202","E","2500"),
        cf("235c","CF 235C · Cyclical Quest (AC+DP)","235","C","2200"),
        cf("1017e","CF 1017E · The Fibonacci Experiments","1017","E","2800"),
      ]},
      { id:"s18b", title:"18.2 DP on Trie", problems:[
        lc(421,"Max XOR of Two Numbers in Array","maximum-xor-of-two-numbers-in-an-array","Medium"),
        lc(1707,"Max XOR With Element From Array","maximum-xor-with-an-element-from-array","Hard"),
        cf("665e","CF 665E · Beautiful Subarrays (Trie DP)","665","E","2400"),
        cf("706d","CF 706D · Vasiliy's Multiset (Online Trie)","706","D","2000"),
        cf("871d","CF 871D · Persistent Trie + DP","871","D","2700"),
      ]},
    ]
  },

  // ── 19. ULTRA-ADVANCED NICHE ──────────────────────────────────────────────
  {
    id: "s19", title: "19. Ultra-Advanced Niche Patterns 🧩", color: "#a29bfe",
    subs: [
      { id:"s19a", title:"19.1 Plug DP (Broken Profile + Connectivity)", problems:[
        gfg("ham-grid","Count Hamiltonian Paths in Grid (small)","hamiltonian-path/1","Hard"),
        cf("8e","CF 8E · Rotate Columns","8","E","2900"),
        spoj("turing","SPOJ TURING · Turing's Formula","TURING","Hard"),
        ga("formula1","CF Formula 1 — Hamiltonian Cycle on Grid","https://codeforces.com/problemset/problem/3/D","Legendary"),
        cf("91b","CF 91B · Queue (Plug DP connectivity)","91","B","2800"),
      ]},
      { id:"s19b", title:"19.2 DP on Divisors (Number Theoretic DP)", problems:[
        gfg("div-arrays","Count Arrays Where A[i] Divides A[i+1]","arrange-consonants-and-vowels/1","Medium"),
        cf("1033d","CF 1033D · Divisors (Multiplicative DP)","1033","D","2200"),
        lc(1015,"Smallest Integer Divisible by K","smallest-integer-divisible-by-k","Medium"),
        cf("986f","CF 986F · Oppa Funcan (Divisor DP)","986","F","3000"),
        cf("1103e","CF 1103E · Radix Sort (Dirichlet DP)","1103","E","2800"),
      ]},
      { id:"s19c", title:"19.3 Tree Knapsack O(N²) — Subtree Merge", problems:[
        cf("161d","CF 161D · Distance in Tree","161","D","1900"),
        cf("815c","CF 815C · Karen and Supermarket (Tree Knapsack)","815","C","2800"),
        cf("1249f","CF 1249F · Maximum Weight Subset","1249","F","2400"),
        gfg("tree-ks","Select K Nodes from Tree to Maximize Sum","find-the-sum-of-all-numbers-for-every-tree-path/1","Hard"),
        ga("usaco-talent","USACO Talent Show (WQS + Tree Knapsack)","https://usaco.org/index.php?page=viewproblem2&cpid=913","Legendary"),
      ]},
    ]
  },

  // ── 20. DYNAMIC DP (ONLINE UPDATES) ──────────────────────────────────────
  {
    id: "s20", title: "20. Dynamic DP (Online Updates) ⚡", color: "#fddb4e",
    subs: [
      { id:"s20a", title:"20.1 Segment Tree + Matrix for Linear Recurrences", problems:[
        cf("380c2","CF 380C · Sereja and Brackets (Seg Tree)","380","C","2000"),
        cf("1097g","CF 1097G · Vladislav and a Great Game","1097","G","3000"),
        cf("1603f","CF 1603F · September 7th","1603","F","3000"),
        cf("343d","CF 343D · Water Tree (Dynamic DP)","343","D","2200"),
        ga("dyn-dp","Dynamic Max Subarray with Point Updates","https://www.geeksforgeeks.org/range-query-for-sum-of-largest-contiguous-sub-array/","Hard"),
      ]},
      { id:"s20b", title:"20.2 Dynamic DP on Trees (HLD + Matrix Expo)", problems:[
        cf("1188f","CF 1188F · Crossword Expert (HLD + DP)","1188","F","2700"),
        cf("1172f","CF 1172F · Nauuo and Dumbbell","1172","F","2900"),
        cf("916e","CF 916E · Jamie and Tree","916","E","2700"),
        gfg("dyn-tree-rob","Dynamic House Robber on Tree (updates)","tree-dp/1","Hard"),
        ga("hld-matrix","HLD + Matrix Expo for Tree DP Updates","https://www.geeksforgeeks.org/heavy-light-decomposition/","Legendary"),
      ]},
    ]
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const DIFF_COLOR = { Easy:"#00ff88", Medium:"#fdcb6e", Hard:"#ff4757",
  "CF 1900":"#ff9f43","CF 2000":"#ff9f43","CF 2100":"#e17055","CF 2200":"#e17055",
  "CF 2400":"#d63031","CF 2500":"#d63031","CF 2600":"#c0392b","CF 2700":"#9b2335",
  "CF 2800":"#8e24aa","CF 2900":"#6a0dad","CF 3000":"#4a0070","CF 3100":"#2d0040",
  Legendary:"#ff0080" };

const PLAT_COLOR = { LC:"#ffa116", CF:"#1890ff", GFG:"#2f8d46", SPOJ:"#d35400" };

const getDiffColor = (d) => {
  if (d in DIFF_COLOR) return DIFF_COLOR[d];
  if (d.startsWith("CF")) return "#e17055";
  return "#b2bec3";
};

export default function DPTracker() {
  const [done, setDone] = useState(new Set());
  const [open, setOpen] = useState({ s1: true });
  const [openSub, setOpenSub] = useState({});
  const [filter, setFilter] = useState("all");
  const [platFilter, setPlatFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [ready, setReady] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get("dp-tracker-v2");
        if (r) setDone(new Set(JSON.parse(r.value)));
      } catch {}
      setReady(true);
    })();
  }, []);

  const toggle = async (id) => {
    const next = new Set(done);
    next.has(id) ? next.delete(id) : next.add(id);
    setDone(next);
    setSaving(true);
    try { await window.storage.set("dp-tracker-v2", JSON.stringify([...next])); } catch {}
    setTimeout(() => setSaving(false), 600);
  };

  const allProblems = useMemo(() => SECTIONS.flatMap(s => s.subs.flatMap(sub => sub.problems)), []);
  const totalCount = allProblems.length;
  const doneCount = allProblems.filter(p => done.has(p.id)).length;
  const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  const filterProblem = (p) => {
    if (filter === "done" && !done.has(p.id)) return false;
    if (filter === "todo" && done.has(p.id)) return false;
    if (platFilter !== "all" && p.p !== platFilter) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  };

  if (!ready) return (
    <div style={{background:"#0a0a0f",height:"100vh",display:"flex",alignItems:"center",
      justifyContent:"center",color:"#00ff88",fontFamily:"'Courier New',monospace",fontSize:18}}>
      Loading progress...
    </div>
  );

  return (
    <div style={{background:"#0a0a0f",minHeight:"100vh",fontFamily:"'Courier New',monospace",color:"#e0e0e0",padding:"0 0 60px"}}>
      {/* ── HEADER ── */}
      <div style={{background:"linear-gradient(135deg,#0d1117 0%,#161b22 100%)",borderBottom:"1px solid #21262d",padding:"28px 24px 20px",position:"sticky",top:0,zIndex:100}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:6}}>
            <span style={{fontSize:22,fontWeight:700,color:"#00ff88",letterSpacing:1}}>◈ DP MASTER TRACKER</span>
            {saving && <span style={{fontSize:11,color:"#555",animation:"pulse 1s infinite"}}>saving…</span>}
          </div>
          <div style={{fontSize:12,color:"#666",marginBottom:14}}>
            {doneCount} / {totalCount} problems solved · {20} patterns · 68 sub-patterns
          </div>

          {/* Progress bar */}
          <div style={{height:8,background:"#21262d",borderRadius:4,overflow:"hidden",marginBottom:14}}>
            <div style={{height:"100%",width:`${pct}%`,background:"linear-gradient(90deg,#00ff88,#00d4ff)",
              borderRadius:4,transition:"width 0.4s ease"}}/>
          </div>

          {/* Stats pills */}
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:14}}>
            {[
              {l:"🏆 Total",v:totalCount,c:"#444"},
              {l:"✅ Done",v:doneCount,c:"#00ff88"},
              {l:"⏳ Left",v:totalCount-doneCount,c:"#ffd32a"},
              {l:"📊 Progress",v:`${pct}%`,c:"#00d4ff"},
            ].map(({l,v,c})=>(
              <div key={l} style={{background:"#161b22",border:`1px solid ${c}33`,
                borderRadius:6,padding:"4px 12px",fontSize:12}}>
                <span style={{color:"#777"}}>{l}: </span>
                <span style={{color:c,fontWeight:700}}>{v}</span>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
            <input value={search} onChange={e=>setSearch(e.target.value)}
              placeholder="🔍 search problems…"
              style={{background:"#161b22",border:"1px solid #30363d",color:"#e0e0e0",
                borderRadius:6,padding:"5px 10px",fontSize:12,outline:"none",
                fontFamily:"'Courier New',monospace",width:200}}/>
            {["all","todo","done"].map(f=>(
              <button key={f} onClick={()=>setFilter(f)}
                style={{background:filter===f?"#00ff8820":"#161b22",
                  border:`1px solid ${filter===f?"#00ff88":"#30363d"}`,
                  color:filter===f?"#00ff88":"#777",borderRadius:6,
                  padding:"4px 12px",fontSize:11,cursor:"pointer",fontFamily:"inherit"}}>
                {f==="all"?"All":f==="todo"?"To Do":"Done"}
              </button>
            ))}
            {["all","LC","CF","GFG","SPOJ"].map(p=>(
              <button key={p} onClick={()=>setPlatFilter(p)}
                style={{background:platFilter===p?`${PLAT_COLOR[p]||"#555"}22`:"#161b22",
                  border:`1px solid ${platFilter===p?(PLAT_COLOR[p]||"#00ff88"):"#30363d"}`,
                  color:platFilter===p?(PLAT_COLOR[p]||"#00ff88"):"#777",borderRadius:6,
                  padding:"4px 10px",fontSize:11,cursor:"pointer",fontFamily:"inherit"}}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTIONS ── */}
      <div style={{maxWidth:900,margin:"0 auto",padding:"20px 16px 0"}}>
        {SECTIONS.map(sec => {
          const secProblems = sec.subs.flatMap(s => s.problems);
          const secDone = secProblems.filter(p => done.has(p.id)).length;
          const secPct = secProblems.length ? Math.round(secDone/secProblems.length*100) : 0;
          const isOpen = !!open[sec.id];
          const visibleSubs = sec.subs.map(sub => ({
            ...sub,
            problems: sub.problems.filter(filterProblem)
          })).filter(sub => sub.problems.length > 0);
          if ((filter !== "all" || platFilter !== "all" || search) && visibleSubs.length === 0) return null;

          return (
            <div key={sec.id} style={{marginBottom:12,border:`1px solid #21262d`,
              borderRadius:10,overflow:"hidden",background:"#0d1117"}}>
              {/* Section header */}
              <div onClick={()=>setOpen(o=>({...o,[sec.id]:!o[sec.id]}))}
                style={{display:"flex",alignItems:"center",gap:12,padding:"14px 18px",
                  cursor:"pointer",background:"#0d1117",
                  borderBottom:isOpen?"1px solid #21262d":"none",
                  userSelect:"none"}}>
                <span style={{color:sec.color,fontSize:16}}>{isOpen?"▼":"▶"}</span>
                <span style={{flex:1,fontWeight:700,fontSize:14,color:sec.color,
                  letterSpacing:0.5}}>{sec.title}</span>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{width:80,height:4,background:"#21262d",borderRadius:2}}>
                    <div style={{height:"100%",width:`${secPct}%`,
                      background:sec.color,borderRadius:2,transition:"width 0.3s"}}/>
                  </div>
                  <span style={{fontSize:11,color:"#666",minWidth:60,textAlign:"right"}}>
                    {secDone}/{secProblems.length} · {secPct}%
                  </span>
                </div>
              </div>

              {/* Sub-sections */}
              {isOpen && (
                <div style={{padding:"8px 12px 12px"}}>
                  {(visibleSubs.length > 0 ? visibleSubs : sec.subs.map(s=>({...s,problems:s.problems.filter(filterProblem)}))).map(sub => {
                    const subDone = sub.problems.filter(p=>done.has(p.id)).length;
                    const subOpen = openSub[sub.id] !== false;
                    return (
                      <div key={sub.id} style={{marginBottom:8,border:"1px solid #21262d",
                        borderRadius:8,overflow:"hidden"}}>
                        <div onClick={()=>setOpenSub(o=>({...o,[sub.id]:!subOpen}))}
                          style={{display:"flex",alignItems:"center",gap:8,
                            padding:"9px 14px",cursor:"pointer",background:"#161b22",
                            userSelect:"none"}}>
                          <span style={{color:"#555",fontSize:12}}>{subOpen?"▾":"▸"}</span>
                          <span style={{flex:1,fontSize:12,color:"#ccc",letterSpacing:0.3}}>
                            {sub.title}
                          </span>
                          <span style={{fontSize:11,color:"#555"}}>
                            {subDone}/{sub.problems.length}
                          </span>
                        </div>

                        {subOpen && sub.problems.length > 0 && (
                          <div>
                            {sub.problems.map((p,i) => {
                              const isDone = done.has(p.id);
                              return (
                                <div key={p.id}
                                  style={{display:"flex",alignItems:"center",gap:10,
                                    padding:"7px 14px",
                                    background:isDone?"#0a1f0a":"transparent",
                                    borderTop:"1px solid #1a1f26",
                                    transition:"background 0.2s"}}>
                                  {/* Checkbox */}
                                  <div onClick={()=>toggle(p.id)}
                                    style={{width:16,height:16,borderRadius:3,
                                      border:`1.5px solid ${isDone?"#00ff88":"#444"}`,
                                      background:isDone?"#00ff88":"transparent",
                                      cursor:"pointer",flexShrink:0,
                                      display:"flex",alignItems:"center",justifyContent:"center",
                                      transition:"all 0.15s"}}>
                                    {isDone && <span style={{color:"#000",fontSize:10,fontWeight:900}}>✓</span>}
                                  </div>
                                  {/* Number */}
                                  <span style={{fontSize:10,color:"#444",minWidth:20,
                                    textAlign:"right"}}>{i+1}.</span>
                                  {/* Problem name */}
                                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                                    style={{flex:1,color:isDone?"#4a7c4a":"#c9d1d9",
                                      fontSize:12,textDecoration:"none",
                                      textDecorationLine:isDone?"line-through":"none",
                                      transition:"color 0.2s"}}
                                    onMouseEnter={e=>{if(!isDone)e.target.style.color="#00d4ff"}}
                                    onMouseLeave={e=>{if(!isDone)e.target.style.color="#c9d1d9"}}>
                                    {p.name}
                                  </a>
                                  {/* Platform badge */}
                                  <span style={{fontSize:9,padding:"2px 6px",borderRadius:4,
                                    background:`${PLAT_COLOR[p.p]||"#555"}22`,
                                    color:PLAT_COLOR[p.p]||"#999",
                                    border:`1px solid ${PLAT_COLOR[p.p]||"#555"}44`,
                                    minWidth:32,textAlign:"center",flexShrink:0}}>
                                    {p.p}
                                  </span>
                                  {/* Difficulty badge */}
                                  <span style={{fontSize:9,padding:"2px 6px",borderRadius:4,
                                    color:getDiffColor(p.d),
                                    background:`${getDiffColor(p.d)}18`,
                                    border:`1px solid ${getDiffColor(p.d)}33`,
                                    minWidth:40,textAlign:"center",flexShrink:0,
                                    whiteSpace:"nowrap"}}>
                                    {p.d}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── FOOTER ── */}
      <div style={{maxWidth:900,margin:"24px auto 0",padding:"0 16px"}}>
        <div style={{background:"#161b22",border:"1px solid #21262d",borderRadius:8,
          padding:"12px 16px",fontSize:11,color:"#555",textAlign:"center",lineHeight:1.8}}>
          ◈ Progress auto-saves to browser storage · Links open in new tab<br/>
          20 patterns · 68 sub-patterns · ~640 problems · LeetCode + Codeforces + GFG + SPOJ
        </div>
      </div>
    </div>
  );
}
